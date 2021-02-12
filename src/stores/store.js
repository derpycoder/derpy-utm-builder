import { writable } from 'svelte/store';
import { initialUTMParams, blogURL } from "../common/constants.js";

export const config = writable({
    url: "",
    format: "Title Case",
    campaign: "",
    terms: ""
});

export const utmParams = writable([initialUTMParams]);

export const builtURL = writable(blogURL)