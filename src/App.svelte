<script>
    import copy from "copy-text-to-clipboard";
    const blogURL = "https://www.plausible.io";

    let url, campaign, source, medium, builtURL;

    url = campaign = source = medium = builtURL = "";

    $: {
        let tmp = url,
            arr = [];

        if (campaign || source || medium) {
            tmp += `?`;
        }
        if (campaign) {
            arr.push(`utm_campaign=${campaign}`);
        }
        if (source) {
            arr.push(`utm_source=${source}`);
        }
        if (medium) {
            arr.push(`utm_medium=${medium}`);
        }

        builtURL = tmp + arr.join("&");
    }

    const copyURL = () => {
        copy(encodeURI(builtURL));

        iziToast.success({
            title: "OK",
            message: "Copied to Clipboard!",
            position: "bottomCenter"
        });
    };
</script>


<main class="w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:2-5/12">
    <section class="relative p-8 mb-6 bg-white rounded-lg shadow-2xl">
        <form on:submit|preventDefault class="relative flex flex-col justify-between inline-block mb-6 text-left">
            <div class="flex mb-5">
                <label for="company_website"
                    class="inline-flex items-center px-3 px-4 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                    <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                        fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0
              00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0
              101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0
              00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5
              1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
                    </svg>
                </label>
                <div class="flex w-full rounded-md shadow-sm">
                    <input autocomplete="on" name="url"
                        class="flex-1 block w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-none outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                        bind:value={url} placeholder={blogURL} />
                </div>
            </div>
            <div class="grid grid-cols-3 gap-4">
                <div>
                    <label class="ml-1 font-semibold text-gray-500" title="Required: Black Friday, Cyber Monday, ..."
                        for="campaign">
                        Campaign
                    </label>
                    <input autocomplete="on" name="campaign" id="campaign"
                        class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        bind:value={campaign} placeholder="Campaign" />
                </div>
                <div>
                    <label class="ml-1 font-semibold text-gray-500" title="Required: Black Friday, Cyber Monday, ..."
                        for="source">
                        Source
                    </label>
                    <input autocomplete="on" name="source" id="source"
                        class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        bind:value={source} placeholder="Source" />
                </div>
                <div>
                    <label class="ml-1 font-semibold text-gray-500" title="Required: Black Friday, Cyber Monday, ..."
                        for="medium">
                        Medium
                    </label>
                    <input autocomplete="on" name="medium" id="medium"
                        class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        bind:value={medium} placeholder="Medium" />
                </div>
            </div>
        </form>

        <textarea
            class="w-full p-2 text-center text-gray-400 rounded-md outline-none resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
            id="story" name="story" rows="3"
            placeholder="https://www.plausible.io?utm_campaign=Campaign&utm_source=Source&utm_medium=Medium">{builtURL}</textarea>

        {#if builtURL.length}
        <button type="button w-full" on:click={()=> copyURL()}
            class="inline-flex items-center p-1 text-sm font-medium text-gray-700 bg-transparent rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-offset-2 focus:ring-indigo-500 focus:ring-2">
            <svg class="h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0
          002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
        </button>
        {/if}
    </section>
</main>