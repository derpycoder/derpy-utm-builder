import { writable } from '../../snowpack/pkg/svelte/store.js';
import { initialUTMParams, blogURL } from "../common/index.js";

export const config = writable({
    url: "",
    format: "Title Case",
    campaign: "",
    terms: ""
});

export const utmParams = writable([initialUTMParams]);

export const builtURL = writable(blogURL)