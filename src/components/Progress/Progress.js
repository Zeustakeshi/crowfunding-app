import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Progress = ({ progress = 0, height = 5, className }) => {
    return (
        <div
            style={{
                height: height,
            }}
            className={classNames(
                "relative",
                "w-full rounded-full",
                "overflow-hidden",
                "bg-[#EFEFEF]"
            )}
        >
            <span
                style={{
                    width: `${progress}%`,
                }}
                className={classNames(
                    "inline-block",
                    "absolute top-0 left-0 ",
                    "h-full",
                    "bg-primary",
                    className
                )}
            ></span>
        </div>
    );
};

Progress.propTypes = {
    progress: PropTypes.number.isRequired,
};

export default Progress;
