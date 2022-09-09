import React, { useEffect, useRef } from "react";
import { useDropdown } from "../../context/dropdownProvider";
import { IconArrow } from "../Icon";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const DropdownLabel = ({ className = "", label = "" }) => {
    const { currentItem, show, setShow, setCurrentItem } = useDropdown();
    const ref = useRef();
    useEffect(() => {
        setCurrentItem(label);
    }, [label, setCurrentItem]);

    return (
        <div
            ref={ref}
            className={classNames(
                "w-full h-full",
                "flex-j-between",
                "cursor-pointer",
                "rounded-[inherit]",
                className
            )}
            onClick={() => {
                setShow(!show);
            }}
        >
            <div
                className={classNames(
                    "flex-1 shrink-0",
                    "content-overflow-one-line"
                )}
            >
                {currentItem}
            </div>
            <span
                className={classNames(
                    "flex-center",
                    `${!show && "transition-all rotate-180"}`
                )}
            >
                <IconArrow direction="down" />
            </span>
        </div>
    );
};

DropdownLabel.propTypes = {
    className: PropTypes.string,
};

export default DropdownLabel;
