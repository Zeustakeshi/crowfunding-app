import React, { forwardRef, useState } from "react";
import { useController } from "react-hook-form";
import Checkbox from "../checkbox/Checkbox";

const InputCheckbox = (
    {
        name = "",
        control,
        size = 30,
        colorActive,
        value,
        defaultValue = false,
        className,
        ...props
    },
    ref
) => {
    const { field } = useController({ name, control });
    const [checked, setChecked] = useState(() => {
        return typeof field.value === "boolean" ? field.value : defaultValue;
    });
    const isBoolean = typeof field.value === "boolean";
    const handleChange = (e) => {
        const value = e.target.value;
        const preValue = field.value;

        if (e.target.checked) {
            field.onChange(isBoolean ? true : [...preValue, value]);
            setChecked(true);
        } else {
            field.onChange(
                isBoolean ? false : preValue.filter((item) => item !== value)
            );
            setChecked(false);
        }
    };

    return (
        <Checkbox
            ref={ref}
            size={size}
            colorActive={colorActive}
            className={className}
            checked={checked}
            {...field}
            onChange={handleChange}
            {...props}
        />
    );
};

export default forwardRef(InputCheckbox);
