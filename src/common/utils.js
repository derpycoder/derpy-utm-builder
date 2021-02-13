import { stripSeparatorRegex } from './';

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
    "plus+case": val => {
        if (!val) {
            return "";
        }

        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("+");
    },
    snake_case: val => {
        if (!val) {
            return "";
        }

        return val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("_");
    },
    "fReE ForM": val => val
};