import React from "react";
import PropTypes from "prop-types";
import Heading from "../../components/Heading/Heading";
import CampaignItem from "./CampaignItem";
import classNames from "../../utils/classNames";

const Campaign = ({ heading, className }) => {
    return (
        <div className={classNames(className)}>
            <Heading>{heading}</Heading>
            <div className={classNames("grid grid-cols-4 gap-8")}>
                {new Array(4).fill(0).map((Campaign, index) => (
                    <CampaignItem key={index}></CampaignItem>
                ))}
            </div>
        </div>
    );
};

Campaign.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
};

export default Campaign;
