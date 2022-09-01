import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LoadingSpin } from "../../Loading";

/**
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 * @returns
 */
const Button = ({
    className = "",
    children,
    isLoading,
    disabled,
    type,
    kind = "primary",
    loadingSize = 8,
    ...props
}) => {
    let btnStyle;
    switch (kind) {
        case "primary":
            btnStyle =
                "p-3 md:p-4 text-white bg-primary text-base font-semibold ";
            break;
        case "secondary":
            btnStyle = "bg-white text-secondary";
            break;
        default:
            break;
    }

    const nodeClassName = `flex justify-center items-center  rounded-xl ${btnStyle}  w-full shadow-lg  hover:shadow-md transition-all outline-none ${
        isLoading || disabled
            ? "bg-opacity-80 select-none cursor-default pointer-events-none"
            : ""
    } ${className}`;

    if (props.to) {
        return (
            <NavLink {...props} type={type} className={nodeClassName}>
                {isLoading ? (
                    <LoadingSpin
                        size={loadingSize}
                        borderSize={4}
                        color="white"
                    />
                ) : (
                    children
                )}
            </NavLink>
        );
    }
    return (
        <button {...props} type={type} className={nodeClassName}>
            {isLoading ? (
                <LoadingSpin size={30} borderSize={4} color="white" />
            ) : (
                children
            )}
        </button>
    );
};

Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit"]),
    isLoading: PropTypes.bool,
    onClick: PropTypes.func,
    children: PropTypes.node,
    className: PropTypes.string,
    kind: PropTypes.string,
};

export default Button;
