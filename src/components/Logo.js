import React from "react";
import { NavLink } from "react-router-dom";

const Logo = ({ size = 140, className = "" }) => {
    return (
        <NavLink
            to="/"
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
            className={`inline-block overflow-hidden ${className}`}
        >
            <img
                srcSet="/Logo.svg "
                alt="Crowfunding"
                className="w-full h-full object-cover"
            />
        </NavLink>
    );
};

export default Logo;
