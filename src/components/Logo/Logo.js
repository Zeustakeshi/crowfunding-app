import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "../../utils/classNames";
import PropTypes from "prop-types";

const Logo = ({ size = 140, sizeMobile = 120, className = "" }) => {
    return (
        <NavLink
            to="/"
            style={{
                "--size": `${size}px`,
                "--mobile-size": `${sizeMobile}px`,
            }}
            className={classNames(
                "logo",
                "inline-block",
                "overflow-hidden",
                className
            )}
        >
            <img srcSet="/Logo.svg " alt="Crowfunding" className="img-cover" />
        </NavLink>
    );
};

Logo.propTypes = {
    size: PropTypes.number,
    sizeMobile: PropTypes.number,
    classNames: PropTypes.string,
};

export default Logo;
