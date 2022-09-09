import React from "react";
// import PropTypes from "prop-types";
import Image from "../../components/Image";
import classNames from "../../utils/classNames";
import { IconFolder } from "../../components/Icon";
import CampaignTitle from "./CampaignTitle";
import CampaignDesc from "./CampaignDesc";
import CampaignMeta from "./CampaignMeta";

const Campaign = {
    imageUrl:
        "https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    tag: "Education",
    title: "Powered Kits Learning Boxes Powered Kits Learning BoxesPowered Kits Learning BoxesPowered Kits Learning BoxesPowered Kits Learning Boxes",
    description:
        "Fun, durable and reusable boxes with eco-friendly options. Fun, durable and reusable boxes with eco-friendly options.Fun, durable and reusable boxes with eco-friendly options.Fun, durable and reusable boxes with eco-friendly options.Fun, durable and reusable boxes with eco-friendly options.",
    auth: {
        name: "Mahfuzul Nabil",
        avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8dXNlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60",
    },
    raisedOf: 1900,
    raised: "$2000",
    totalBacker: 173,
};

const CampaignItem = ({}) => {
    const {
        imageUrl,
        tag,
        title,
        description,
        auth,
        raised,
        raisedOf,
        totalBacker,
    } = Campaign;
    return (
        <div
            className={classNames(
                "max-w-[288px] ",
                "shadow-style3 dark:shadow-none",
                "bg-white dark:bg-darkSecondary",
                "rounded-2xl",
                "text-xs text-text3  font-normal"
            )}
        >
            <div
                className={classNames("w-full h-[158px]", "rounded-[inherit]")}
            >
                <Image src={imageUrl} alt="Campaign image" />
            </div>
            <div className={classNames("p-5")}>
                <div
                    className={classNames(
                        " font-medium",
                        "flex justify-start gap-3",
                        "mb-4"
                    )}
                >
                    <span>
                        <IconFolder></IconFolder>
                    </span>
                    <span>{tag}</span>
                </div>
                <div className={classNames("mb-4")}>
                    <CampaignTitle
                        className={classNames(
                            "font-semibold text-base",
                            "mb-1"
                        )}
                    >
                        {title}
                    </CampaignTitle>
                    <CampaignDesc>{description}</CampaignDesc>
                </div>
                <div className={classNames("flex-j-between", "mb-5")}>
                    <CampaignMeta
                        amount={raised}
                        desc={` Raised of ${raisedOf}`}
                        className="font-semibold text-sm"
                        descClassName="text-xs font-normal"
                    />
                    <CampaignMeta
                        amount={totalBacker}
                        desc={`Total backer`}
                        className="font-semibold text-sm"
                        descClassName="text-xs font-normal"
                    />
                </div>
                <div className={classNames("flex-j-start gap-3")}>
                    <span className="w-[30px] h-[30px] rounded-full inline-block">
                        <Image src={auth.avatar} to="/campaign" />
                    </span>
                    <span className="flex-j-start gap-1">
                        <span>by</span>
                        <span className="text-text2 dark:text-text4 font-semibold">
                            {auth.name}
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
};

// CampaignItem.propTypes = {
//     imageUrl: PropTypes.string,
//     tag: PropTypes.string,
//     title: PropTypes.string,
//     description: PropTypes.string,
//     auth: PropTypes.shape({
//         name: PropTypes.string,
//         avatar: PropTypes.string,
//     }),
//     raised: PropTypes.number,
//     raisedOf: PropTypes.number,
//     totalBacker: PropTypes.number,
// };

export default CampaignItem;
