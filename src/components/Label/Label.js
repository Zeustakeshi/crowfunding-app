import React from "react";
import classNames from "../../utils/classNames";

const Label = ({ htmlFor = "", children, className = "" }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={classNames(
                "cursor-pointer",
                " inline-block",
                "py-3",
                "text-sm font-medium text-text2 dark:text-text3",
                className
            )}
        >
            {children}
        </label>
    );
};

export default Label;
