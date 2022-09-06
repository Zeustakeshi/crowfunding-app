import React from "react";
import PropTypes from "prop-types";
import Image from "../../components/Image";
import classNames from "../../utils/classNames";
import { IconFolder, IconPlay } from "../../components/Icon";
import Progress from "../../components/Progress/Progress";

const CamplaignItemLarge = ({ camplaign }) => {
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
                <Image src={camplaign.videoUrl} className="select-none" />
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
                    <span>{camplaign.tag}</span>
                </div>
                <div className={classNames("mb-4")}>
                    <h1
                        className={classNames(
                            "text-text1 dark:text-white font-bold md:text-xl",
                            "mb-4",
                            "content-overflow-one-line "
                        )}
                    >
                        {camplaign.title}
                    </h1>
                    <p
                        className="content-overflow-limitline"
                        style={{
                            "--line": 3,
                        }}
                    >
                        {camplaign.description}
                    </p>
                </div>
                <div className="py-3 mb-3">
                    <Progress progress={camplaign.progress} />
                </div>
                <div className={classNames("flex-j-start gap-8 md:gap-16")}>
                    <RaisedAmountDetails
                        amount={`$${camplaign.raised}`}
                        description={`Raised of $${camplaign.raisedOf}`}
                    />
                    <RaisedAmountDetails
                        amount={camplaign.TotalBackers}
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
        <div
            className={classNames(
                "flexc-start gap-1 ",
                "text-sm md:text-base text-text4"
            )}
        >
            <span className="text-text2 dark:text-text4 font-bold md:text-xl text-base">
                {amount}
            </span>
            <span>{description}</span>
        </div>
    );
};

CamplaignItemLarge.propTypes = {};

export default CamplaignItemLarge;
