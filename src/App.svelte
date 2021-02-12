<script>
    import { onMount } from 'svelte';
    import { blogURL, stripSeparatorRegex } from "./common/constants";
    import { formatters } from "./common/utils";
    import { initTheme } from "./common/theme";
    import { config, utmParams, builtURL } from "./stores/store";
    import TopSection from "./components/TopSection.svelte";
    import BottomSection from "./components/BottomSection.svelte";
    import AffiliateSection from "./components/AffiliateSection.svelte";
    import GitHubRibbon from "./components/GitHubRibbon.svelte";
    import ThemeSwitcher from "./components/ThemeSwitcher.svelte";
    import SectionContainer from "./components/SectionContainer.svelte";

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

<GitHubRibbon />

<header class="mt-10 mb-10">
    <h1 class="text-4xl font-bold text-white">Derpy UTM Builder</h1>
</header>

<main class="w-11/12 mb-6 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12
  2xl:2-5/12">
    <SectionContainer>
        <TopSection />
    </SectionContainer>

    <SectionContainer>
        <BottomSection />
        <textarea
            class="p-2 resize-none w-full text-center text-gray-400 outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
            id="story" name="story" rows="3">{$builtURL}</textarea>
    </SectionContainer>
</main>

<footer class="mb-3">
    <ThemeSwitcher />
    <AffiliateSection />
    <p class="text-white">
        Made with ❤️ by
        <a target="_blank" rel="noopener" class="hover:underline" href="https://www.derpycoder.com">
            DerpyCoder
        </a>
    </p>
</footer>