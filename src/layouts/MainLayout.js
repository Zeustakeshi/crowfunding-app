import PropTypes from "prop-types";
import React from "react";
import Header from "../modules/Header";
import Sidebar from "../modules/Sidebar";
import classNames from "../utils/classNames";

const MainLayout = ({ children, contentClassName }) => {
    return (
        <div
            className={classNames(
                "p-6 md:p-10",
                "bg-lite dark:bg-darkBG",
                "min-h-screen",
                "relative"
            )}
        >
            <Header></Header>
            <div className={classNames("flex-start gap-10")}>
                <Sidebar />
                <div
                    className={classNames("flex-1 shrink-0", contentClassName)}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
    contentClassName: PropTypes.string,
};

export default MainLayout;
