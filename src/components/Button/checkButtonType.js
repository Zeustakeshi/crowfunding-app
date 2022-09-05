import classNames from "../../utils/classNames";

export default function checkButtonType(kind) {
    switch (kind) {
        case "primary":
            return classNames(
                "p-3",
                "bg-primary dark:bg-primaryExtra",
                "text-white",
                "rounded-xl",
                "min-h-[52px]"
            );
        case "primary2":
            return classNames(
                "px-3 py-2",
                "bg-primary dark:bg-primaryExtra",
                "text-white text-sm",
                "rounded-md",
                "min-h-[40px]"
            );
        case "secondary":
            return classNames(
                "p-3",
                "bg-secondary",
                "text-white",
                "rounded-xl",
                "min-h-[52px]"
            );
        case "secondary2":
            return classNames(
                "px-3 py-2",
                "bg-darkSecondary",
                "text-white text-sm",
                "rounded-md",
                "min-h-[40px]"
            );
        case "outline":
            return classNames(
                "p-3",
                "bg-transparent",
                "text-text2 dark:text-white",
                "rounded-xl border border-whiteStroke dark:border-darkStroke ",
                "min-h-[52px]"
            );
        default:
            return "";
    }
}
