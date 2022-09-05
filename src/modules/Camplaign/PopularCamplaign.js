import React from "react";
import PropTypes from "prop-types";
import Heading from "../../components/Heading/Heading";
import CamplaignItem from "./CamplaignItem";
import classNames from "../../utils/classNames";

const PopularCamplaign = (props) => {
    return (
        <div>
            <Heading>Popular Campaign</Heading>
            <div className={classNames("flex justify-start flex-wrap gap-8")}>
                {new Array(20).fill(0).map((camplaign, index) => (
                    <CamplaignItem key={index}></CamplaignItem>
                ))}
            </div>
        </div>
    );
};

PopularCamplaign.propTypes = {};

export default PopularCamplaign;
