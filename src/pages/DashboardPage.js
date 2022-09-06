import React from "react";
import MainLayout from "../layouts/MainLayout";
import Camplaign from "../modules/Camplaign/Camplaign";
import CamplaignLarge from "../modules/Camplaign/CamplaignLarge";

const DashboardPage = () => {
    return (
        <MainLayout contentClassName="flexc gap-8">
            <CamplaignLarge
                heading="Your Campaign"
                count={1}
                showTotalCamplaign
            />
            <Camplaign heading="Popular Campaign" />
            <Camplaign heading="Recent Campaign" />
        </MainLayout>
    );
};

export default DashboardPage;
