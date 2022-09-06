import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LoadingSpin } from "../Loading";
import classNames from "../../utils/classNames";
import checkButtonType from "./checkButtonType";

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
    loadingSize = 24,
    ...props
}) => {
    const ButtonTypeClassName = checkButtonType(kind);

    const nodeClassName = classNames(
        "flex-center",
        "font-semibold text-base",
        "transition-all outline-none",
        "hover:bg-opacity-80",
        isLoading || disabled
            ? "bg-opacity-40 select-none cursor-default pointer-events-none"
            : "",
        ButtonTypeClassName,
        className
    );

    return (
        <ButtonWrapper type={type} className={nodeClassName} {...props}>
            {isLoading ? (
                <LoadingSpin size={loadingSize} borderSize={3} color="white" />
            ) : (
                children
            )}
        </ButtonWrapper>
    );
};

const ButtonWrapper = ({ to, children, ...props }) => {
    return to ? (
        <NavLink to={to} {...props}>
            {children}
        </NavLink>
    ) : (
        <button {...props}>{children}</button>
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
