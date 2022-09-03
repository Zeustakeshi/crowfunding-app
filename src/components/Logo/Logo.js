import React from "react";
import { NavLink } from "react-router-dom";
import classNames from "../../utils/classNames";

const Logo = ({ size = 140, className = "" }) => {
    return (
        <NavLink
            to="/"
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
            className={classNames("inline-block", "overflow-hidden", className)}
        >
            <img srcSet="/Logo.svg " alt="Crowfunding" className="img-cover" />
        </NavLink>
    );
};

export default Logo;
