import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { NavLink } from "react-router-dom";
import { Input, InputCheckbox } from "../components/Input";
import { Label } from "../components/Label";
import { IconEye } from "../components/Icon";
import LayoutAuthentication from "../layouts/LayoutAuthentication";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { Button, ButtonAuthenWithGoogle } from "../components/Button";
import classNames from "../utils/classNames";

const schema = Yup.object({
    fullName: Yup.string()
        .min(5, "Full name must contain 5 characters")
        .max(30, "Full name must be 30 character or less")
        .required("Full name is required field"),
    email: Yup.string()
        .email("Email must be a valid email")
        .required("Email is required field"),
    password: Yup.string()
        .required("Please Enter your password")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
            "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character"
        ),
});

const SignUpPage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        document.title = "Sign-up";
    }, []);

    const { handleSubmit, control } = useForm({
        defaultValues: {
            fullName: "",
            email: "",
            password: "",
            terms: true,
        },
        resolver: yupResolver(schema),
    });
    console.log("re-render-form ");

    const handleTogglePassword = (inputState, setInputState) => {
        setInputState({
            ...inputState,
            type: inputState.type === "password" ? "text" : "password",
        });
    };

    const onSubmit = async (value) => {
        setLoading(true);
        setTimeout(() => {
            console.log(value);
            setLoading(false);
        }, 1000);
    };

    return (
        <LayoutAuthentication heading="Sign Up">
            <h2
                className={classNames(
                    "text-center text-xs md:text-sm",
                    "px-2 pb-4 md:pb-5"
                )}
            >
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
            <div
                className={classNames(
                    "mb-2 md:mb-0 md:p-3",
                    "font-normal text-sm text-text2 dark:text-text3 md:dark:text-white"
                )}
            >
                Or sign up with email
            </div>
            <form
                className={classNames("flexc gap-3", "w-full")}
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="w-full">
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                        id="fullName"
                        name="fullName"
                        type="text"
                        defaultValue=""
                        control={control}
                        placeholder="Jhon Doe"
                    />
                </div>
                <div className="w-full">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                        id="email"
                        name="email"
                        type="email"
                        defaultValue=""
                        control={control}
                        placeholder="Example@gmail.com"
                    />
                </div>
                <div className="w-full">
                    <Label htmlFor="password">Password *</Label>
                    <Input
                        id="password"
                        type="password"
                        name="password"
                        defaultValue=""
                        control={control}
                        placeholder="Create a password"
                        icon={{
                            position: "right",
                            element: <IconEye isOpen={false} />,
                            toggleElement: <IconEye isOpen />,
                            onClick: handleTogglePassword,
                            className: "",
                        }}
                    />
                </div>
                <div
                    className={classNames(
                        "w-full",
                        "flex-j-start gap-5",
                        "py-3"
                    )}
                >
                    <InputCheckbox
                        label="hello"
                        name="terms"
                        control={control}
                        size={20}
                        className="border-1 rounded"
                        colorActive="#1DC071"
                        id="terms"
                    />
                    <label
                        htmlFor="terms"
                        className={classNames(
                            "text-xs md:text-sm text-text2 font-normal",
                            "cursor-pointer",
                            "pr-4 md:pr-5"
                        )}
                    >
                        I agree to the{" "}
                        <span className="text-secondary underline">
                            Terms of Use
                        </span>{" "}
                        and have read and understand the{" "}
                        <span className="text-secondary underline">
                            Privacy policy.
                        </span>
                    </label>
                </div>
                <Button type="submit" isLoading={loading}>
                    Create my account
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignUpPage;
