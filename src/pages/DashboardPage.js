import React from "react";
import MainLayout from "../layouts/MainLayout";
import { PopularCamplaign } from "../modules/Camplaign";

const DashboardPage = () => {
    return (
        <MainLayout>
            <PopularCamplaign />
        </MainLayout>
    );
};

export default DashboardPage;
