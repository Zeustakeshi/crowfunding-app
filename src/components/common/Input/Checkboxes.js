import React from "react";
import { useState } from "react";
import { useController } from "react-hook-form";
import InputCheckbox from "./InputCheckbox";

const Checkboxes = ({ control, name, options }) => {
    const { field } = useController({
        control,
        name,
    });
    console.log(field.value);

    return (
        <div>
            {options?.map((option, index) => (
                <InputCheckbox onchange={() => {}} />
            ))}
        </div>
    );
};

export default Checkboxes;
