import React, { useState } from "react";

import { useController } from "react-hook-form";

import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Input = ({
    name,
    type,
    control,
    defaultValue = "",
    placeholder = "",
    className = "",
    wrapperClassName = "",
    icon,
    ...props
}) => {
    const {
        field,
        fieldState: { error },
    } = useController({
        name,
        control,
        defaultValue,
    });
    const [inputState, setInputState] = useState({ icon, type });
    return (
        <>
            <div
                className={classNames(
                    "flex-center",
                    "border border-whiteStrock dark:border-darkStroke rounded-xl transition-all",
                    error?.message
                        ? " !border-error "
                        : "focus-within:border-green-200 dark:focus-within:border-y-darkStroke",
                    wrapperClassName
                )}
            >
                {inputState?.icon?.position === "left" && (
                    <IputIcon
                        inputState={inputState}
                        setInputState={setInputState}
                        className={inputState.icon.className}
                    />
                )}

                <input
                    placeholder={placeholder}
                    className={classNames(
                        "text-text1 dark:text-white font-medium text-base leading-[22px]",
                        "bg-transparent outline-none w-full transition-all rounded-[inherit] pl-5  py-3",
                        "placeholder:text-text4 dark:placeholder:text-text2 placeholder:text-sm placeholder:leading-[22px]",
                        "flex-center",
                        !icon ? "pr-5" : "",
                        className
                    )}
                    autoComplete="off"
                    type={inputState.type}
                    {...field}
                    {...props}
                />

                {inputState?.icon?.position === "right" && (
                    <IputIcon
                        inputState={inputState}
                        setInputState={setInputState}
                        className={inputState.icon.className}
                    />
                )}
            </div>
            {error && (
                <span
                    className={classNames(
                        "inline-block",
                        "pointer-events-none",
                        "font-medium text-xs md:text-sm text-error text-left",
                        "transition-all p-2 "
                    )}
                >
                    {error.message}
                </span>
            )}
        </>
    );
};

const IputIcon = ({ inputState, setInputState, className = "" }) => {
    const { icon } = inputState;
    return (
        <span
            className={classNames(
                "cursor-pointer",
                "transition-all",
                "p-3",
                className
            )}
            onClick={() => {
                if (icon.toggleElement) {
                    const temp = icon.element;
                    icon.element = icon.toggleElement;
                    icon.toggleElement = temp;
                }
                icon.onClick(inputState, setInputState);
            }}
        >
            {icon.element}
        </span>
    );
};

Input.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    control: PropTypes.any.isRequired,
    defaultValue: PropTypes.string,
    placeholder: PropTypes.string,
    className: PropTypes.string,
    wrapperClassName: PropTypes.string,
    icon: PropTypes.shape({
        position: PropTypes.string,
        element: PropTypes.node,
        toggleElement: PropTypes.node,
        onClick: PropTypes.func,
        className: PropTypes.string,
    }),
};

export default Input;
