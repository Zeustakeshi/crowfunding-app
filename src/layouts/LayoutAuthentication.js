import PropTypes from "prop-types";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { Logo } from "../components/Logo";
import ErrorComponent from "../components/common/ErrorComponent";

const LayoutAuthentication = ({ children, heading }) => {
    return (
        <div className="relative w-full min-h-screen  bg-lite dark:bg-darkBG p-6 md:p-10  shadow-sm overflow-hidden">
            <div className="bg-ellipse"></div>
            <Logo size={40} className="md:mb-16 mb-5  "></Logo>
            <div className="relative w-full md:max-w-[556px] bg-white dark:bg-darkSecondary rounded-xl mx-auto px-5 py-8 md:px-12 md:py-14 flex flex-col justify-start items-center md:gap-3 gap-2">
                <h1 className="text-center text-lg text-text1 dark:text-white md:text-xl font-semibold ">
                    {heading}
                </h1>
                {children}
            </div>
        </div>
    );
};

LayoutAuthentication.propTypes = {
    heading: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};

export default withErrorBoundary(LayoutAuthentication, {
    FallbackComponent: ErrorComponent,
});
