<script>
    import { fly } from "svelte/transition";
    import { flip } from "svelte/animate";
    import copy from "copy-text-to-clipboard";
    import { config, utmParams, builtURL } from "../stores/store";
    import { showConfetti } from "../common/confetti";
    import { blogURL } from "../common/constants";
    import { formatters } from "../common/utils";

    let selectedId = 0;

    const addUTMRecord = id => {
        selectedId = id;

        let tmp = $utmParams;

        tmp.splice(id + 1, 0, {
            ...$utmParams[id]
        });

        $utmParams = [...tmp];
    };

    const deleteUTMRecord = id => {
        if (id) {
            selectedId = id < $utmParams.length - 1 ? id : id - 1;
        } else {
            selectedId = 0;
        }

        if ($utmParams.length === 1) {
            $utmParams = [initialUTMParams];

            return;
        }

        let tmp = $utmParams;

        tmp.splice(id, 1);

        $utmParams = [...tmp];
    };

    const buildURL = () => {
        let { url, campaign, terms } = $config;

        url = url.trim();

        if (!url) {
            return blogURL;
        }

        let tmp = url;

        let { source, medium, content } = $utmParams[selectedId];

        campaign = campaign.trim();
        terms = terms.trim();
        source = source.trim();
        medium = medium.trim();
        content = content.trim();

        if (campaign) {
            tmp += `?utm_campaign=${campaign}`;

            if (source) {
                tmp += `&utm_source=${source}`;
            }

            if (medium) {
                tmp += `&utm_medium=${medium}`;

                if (terms) {
                    tmp += `&utm_term=${terms}`;
                }

                if (content) {
                    tmp += `&utm_content=${content}`;
                }

                return tmp;
            }
        }

        return "";
    };

    function checkValidity() {
        $utmParams = $utmParams.map(params => {
            const { source, medium } = params;

            return {
                ...params,
                validity: $config.campaign && source && medium
            };
        });
    }

    $: {
        console.log($config.format)
        const format = formatters[$config.format];

        const tmp = $utmParams.map((param) => {
            const { source, medium, content } = param;
            return {
                ...param,
                source: format(source),
                medium: format(medium),
                content: format(content)
            };
        });

        $utmParams = tmp;

        $builtURL = buildURL(selectedId);

        checkValidity();
    }

    const copyURL = id => {
        selectedId = id;
        copy(encodeURI($builtURL));

        showConfetti();

        iziToast.success({
            title: "OK",
            message: "Copied to Clipboard!",
            position: "topRight"
        });
    };
</script>

<div class="w-full mb-3 overflow-auto">
    <table class="bg-white border-collapse table-auto">
        <thead class="text-left text-center">
            <tr class="text-gray-500 border-b border-gray-300">
                <th class="w-1/4 px-4 py-2 cursor-pointer" title="Required: Newsletter, Website, App">
                    Source<span class="text-sm text-red-500">*</span>
                </th>
                <th class="w-1/4 px-4 py-2 cursor-pointer"
                    title="Required: Email, Social, Social Paid, CPC, Display, Affiliate, Referral, Chat">
                    Medium<span class="text-sm text-red-500">*</span>
                </th>
                <th class="w-1/4 px-4 py-2 cursor-pointer" title="Sub Reddit, Groups, ...">
                    Content
                </th>
                <th class="w-1/4 px-4 py-2 cursor-pointer">Actions</th>
            </tr>
        </thead>
        <tbody>
            {#each $utmParams as utmParam, id}
            <tr class="even:bg-gray-100" out:fly={{ y: -50, duration: 100 }} in:fly={{ y: -50, duration: 300 }}>
                <td>
                    <input name="source" class="text-center flex-1 block w-full px-4 py-2 text-gray-600
          truncate outline-none sm:text-sm bg-transparent" placeholder="Source" bind:value={utmParam.source}
                        on:focus={()=> selectedId = id} required />
                </td>
                <td>
                    <input name="medium" class="text-center flex-1 block w-full px-4 py-2 text-gray-600
          truncate outline-none sm:text-sm bg-transparent" placeholder="Medium" bind:value={utmParam.medium}
                        on:focus={()=> selectedId = id} required />
                </td>
                <td>
                    <input name="content" class="text-center block w-full px-4 py-2 text-gray-600
          truncate outline-none sm:text-sm bg-transparent" bind:value={utmParam.content} on:focus={()=>
                    selectedId = id} placeholder="Content" />
                </td>
                <td class="flex justify-around py-1.5">
                    <button type="button w-full" on:click={()=> addUTMRecord(id)}
                        class="inline-flex items-center p-1 text-sm font-medium
                        text-gray-700 bg-transparent rounded-md shadow-sm hover:bg-gray-50
                        focus:outline-none focus:ring-2 focus:ring-offset-2
                        focus:ring-indigo-500">
                        <svg class="h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                    </button>
                    <button id="copy-url" type="button w-full" class={`inline-flex items-center p-1 text-sm font-medium
                        text-gray-700 bg-transparent rounded-md shadow-sm hover:bg-gray-50 focus:outline-none
                        focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${utmParam.validity ? ''
                        : 'cursor-default pointer-events-none' }`} on:click={()=>
                        copyURL(id)}>
                        <svg class={`h-5 ${utmParam.validity ? 'text-gray-500' : 'text-gray-300' }`}
                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6
              12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0
              002 2z" />
                        </svg>
                    </button>
                    <button type="button w-full" on:click={()=> deleteUTMRecord(id)}
                        class="inline-flex items-center p-1 text-sm font-medium
                        text-gray-700 bg-transparent rounded-md shadow-sm tooltip
                        hover:bg-gray-50 focus:outline-none focus:ring-2
                        focus:ring-offset-2 focus:ring-indigo-500">
                        <svg class="h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0
              01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1
              0 00-1 1v3M4 7h16" />
                        </svg>
                    </button>
                </td>
            </tr>
            {/each}
        </tbody>
    </table>
</div>