import React, { useState } from "react";

import { useController } from "react-hook-form";

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
        <div
            className={`flex justify-between items-center border border-whiteStrock rounded-xl ${
                error?.message
                    ? "border-error"
                    : "focus-within:border-green-200"
            }   transition-all  ${wrapperClassName}`}
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
                className={`outline-none w-full transition-all rounded-[inherit] text-text1 font-medium text-base leading-[22px] pl-5  py-3  flex justify-start items-center placeholder:text-text4 placeholder:text-sm placeholder:leading-[22px] ${className}`}
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
    );
};

const IputIcon = ({ inputState, setInputState, className }) => {
    const { icon } = inputState;
    return (
        <span
            className={`cursor-pointer transition-all  p-3 ${className || ""}`}
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

export default Input;
