import React from "react";
import { NavLink } from "react-router-dom";
import ButtonAuthenWithGoogle from "../components/ButtonAuthenWithGoogle";
import LayoutAuthentication from "../layouts/LayoutAuthentication";

const SignUpPage = () => {
    return (
        <LayoutAuthentication heading="Sign Up">
            <h2 className="text-center text-xs  md:text-sm px-2 pb-4 md:pb-5 ">
                <span className="text-text3 font-normal">
                    Already have an account?
                </span>
                <NavLink
                    to="/sign-in"
                    className="text-primary font-medium underline "
                >
                    {"  "}
                    Sign in
                </NavLink>
            </h2>
            <ButtonAuthenWithGoogle
                content="Sign up with google"
                className="mb-3 md:mb-0"
            />
            <div className="mb-2 md:mb-0 md:p-3 font-normal text-sm text-text2">
                Or sign up with email
            </div>
        </LayoutAuthentication>
    );
};

export default SignUpPage;
