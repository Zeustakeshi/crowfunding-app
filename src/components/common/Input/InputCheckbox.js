import React from "react";
import { useState } from "react";
import { useController } from "react-hook-form";
import { IconCheck } from "../../Icon";

const InputCheckbox = ({
    name = "",
    control,
    size = 30,
    colorActive,
    value,
    defaultValue = false,
    className,
    ...props
}) => {
    const { field } = useController({ name, control });
    const [checked, setChecked] = useState(() => {
        return typeof field.value === "boolean" ? field.value : defaultValue;
    });
    const isBoolean = typeof field.value === "boolean";
    return (
        <label
            style={{
                width: size,
                minWidth: size,
                height: size,
                minHeight: size,
                borderColor: colorActive || "#2EBAC1",
                background: checked ? colorActive || "#2EBAC1" : "",
                // borderRadius: size / 10,
            }}
            className={` group cursor-pointer w-full h-full relative border-2 overflow-hidden flex justify-center items-center transition-all ${className}`}
        >
            <input
                type="checkbox"
                {...field}
                value={value}
                hidden
                onChange={(e) => {
                    const value = e.target.value;
                    const preValue = field.value;

                    if (e.target.checked) {
                        field.onChange(isBoolean ? true : [...preValue, value]);
                        setChecked(true);
                    } else {
                        field.onChange(
                            isBoolean
                                ? false
                                : preValue.filter((item) => item !== value)
                        );
                        setChecked(false);
                    }
                }}
                checked={checked}
                {...props}
            />
            <span
                className={`${
                    checked ? `inline-block ` : "hidden"
                } select-none flex justify-center items-center w-full h-full `}
            >
                <IconCheck />
            </span>
        </label>
    );
};

export default InputCheckbox;
