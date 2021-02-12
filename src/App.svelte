<script>
    const formatOptions = [
        "Title Case",
        "Capital case",
        "kebab-case",
        "plus+case",
        "snake_case",
        "camelCase",
        "PascalCase",
    ];

    const formatters = {
        "Title Case": (val) => {
            if(!val) {
                return "";
            }
            const titleCase = val.toLowerCase()
                .split(' ')
                .map((word) => {
                    return word.replace(word[0], word[0] && word[0].toUpperCase());
                });
            
            return titleCase.join(' ');
        },
        "Capital case": (val) => {
            return val.toUpperCase();
        },
        "kebab-case": (val) => {
            return val.toUpperCase();
        },
        "plus+case": (val) => {
            return val.toUpperCase();
        },
        "snake_case": (val) => {
            return val.toUpperCase();
        },
        "camelCase": (val) => {
            return val.toUpperCase();
        },
        "PascalCase": (val) => {
            return val.toUpperCase();
        },
    };

    const sources = [
        "Reddit",
        "Facebook",
        "WhatsApp",
        "LinkedIn",
        "Twitter",
        "Hacker News",
    ];

    const mediums = [
        "Social",
        "Chat",
        "Banner",
        "Email",
        "CPC",
        "Direct",
        "Indirect"
    ];

    let config = {
        url: "https://www.derpycoder.com",
        format: "Title Case",
        campaign: "Wuba Luba Dub Dub",
        terms: "Wuba Luba Dub Dub",
    };

    let utmParams = [
        {
            source: "Reddit",
            medium: "Social",
            content: ""
        },
        {
            source: "WhatsApp",
            medium: "Chat",
            content: ""
        }
    ];

    const addUTMRecord = (id) => {
        let tmp = utmParams;

        tmp.splice(id + 1, 0, {
            source: "",
            medium: "",
            content: "",
        });

        utmParams = [
            ...tmp,
        ];
    };

    const deleteUTMRecord = (id) => {
        if(utmParams.length === 1) {
            return;
        }

        let tmp = utmParams;

        tmp.splice(id, 1);

        utmParams = [
            ...tmp,
        ];
    };

    $: {
        const format = formatters[config.format];
        const { campaign, terms } = config;
        
        config = {
            ...config,
            campaign: format(campaign),
            terms: format(terms),
        };

        const tmp = utmParams.map(({source, medium, content}) => {
            return {
                source: format(source),
                medium: format(medium),
                content: format(content),
            };
        });

        utmParams = tmp;
    };
</script>

<a target="_blank" rel="noopener" href="https://github.com/abhijit-kar/snowtail"
    style="position: fixed; top: 0; right: 0; border: 0; z-index: 9999; width: 149px; height: 149px;">
    <img loading="lazy" width="149" height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
        class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1">
</a>

<header class="mt-10 mb-10">
    <h1 class="text-4xl font-bold text-white">UTM Generator</h1>
</header>

<main class="w-11/12 mb-6 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:2-5/12">
    <section class="relative p-8 mb-6 bg-white rounded-lg shadow-2xl">
        <div class="relative flex flex-col justify-between inline-block text-left">
            <div class="flex mb-5">
                <label for="company_website"
                    class="inline-flex items-center px-3 px-4 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                    <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z"
                            clip-rule="evenodd" />
                    </svg>
                </label>
                <div class="flex w-full rounded-md shadow-sm">
                    <input name="url"
                        class="flex-1 block w-full px-4 py-2 border border-gray-300 rounded-none outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                        bind:value={config.url} placeholder="https://www.derpycoder.com">
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <select id="country" name="country" autocomplete="country"
                    bind:value={config.format} class="block px-3 py-2 text-right bg-white border border-gray-300 rounded-md shadow-sm outline-none appearance-none focus:ring-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                    {#each formatOptions as option}
                    <option>{option}</option>
                    {/each}
                </select>
                <input name="campaign"
                    class="px-4 py-2 border border-gray-300 rounded-none rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    bind:value={config.campaign} placeholder="Campaign">
                <input name="terms"
                    class="px-4 py-2 border border-gray-300 rounded-none rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    bind:value={config.terms} placeholder="Terms">
            </div>
        </div>
    </section>

    <section class="relative p-8 pb-3 bg-white rounded-lg shadow-2xl">
        <div class="w-full mb-3 overflow-auto">
            <table class="bg-white border-collapse table-auto">
                <thead class="text-left">
                    <tr class="text-gray-500 border-b border-gray-300">
                        <th></th>
                        <th class="w-1/4 px-4 py-2">
                            <p class='cursor-pointer'>
                                Source<span class="text-sm text-red-500">*</span>
                            </p>
                        </th>
                        <th class="w-1/4 px-4 py-2 cursor-pointer" title="Via">Medium<span
                                class="text-sm text-red-500">*</span>
                        </th>
                        <th class="w-1/4 px-4 py-2 cursor-pointer" title="For A/B Testing Same Link">Content</th>
                        <th class="w-1/4 px-4 py-2 cursor-pointer">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {#each utmParams as utmParam, id}
                    <tr class="even:bg-gray-100">
                        <td>
                            <svg class="w-4 h-4 text-gray-500 cursor-move select-none fill-current" viewBox="0 0 32 32">
                                <path
                                    d="M9.125 27.438h4.563v4.563H9.125zm9.188 0h4.563v4.563h-4.563zm-9.188-9.125h4.563v4.563H9.125zm9.188 0h4.563v4.563h-4.563zM9.125 9.125h4.563v4.563H9.125zm9.188 0h4.563v4.563h-4.563zM9.125 0h4.563v4.563H9.125zm9.188 0h4.563v4.563h-4.563z">
                                </path>
                            </svg>
                        </td>
                        <td>
                            <input list="source" name="source"
                                class="flex-1 block w-full px-4 py-2 text-gray-600 truncate outline-none sm:text-sm bg-transparent"
                                placeholder="Source" bind:value={utmParam.source} required>
                        </td>
                        <td>
                            <input list="medium" name="medium"
                                class="flex-1 block w-full px-4 py-2 text-gray-600 truncate outline-none sm:text-sm bg-transparent"
                                placeholder="Medium" bind:value={utmParam.medium} required>
                        </td>
                        <td>
                            <input name="content"
                                class="block w-full px-4 py-2 text-gray-600 truncate outline-none sm:text-sm bg-transparent"
                                bind:value={utmParam.content} placeholder="Content">
                        </td>
                        <td class="flex justify-around py-1.5">
                            <button type="button w-full" on:click={() => addUTMRecord(id)}
                                class="inline-flex items-center p-1 text-sm font-medium text-gray-700 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <svg class="h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                                </svg>
                            </button>
                            <button id="copy-url" type="button w-full"
                                class="inline-flex items-center p-1 text-sm font-medium text-gray-700 bg-white rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <svg class="h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                                </svg>
                            </button>
                            <button type="button w-full" on:click={() => deleteUTMRecord(id)}
                                class="inline-flex items-center p-1 text-sm font-medium text-gray-700 bg-white rounded-md shadow-sm tooltip hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                <svg class="h-5 text-red-500" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                            </button>
                        </td>
                    </tr>
                    {/each}
                </tbody>
            </table>
        </div>
        <div class="text-center text-gray-400">
            https://www.derpycoder.com
        </div>
    </section>
    <datalist id="source" class="appearance-none">
        {#each sources as source}
            <option value={source}>
        {/each}
    </datalist>
    <datalist id="medium" class="appearance-none">
        {#each mediums as medium}
            <option value={medium}>
        {/each}
    </datalist>
</main>

<footer class="mb-3">
    <button class="mb-6 text-indigo-900 select-none dark:text-white focus:outline-none">
        <svg class="inline-block cursor-pointer fill-current" width="24" height="24" viewBox="0 0 48 48" fill="none"
            xmlns="http://www.w3.org/2000/svg" id="theme-switcher">
            <path
                d="M22 41C32.4934 41 41 32.4934 41 22 41 11.5066 32.4934 3 22 3 11.5066 3 3 11.5066 3 22s8.5066 19 19 19zM7 22C7 13.7157 13.7157 7 22 7V37C13.7157 37 7 30.2843 7 22z">
            </path>
        </svg>
    </button>
    <section
        class="flex justify-center p-5 mb-2 mb-6 text-xs text-gray-900 bg-white shadow-2xl bg-opacity-30 w-referral rounded-xl">
        <div class="w-2/5 mr-2">
            <a id="affiliate-link" href="https://ghost.org?via=derpycoder" target="_blank" rel="noopener">
                <figure>
                    <img src="https://d2gdx5nv84sdx2.cloudfront.net/uploads/pq6gukie/marketing_asset/banner/4835/ghost-squircle.png"
                        alt="Ghost Pro" border="0" class="mb-2">
                    <figcaption class="font-medium hover:underline">Ghost (Pro)</figcaption>
                </figure>
            </a>
        </div>
        <div class="flex flex-col justify-around w-4/5">
            <div>
                👈 This is an affiliate link for the best blog tool in the world.
                <br />
                (Even I use it for my Blog!)
            </div>
            <div>
                See <a class="text-white hover:underline" href="https://www.derpycoder.com/disclosure/" target="_blank"
                    rel="noopener">Disclosure Policy</a>
                for more.
            </div>
        </div>
    </section>
    <p class="text-white">
        Made with ❤️ by
        <a target="_blank" rel="noopener" class="hover:underline" href="https://www.derpycoder.com">DerpyCoder</a>
    </p>
</footer>