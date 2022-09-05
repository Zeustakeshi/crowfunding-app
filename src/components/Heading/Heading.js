import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const Heading = ({
    children,
    number,
    className = "",
    numberClassName = "",
}) => {
    return (
        <div
            className={classNames(
                "flex-j-start gap-2",
                "py-3 mb-5 md:mb-3 ",
                "text-text1 dark:text-white text-lg font-semibold",
                className
            )}
        >
            <h1>{children}</h1>
            {number && (
                <span className={classNames("text-secondary", numberClassName)}>
                    {`(${number})`}
                </span>
            )}
        </div>
    );
};

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    number: PropTypes.number,
};

export default Heading;
