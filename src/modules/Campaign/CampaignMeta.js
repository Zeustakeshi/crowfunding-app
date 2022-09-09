import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const CampaignMeta = ({ amount, desc, className, descClassName }) => {
    return (
        <div className={classNames("flexc-i-start gap-y-1")}>
            <span
                className={classNames("text-text2 dark:text-text4", className)}
            >
                {amount}
            </span>
            <span
                className={classNames(
                    "text-text4 dark:text-text3",
                    descClassName
                )}
            >
                {desc}
            </span>
        </div>
    );
};

CampaignMeta.propTypes = {
    amount: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    desc: PropTypes.string.isRequired,
    className: PropTypes.string,
    descClassName: PropTypes.string,
};

export default CampaignMeta;
