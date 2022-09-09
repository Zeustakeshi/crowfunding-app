import React, { forwardRef } from "react";
import classNames from "../../utils/classNames";
import { IconCheck } from "../Icon";

const Checkbox = (
    { size, colorActive, className = "", checked = false, ...props },
    ref
) => {
    return (
        <label
            style={{
                width: size,
                minWidth: size,
                height: size,
                minHeight: size,
                border: checked && "none",
                borderColor: colorActive || (!checked && "currentColor"),
                background: checked ? colorActive || "#1DC071" : "",
                // borderRadius: size / 10,
            }}
            className={classNames(
                "group",
                "cursor-pointer",
                "w-full h-full relative",
                "border-2",
                "flex-center",
                "overflow-hidden transition-all",
                "min-w-[18px] w-[18px] min-h-[18px] h-[18px] md:min-w-[24px] md:w-[24px]  md:min-h-[24px] md:h-[24px]",
                className
            )}
        >
            <input
                ref={ref}
                type="checkbox"
                hidden
                checked={checked}
                {...props}
            />
            <span
                className={classNames(
                    "flex-center",
                    "w-full h-full",
                    "select-none",
                    checked ? `inline-block ` : "hidden"
                )}
            >
                {checked && <IconCheck />}
            </span>
        </label>
    );
};

// Checkbox.propTypes = {
//     size: PropTypes.number,
//     colorActive: PropTypes.string,
//     className: PropTypes.string,
//     checked: PropTypes.bool,
// };

export default forwardRef(Checkbox);
