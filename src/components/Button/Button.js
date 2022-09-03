import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { LoadingSpin } from "../Loading";
import classNames from "../../utils/classNames";

/**
 * @requires
 * @param {string} type Type of button 'button' | 'submit'
 * @returns
 */

const checkButtonType = (kind) => {
    switch (kind) {
        case "primary":
            return "p-3 md:p-4 text-white bg-primary text-base font-semibold ";
        case "secondary":
            return "border border-whiteStrock dark:border-darkStroke  rounded-xl p-3 text-text2 dark:text-white text-base font-semibold";
        default:
            return "";
    }
};

const Button = ({
    className = "",
    children,
    isLoading,
    disabled,
    type,
    kind = "primary",
    loadingSize = 25,
    ...props
}) => {
    const ButtonTypeClassName = checkButtonType(kind);

    const nodeClassName = classNames(
        "flex-center",
        "rounded-xl",
        " w-full ",
        "transition-all outline-none",
        isLoading || disabled
            ? "bg-opacity-80 select-none cursor-default pointer-events-none"
            : "",
        ButtonTypeClassName,
        className
    );

    return (
        <ButtonWrapper type={type} className={nodeClassName} {...props}>
            {isLoading ? (
                <LoadingSpin size={loadingSize} borderSize={4} color="white" />
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
