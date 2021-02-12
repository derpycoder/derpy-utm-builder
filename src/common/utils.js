import { stripSeparatorRegex } from './constants';

export const formatters = {
    "Title Case": val => {
        if (!val) {
            return "";
        }
        const titleCase = val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .map(word => {
                return word.replace(word[0], word[0] && word[0].toUpperCase());
            })
            .join(" ");

        return titleCase;
    },
    "lower case": val => {
        if (!val) {
            return "";
        }

        const smallCase = val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join(" ");

        return smallCase;
    },
    "kebab-case": val => {
        if (!val) {
            return "";
        }

        const kebabCase = val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("-");

        return kebabCase;
    },
    "plus+case": val => {
        if (!val) {
            return "";
        }

        const plusCase = val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("+");

        return plusCase;
    },
    snake_case: val => {
        if (!val) {
            return "";
        }

        const snakeCase = val
            .toLowerCase()
            .replace(stripSeparatorRegex, " ")
            .split(" ")
            .join("_");

        return snakeCase;
    },
    "fReE ForM": val => val
};