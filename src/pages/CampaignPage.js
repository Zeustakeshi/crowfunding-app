import React from "react";
import { Button } from "../components/Button";
import { IconPlus } from "../components/Icon";
import MainLayout from "../layouts/MainLayout";
import CampaignLarge from "../modules/Campaign/CampaignLarge";
import classNames from "../utils/classNames";

const CampaignPage = () => {
    return (
        <MainLayout contentClassName={classNames("flexc gap-10")}>
            <CreateCampaign />
            <CampaignLarge
                heading="Your Campaign"
                count={4}
                showTotalCampaign
            />
            <Button
                kind="secondary3"
                className={classNames("mx-auto", "max-w-[200px]")}
            >
                See more+
            </Button>
        </MainLayout>
    );
};

const CreateCampaign = () => {
    return (
        <div
            className={classNames(
                "px-10 py-8",
                "md:flex-j-between",
                "w-full",
                "bg-white dark:bg-darkSecondary",
                "rounded-3xl"
            )}
        >
            <div
                className={classNames(
                    "flex-start gap-4 md:gap-6",
                    "mb-4 md:mb-0"
                )}
            >
                <Button
                    kind="secondary"
                    className={classNames(
                        "rounded-full",
                        // "px-3 py-3 md:px-4 md:py-4 ",
                        "!min-w-[40px] !min-h-[40px] max-w-[40px] max-h-[40px] md:!min-w-[54px] md:!min-h-[54px] md:max-w-[54px] md:max-h-[54px] "
                    )}
                >
                    <IconPlus className="w-[17px] h-[17px] md:w-[24px] md:h-[24px]" />
                </Button>
                <div
                    className={classNames(
                        "flexc-start md:gap-2 gap-1",
                        "md:text-sm text-xs font-normal text-text3"
                    )}
                >
                    <h1
                        className={classNames(
                            "text-text1 dark:text-white font-semibold md:text-2xl text-sm"
                        )}
                    >
                        Create Your Campaign
                    </h1>
                    <p>
                        Jump right into our editor and create your first Virtue
                        campaign!
                    </p>
                    <p className="text-primary">Need any help? Learn More...</p>
                </div>
            </div>
            <Button kind="secondary3" className={classNames("mx-auto md:mx-0")}>
                Create campaign
            </Button>
        </div>
    );
};

export default CampaignPage;
