import React from "react";
import iconGoogle from "../../assets/images/Google.svg";
import Button from "./Button";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";

const ButtonAuthenWithGoogle = ({ className = "", content, ...props }) => {
    return (
        <Button
            className={classNames("gap-3 ", "w-full", className)}
            kind="outline"
            onClick={() => {
                alert("authen success");
            }}
            {...props}
        >
            <span>
                <img src={iconGoogle} alt="" />
            </span>
            <span>{content}</span>
        </Button>
    );
};

ButtonAuthenWithGoogle.propTypes = {
    className: PropTypes.string,
    content: PropTypes.any.isRequired,
};

export default ButtonAuthenWithGoogle;
