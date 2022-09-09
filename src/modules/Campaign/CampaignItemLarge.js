import React from "react";
import PropTypes from "prop-types";
import Image from "../../components/Image";
import classNames from "../../utils/classNames";
import { IconFolder, IconPlay } from "../../components/Icon";
import Progress from "../../components/Progress/Progress";
import CampaignTitle from "./CampaignTitle";
import CampaignDesc from "./CampaignDesc";
import CampaignMeta from "./CampaignMeta";

const CampaignItemLarge = ({ Campaign }) => {
    return (
        <div
            className={classNames(
                "md:flex-start md:gap-8 w-full",
                "rounded-3xl"
            )}
        >
            <div
                className={classNames(
                    "flex-1 shrink-0",
                    "md:h-[266px] h-[210px]",
                    "rounded-[inherit]",
                    "relative",
                    "mb-5 md:mb-0"
                )}
            >
                <Image src={Campaign.videoUrl} className="select-none" />
                <div className={classNames("play-btn")}>
                    <IconPlay />
                </div>
            </div>
            <div
                className={classNames("py-5", "text-text3 font-normal text-sm")}
            >
                <div
                    className={classNames(
                        " font-medium",
                        "flex items-center gap-3",
                        "mb-4"
                    )}
                >
                    <span>
                        <IconFolder className="w-[20px] h-[16px]" />
                    </span>
                    <span>{Campaign.tag}</span>
                </div>
                <div className={classNames("mb-4")}>
                    <CampaignTitle
                        className={classNames("font-bold md:text-xl", "mb-4")}
                    >
                        {Campaign.title}
                    </CampaignTitle>
                    <CampaignDesc>{Campaign.description}</CampaignDesc>
                </div>
                <div className="py-3 mb-3">
                    <Progress progress={Campaign.progress} />
                </div>
                <div className={classNames("flex-j-start gap-8 md:gap-16")}>
                    <RaisedAmountDetails
                        amount={`$${Campaign.raised}`}
                        description={`Raised of $${Campaign.raisedOf}`}
                    />
                    <RaisedAmountDetails
                        amount={Campaign.TotalBackers}
                        description="Total backers"
                    />
                    <RaisedAmountDetails
                        amount={30}
                        description={"Days left"}
                    />
                </div>
            </div>
        </div>
    );
};

const RaisedAmountDetails = ({ amount, description }) => {
    return (
        <CampaignMeta
            amount={amount}
            desc={description}
            className="font-bold md:text-xl text-base"
            descClassName="text-sm md:text-base"
        />
    );
};

CampaignItemLarge.propTypes = {
    Campaign: PropTypes.object.isRequired,
};

export default CampaignItemLarge;
