import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import Heading from "../../components/Heading/Heading";
import CampaignItemLarge from "./CampaignItemLarge";

const Campaigns = [
    {
        videoUrl:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
        tag: "Architecture",
        title: "Remake - We Make architecture exhibition",
        description:
            "Remake - We Make: an exhibition about architecture's social agency in the face of urbanisation",
        progress: 70,
        raised: 2000,
        raisedOf: 2500,
        TotalBackers: 173,
        // time: 30,
    },
    {
        videoUrl:
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8c21hcnQlMjBob21lfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1400&q=60",
        tag: "Architecture",
        title: "Remake - We Make architecture exhibition s",
        description:
            "Remake - We Make: an exhibition about architecture's social agency in the face of urbanisation",
        progress: 70,
        raised: 2000,
        raisedOf: 2500,
        TotalBackers: 173,
        // time: 30,
    },
];

const CampaignLarge = ({ className, heading, count, showTotalCampaign }) => {
    return (
        <div className={classNames("max-w-[1048px]", className)}>
            <Heading number={showTotalCampaign && Campaigns.length}>
                {heading}
            </Heading>
            <div
                className={classNames(
                    count > 1 && "flexc-start md:gap-10 gap-5 w-full"
                )}
            >
                {Campaigns.slice(0, count).map((Campaign) => (
                    <CampaignItemLarge
                        key={Campaign.title}
                        Campaign={Campaign}
                    />
                ))}
            </div>
        </div>
    );
};

CampaignLarge.propTypes = {
    className: PropTypes.string,
    heading: PropTypes.string,
    count: PropTypes.number,
    showTotalCampaign: PropTypes.bool,
};

export default CampaignLarge;
