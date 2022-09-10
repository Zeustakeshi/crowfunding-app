import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import Image from "../../components/Image";

const CampaignAuth = ({ avatar, name }) => {
    return (
        <div className={classNames("flex-j-start gap-3")}>
            <span className="w-[30px] h-[30px] rounded-full inline-block">
                <Image src={avatar} />
            </span>
            <span className="flex-j-start gap-1">
                <span>by</span>
                <span className="text-text2 dark:text-text4 font-semibold">
                    {name}
                </span>
            </span>
        </div>
    );
};

CampaignAuth.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
};

export default CampaignAuth;
