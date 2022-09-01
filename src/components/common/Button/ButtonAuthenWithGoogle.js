import React from "react";
import iconGoogle from "../../../assets/images/Google.svg";

const ButtonAuthenWithGoogle = ({ className = "", content }) => {
    return (
        <button
            className={`flex justify-center items-center gap-3 w-full border border-whiteStrock rounded-xl p-3 text-text2 text-base font-semibold ${className} `}
        >
            <span>
                <img src={iconGoogle} alt="" />
            </span>
            <span>{content}</span>
        </button>
    );
};

export default ButtonAuthenWithGoogle;
