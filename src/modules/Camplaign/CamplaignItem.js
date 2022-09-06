import React from "react";
// import PropTypes from "prop-types";
import Image from "../../components/Image";
import classNames from "../../utils/classNames";
import { IconFolder } from "../../components/Icon";

const camplaign = {
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
    raised: 2000,
    totalBacker: 173,
};

const CamplaignItem = ({}) => {
    const {
        imageUrl,
        tag,
        title,
        description,
        auth,
        raised,
        raisedOf,
        totalBacker,
    } = camplaign;
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
                <Image src={imageUrl} alt="camplaign image" />
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
                    <h3
                        className={classNames(
                            "text-text1 dark:text-white font-semibold text-base",
                            "mb-1",
                            "content-overflow-one-line "
                        )}
                    >
                        {title}
                    </h3>
                    <p
                        className="content-overflow-limitline"
                        style={{
                            "--line": 3,
                        }}
                    >
                        {description}
                    </p>
                </div>
                <div className={classNames("flex-j-between", "mb-5")}>
                    <span className={classNames("flexc gap-y-1")}>
                        <span className="text-text2 dark:text-text4 font-semibold text-sm">
                            ${raised}
                        </span>
                        <span className="text-text4 dark:text-text3 text-xs font-normal">
                            Raised of ${raisedOf}
                        </span>
                    </span>
                    <span className={classNames("flexc gap-y-1")}>
                        <span className="text-text2 dark:text-text4 font-semibold text-sm">
                            {totalBacker}
                        </span>
                        <span className="text-text4 dark:text-text3 text-xs font-normal">
                            Total backers
                        </span>
                    </span>
                </div>
                <div className={classNames("flex-j-start gap-3")}>
                    <span className="w-[30px] h-[30px] rounded-full inline-block">
                        <Image src={auth.avatar} />
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

// CamplaignItem.propTypes = {
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

export default CamplaignItem;
