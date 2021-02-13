import { stripSeparatorRegex } from './index.js';

export const formatters = {
    "Title Case": val => {
        if (!val) {
            return "";
        }
        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .map(word => {
                return word.replace(word[0], word[0] && word[0].toUpperCase());
            })
            .join(" ");
    },
    "plausible+case": val => {
        if (!val) {
            return "";
        }

        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("+");
    },
    "Plus+Case": val => {
        if (!val) {
            return "";
        }
        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .map(word => {
                return word.replace(word[0], word[0] && word[0].toUpperCase());
            })
            .join("+");
    },
    "lower case": val => {
        if (!val) {
            return "";
        }

        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join(" ");
    },
    "kebab-case": val => {
        if (!val) {
            return "";
        }

        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("-");
    },
    "snake_case": val => {
        if (!val) {
            return "";
        }

        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("_");
    },
    "fREe+CaSE": val => {
        if (!val) {
            return "";
        }

        return val
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("+");
    },
    "fReE FoRm": val => val
};