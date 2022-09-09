import React from "react";
import { useState } from "react";
import { useDropdown } from "../../context/dropdownProvider";
import classNames from "../../utils/classNames";
import Checkbox from "../checkbox/Checkbox";

const DropdownItem = ({
    children,
    className,
    onClick,
    value = "",
    multiSelection = false,
    clickActiveLabel = true,
    id,
}) => {
    const { setCurrentItem, setShow, currentItem, selected, setSelected } =
        useDropdown();
    const [checked, setChecked] = useState(selected.includes(id));
    const handleClick = () => {
        onClick && onClick(currentItem);
        if (multiSelection) {
            setChecked(!checked);
            checked
                ? setSelected(() => selected.filter((item) => item !== id))
                : setSelected([...selected, id]);
        } else {
            clickActiveLabel && setCurrentItem(value);
            setShow(false);
        }
    };

    return (
        <div
            className={classNames(
                "cursor-pointer",
                "transition-all",
                "content-overflow-one-line",
                className
            )}
            onClick={handleClick}
        >
            {multiSelection ? (
                <div className={classNames("flex-j-start gap-2 md:gap-4")}>
                    <Checkbox
                        id={id}
                        checked={checked}
                        onChange={() => {}}
                        className={classNames("rounded-md")}
                    />
                    <span>{children}</span>
                </div>
            ) : (
                children
            )}
        </div>
    );
};

export default DropdownItem;
