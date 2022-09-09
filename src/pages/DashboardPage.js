import React from "react";
import MainLayout from "../layouts/MainLayout";
import Campaign from "../modules/Campaign/Campaign";
import CampaignLarge from "../modules/Campaign/CampaignLarge";

const DashboardPage = () => {
    return (
        <MainLayout contentClassName="flexc gap-8">
            <CampaignLarge
                heading="Your Campaign"
                count={1}
                showTotalCampaign
            />
            <Campaign heading="Popular Campaign" />
            <Campaign heading="Recent Campaign" />
        </MainLayout>
    );
};

export default DashboardPage;
