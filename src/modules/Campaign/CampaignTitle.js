import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import { Link } from "react-router-dom";

const CampaignTitle = ({ children, className, to }) => {
    return (
        <Link to={to || "/"}>
            <h1
                className={classNames(
                    "text-text1 dark:text-white",
                    "content-overflow-one-line ",
                    className
                )}
            >
                {children}
            </h1>
        </Link>
    );
};

CampaignTitle.propTypes = {
    children: PropTypes.node.isRequired,
    classNames: PropTypes.string,
    to: PropTypes.string,
};

export default CampaignTitle;
