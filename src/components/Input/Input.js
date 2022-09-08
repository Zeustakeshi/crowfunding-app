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
                {inputState?.icon?.elementLeft && (
                    <IputIcon
                        inputState={inputState}
                        setInputState={setInputState}
                        position="left"
                    />
                )}

                <input
                    placeholder={placeholder}
                    className={classNames(
                        "text-text1 dark:text-white font-medium text-base leading-[22px]",
                        "bg-transparent outline-none w-full transition-all rounded-[inherit]",
                        "placeholder:text-text4 dark:placeholder:text-text2 placeholder:text-sm placeholder:leading-[22px]",
                        "flex-center",
                        "py-3",
                        icon
                            ? icon.elementRight && icon.elementLeft
                                ? "px-0"
                                : icon.elementRight
                                ? "pr-0 pl-5"
                                : "pr-5 pl-0"
                            : "px-5",
                        className
                    )}
                    autoComplete="off"
                    type={inputState.type}
                    {...field}
                    {...props}
                />

                {inputState?.icon?.elementRight && (
                    <IputIcon
                        inputState={inputState}
                        setInputState={setInputState}
                        position="right"
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

const IputIcon = ({ inputState, setInputState, position }) => {
    const { icon } = inputState;
    const [iconLeft, setIconLeft] = useState(icon.elementLeft);
    const [iconRight, setIconRight] = useState(icon.elementRight);

    const handleClickIcon = () => {
        if (position === "right") {
            if (icon.toggleElementRight) {
                setIconRight(icon.toggleElementRight);
                icon.toggleElementRight = iconRight;
            }
            if (!icon.onClickElementRight) return;
            icon.onClickElementRight(inputState, setInputState);
        } else if (position === "left") {
            if (icon.toggleElementLeft) {
                setIconLeft(icon.toggleElementLeft);
                icon.toggleElementLeft = iconLeft;
            }
            if (!icon.onClickElementLeft) return;
            icon.onClickElementLeft(inputState, setInputState);
        } else return;
    };

    return (
        <span
            className={classNames(
                "cursor-pointer",
                "transition-all",
                "p-3",
                position === "right"
                    ? icon.elementRightClassName
                    : icon.elementLeftClassName
            )}
            onClick={handleClickIcon}
        >
            {position === "right" ? iconRight : iconLeft}
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
