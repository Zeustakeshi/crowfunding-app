import React, { forwardRef, useRef } from "react";
import { DropdownProvider } from "../../context/dropdownProvider";
import classNames from "../../utils/classNames";

const Dropdown = ({ children, className }, ref) => {
    const dropdownRef = useRef(ref);
    return (
        <DropdownProvider dropdownRef={dropdownRef}>
            <div
                ref={dropdownRef}
                className={classNames(
                    "w-full",
                    "relative",
                    " overflow-hidden",
                    className
                )}
            >
                {children}
            </div>
        </DropdownProvider>
    );
};

export default forwardRef(Dropdown);
