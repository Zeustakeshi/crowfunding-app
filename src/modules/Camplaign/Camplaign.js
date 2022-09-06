import React from "react";
import PropTypes from "prop-types";
import Heading from "../../components/Heading/Heading";
import CamplaignItem from "./CamplaignItem";
import classNames from "../../utils/classNames";

const Camplaign = ({ heading, className }) => {
    return (
        <div className={classNames(className)}>
            <Heading>{heading}</Heading>
            <div className={classNames("grid grid-cols-4 gap-8")}>
                {new Array(4).fill(0).map((camplaign, index) => (
                    <CamplaignItem key={index}></CamplaignItem>
                ))}
            </div>
        </div>
    );
};

Camplaign.propTypes = {
    heading: PropTypes.string,
    className: PropTypes.string,
};

export default Camplaign;
