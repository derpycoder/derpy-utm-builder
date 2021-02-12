<script>
    import { toggleTheme } from "../common/theme";
</script>

<button class="mb-6 text-indigo-900 select-none dark:text-white focus:outline-none">
    <svg class="inline-block cursor-pointer fill-current" width="24" height="24" viewBox="0 0 48 48" fill="none"
        xmlns="http://www.w3.org/2000/svg" id="theme-switcher" on:click={toggleTheme}>
        <path d="M22 41C32.4934 41 41 32.4934 41 22 41 11.5066 32.4934 3 22 3 11.5066
    3 3 11.5066 3 22s8.5066 19 19 19zM7 22C7 13.7157 13.7157 7 22
    7V37C13.7157 37 7 30.2843 7 22z" />
    </svg>
</button>