import { showConfetti } from "../common/confetti";

function setTheme() {
    if (localStorage.theme === "dark") {
        document.documentElement.classList.add("dark");
    } else {
        document.documentElement.classList.remove("dark");
    }
}

export function initTheme() {
    if (!"theme" in localStorage) {
        if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
            localStorage.theme = "dark";
        } else {
            localStorage.theme = "light";
        }
    }

    setTheme();
}

export function toggleTheme() {
    localStorage.theme = localStorage.theme === "dark" ? "light" : "dark";
    setTheme();
    showConfetti();
}