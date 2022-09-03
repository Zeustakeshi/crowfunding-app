import React from "react";

const Label = ({ htmlFor = "", children, className = "" }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={`cursor-pointer inline-block py-3 text-sm font-medium text-text2 dark:text-text3 ${className}`}
        >
            {children}
        </label>
    );
};

export default Label;
