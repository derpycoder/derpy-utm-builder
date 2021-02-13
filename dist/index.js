import App from "./App.svelte.js";
import { initTheme } from "./common/index.js";

initTheme();

let app = new App({
    target: document.body,
});

export default app;
