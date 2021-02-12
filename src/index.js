/* Add JavaScript code here! */
import App from "./App.svelte";

let app = new App({
    target: document.body,
});

initTheme();

document.getElementById('theme-switcher').addEventListener('click', () => {
    toggleTheme();
    // showConfetti();
});

document.getElementById('affiliate-link').addEventListener('click', (e) => {
    // showFireWorks();
});

function setTheme() {
    if (localStorage.theme === 'dark') {
        document.documentElement.classList.add('dark')
    } else {
        document.documentElement.classList.remove('dark')
    }
}

function initTheme() {
    if (!'theme' in localStorage) {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            localStorage.theme = 'dark'
        } else {
            localStorage.theme = 'light'
        }
    }

    setTheme();
}

function toggleTheme() {
    localStorage.theme = localStorage.theme === 'dark' ? 'light' : 'dark';
    setTheme();
}

export default app;
