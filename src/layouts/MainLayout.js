import PropTypes from "prop-types";
import React from "react";
import Header from "../modules/Header";
import Sidebar from "../modules/Sidebar";
import classNames from "../utils/classNames";

const MainLayout = ({ children, ...props }) => {
    return (
        <div
            className={classNames(
                "p-6 md:p-10",
                "bg-lite dark:bg-darkBG",
                "min-h-screen"
            )}
        >
            <Header></Header>
            <div className={classNames("flex-start gap-10")}>
                <Sidebar></Sidebar>
                {children}
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
