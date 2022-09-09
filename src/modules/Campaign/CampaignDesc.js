import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const CampaignDesc = ({ children, className }) => {
    return (
        <p
            className={classNames("content-overflow-limitline", className)}
            style={{
                "--line": 3,
            }}
        >
            {children}
        </p>
    );
};

CampaignDesc.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default CampaignDesc;
