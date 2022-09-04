import React from "react";
import PropTypes from "prop-types";
import classNames from "../utils/classNames";
import Logo from "../components/Logo/Logo";
import Header from "../modules/Header";
import Sidebar from "../modules/Sidebar";

const MainLayout = ({ children, ...props }) => {
    return (
        <div className={classNames("p-6 md:p-10")}>
            <Header></Header>
            <div className={classNames("flex-center gap-10")}>
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
