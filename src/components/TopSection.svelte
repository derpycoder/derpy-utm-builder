<script>
    import { formatters, blogURL, formatOptions } from '../common';
    import { config } from "../stores/store";

    $: {
        const format = formatters[$config.format];
        const { campaign, terms } = $config;

        $config = {
            ...$config,
            campaign: format(campaign),
            terms: format(terms)
        };
    }
</script>

<div class="relative flex flex-col justify-between inline-block text-left">
    <div class="flex mb-5">
        <label for="company_website"
            class="inline-flex items-center px-3 px-4 py-2 text-sm text-gray-500 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
            <svg class="w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0
      00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1
      1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0
      101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1
      1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clip-rule="evenodd" />
            </svg>
        </label>
        <div class="flex w-full rounded-md shadow-sm">
            <input autocomplete="on" name="url"
                class="flex-1 block w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-none outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-r-md sm:text-sm"
                bind:value={$config.url} placeholder={blogURL} autofocus />
        </div>
    </div>
    <div class="grid grid-cols-3 gap-4">
        <div>
            <label class="ml-1 font-semibold text-gray-500" title="Format of Params" for="format">
                Format<span class="text-sm text-red-500">*</span>
            </label>
            <select id="format" name="format" autocomplete="country" bind:value={$config.format}
                class="block w-full px-3 py-2 text-right text-gray-600 bg-white border border-gray-300 rounded-md shadow-sm outline-none appearance-none focus:ring-1 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                {#each formatOptions as option}
                <option>{option}</option>
                {/each}
            </select>
        </div>
        <div>
            <label class="ml-1 font-semibold text-gray-500" title="Required: Black Friday, Cyber Monday, ..."
                for="campaign">
                Campaign<span class="text-sm text-red-500">*</span>
            </label>
            <input autocomplete="on" name="campaign" id="campaign"
                class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                bind:value={$config.campaign} placeholder="Campaign" />
        </div>
        <div>
            <label class="ml-1 font-semibold text-gray-500" title="Keywords Associated" for="terms">
                Terms
            </label>
            <input autocomplete="on" name="terms" id="terms"
                class="w-full px-4 py-2 text-gray-600 border border-gray-300 rounded-md outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                bind:value={$config.terms} placeholder="Terms" />
        </div>
    </div>
</div>