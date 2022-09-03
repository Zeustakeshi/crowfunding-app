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

const defaultValues = {
    email: "",
    password: "",
};

const schema = Yup.object({
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

const SignInPage = () => {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        document.title = "Sign-in";
    }, []);

    const { handleSubmit, control } = useForm({
        defaultValues: defaultValues,
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
        <LayoutAuthentication heading="Welcome Back!">
            <h2 className="text-center text-xs  md:text-sm px-2 pb-4 md:pb-5 ">
                <span className="text-text3 font-normal">
                    Dont have an account?
                </span>
                <NavLink
                    to="/sign-up"
                    className="text-primary font-medium underline "
                >
                    {"  "}
                    Sign up
                </NavLink>
            </h2>
            <ButtonAuthenWithGoogle
                content="Sign up with google"
                className="mb-3 md:mb-0"
            />
            <div className="mb-2 md:mb-0 md:p-3 font-normal text-sm text-text2 dark:text-text3 md:dark:text-white">
                Or sign in with email
            </div>
            <form
                className="w-full flex flex-col gap-3"
                onSubmit={handleSubmit(onSubmit)}
            >
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
                        placeholder="Enter Password"
                        icon={{
                            position: "right",
                            element: <IconEye isOpen={false} />,
                            toggleElement: <IconEye isOpen />,
                            onClick: handleTogglePassword,
                            className: "",
                        }}
                    />
                </div>
                <div className="ml-auto ">
                    <NavLink
                        to="/forgot-pass"
                        className="text-primary font-medium text-sm inline-block py-3"
                    >
                        Forgot password
                    </NavLink>
                </div>

                <Button type="submit" isLoading={loading}>
                    Sign in
                </Button>
            </form>
        </LayoutAuthentication>
    );
};

export default SignInPage;
