<script>
    import { onMount } from 'svelte';
    import { blogURL, stripSeparatorRegex } from "./common/constants";
    import { formatters } from "./common/utils";
    import { initTheme, toggleTheme } from "./common/theme";
    import { config, utmParams, builtURL } from "./stores/store";
    import TopSection from "./components/TopSection.svelte";
    import BottomSection from "./components/BottomSection.svelte";
    import AffiliateSection from "./components/AffiliateSection.svelte";

    initTheme();

    if (localStorage.derpy_utm_builder) {
        const tmp = JSON.parse(localStorage.derpy_utm_builder);

        $config = tmp.config;
        $utmParams = tmp.utmParams;
    }

    $: persistData();

    function persistData() {
        localStorage.derpy_utm_builder = JSON.stringify({
            config: $config,
            utmParams: $utmParams,
        });
    }
</script>

<a class="hidden md:block" target="_blank" rel="noopener" href="https://github.com/abhijit-kar/snowtail" style="position: fixed; top: 0; right: 0; border: 0; z-index: 9999; width:
  149px; height: 149px;">
    <img loading="lazy" width="149" height="149"
        src="https://github.blog/wp-content/uploads/2008/12/forkme_right_white_ffffff.png?resize=149%2C149"
        class="attachment-full size-full" alt="Fork me on GitHub" data-recalc-dims="1" />
</a>

<header class="mt-10 mb-10">
    <h1 class="text-4xl font-bold text-white">Derpy UTM Builder</h1>
</header>

<main class="w-11/12 mb-6 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12
  2xl:2-5/12">
    <section class="relative p-8 mb-6 bg-white rounded-lg shadow-2xl">
        <TopSection />
    </section>

    <section class="relative p-8 pb-3 bg-white rounded-lg shadow-2xl">
        <BottomSection />
        <textarea class="p-2 resize-none w-full text-center text-gray-400 outline-none focus:ring-2
      focus:ring-indigo-500 focus:border-indigo-500 rounded-md" id="story" name="story" rows="3">{$builtURL}</textarea>
    </section>
</main>

<footer class="mb-3">
    <button class="mb-6 text-indigo-900 select-none dark:text-white focus:outline-none">
        <svg class="inline-block cursor-pointer fill-current" width="24" height="24" viewBox="0 0 48 48" fill="none"
            xmlns="http://www.w3.org/2000/svg" id="theme-switcher" on:click={toggleTheme}>
            <path d="M22 41C32.4934 41 41 32.4934 41 22 41 11.5066 32.4934 3 22 3 11.5066
        3 3 11.5066 3 22s8.5066 19 19 19zM7 22C7 13.7157 13.7157 7 22
        7V37C13.7157 37 7 30.2843 7 22z" />
        </svg>
    </button>
    <AffiliateSection />
    <p class="text-white">
        Made with ❤️ by
        <a target="_blank" rel="noopener" class="hover:underline" href="https://www.derpycoder.com">
            DerpyCoder
        </a>
    </p>
</footer>