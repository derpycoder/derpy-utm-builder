<script>
    import { config, utmParams, builtURL } from "./stores/store";
    import { AffiliateSection, TopSection, BottomSection, GitHubRibbon, ThemeSwitcher, SectionContainer } from "./components";

    if (localStorage.derpy_utm_builder) {
        const tmp = JSON.parse(localStorage.derpy_utm_builder);

        $config = tmp.config;
        $utmParams = tmp.utmParams;
    }

    config.subscribe(persistData);
    utmParams.subscribe(persistData);

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

<main class="w-11/12 xs:w-10/12 sm:w-9/12 md:w-8/12 lg:w-7/12 xl:w-6/12 2xl:2-5/12">
    <SectionContainer>
        <TopSection />
    </SectionContainer>

    <SectionContainer>
        <BottomSection />
        <textarea
            class="w-full p-2 text-center text-gray-400 rounded-md outline-none resize-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
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