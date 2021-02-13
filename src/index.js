import App from "./App.svelte";
import { initTheme } from "./common";

initTheme();

let app = new App({
    target: document.body,
});

export default app;
