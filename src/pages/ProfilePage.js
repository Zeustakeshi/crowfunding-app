import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { IconEdit, IconEmail, IconEye, IconLock } from "../components/Icon";
import Input from "../components/Input/Input";
import MainLayout from "../layouts/MainLayout";
import classNames from "../utils/classNames";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { today } from "../contansts";

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const passRegExp =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
const schemaPersonalInformation = Yup.object({
    firstName: Yup.string()
        .min(5, "First name must contain 5 characters")
        .max(30, "First name must be 20 character or less")
        .required("First name is required field"),
    lastName: Yup.string()
        .min(3, "Last name must contain 5 characters")
        .max(20, "Last name must be 20 character or less")
        .required("Last name is required field"),
    dateOfBirth: Yup.date()
        .min(new Date("1970-1-1"), "You are not that old")
        .max(
            today,
            `Date of Birth must be at earlier than ${today.toLocaleDateString()}`
        ),

    mobileNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .min(8, "Minimum length of phone number is 8 digits")
        .max(15, "Maximum length of phone number is 15 digits"),
});

const schemaCredentials = Yup.object({
    email: Yup.string()
        .email("Email must be a valid email")
        .required("Email is required field"),
    password: Yup.string()
        .required("Please Enter your password")
        .matches(
            passRegExp,
            "Password must contain 8 characters, one uppercase, one lowercase, one number and one special case Character"
        ),
    confirmPassword: Yup.string().when("password", (password, field) =>
        password
            ? field
                  .required()
                  .oneOf([Yup.ref("password")], "Password does not match")
            : field
    ),
});

const ProfilePage = () => {
    const handleTogglePassword = (inputState, setInputState) => {
        setInputState({
            ...inputState,
            type: inputState.type === "password" ? "text" : "password",
        });
    };
    return (
        <MainLayout>
            <div
                className={classNames(
                    "px-5 py-6 md:px-32 md:py-12",
                    "bg-white dark:bg-darkSecondary",
                    "rounded-xl"
                )}
            >
                <div className={classNames(" mb-10 md:mb-14")}>
                    <h1
                        className={classNames(
                            "text-text1 dark:text-white font-bold text-lg md:text-2xl",
                            "mb-1"
                        )}
                    >
                        Account Information
                    </h1>
                    <p
                        className={classNames(
                            "text-text3 text-xs md:text-sm font-normal"
                        )}
                    >
                        Update your account information
                    </p>
                </div>
                <FormGroup
                    title="Personal Information"
                    defaultValues={{
                        firstName: "Mahfuzul Islam",
                        lastName: "Nabil",
                        dateOfBirth: "1998-09-27",
                        mobileNumber: "+123 456 7890",
                    }}
                    resolver={yupResolver(schemaPersonalInformation)}
                >
                    {(control, isUpdate) => (
                        <>
                            <FormField
                                isUpdate={isUpdate}
                                title="First Name"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                control={control}
                            />
                            <FormField
                                isUpdate={isUpdate}
                                title="Last Name"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                control={control}
                            />
                            <FormField
                                isUpdate={isUpdate}
                                title="Date of Birth"
                                type="date"
                                placeholder="Date of Birth"
                                name="dateOfBirth"
                                control={control}
                            />
                            <FormField
                                isUpdate={isUpdate}
                                title="Mobile Number"
                                type="tel"
                                placeholder="Mobile Number"
                                name="mobileNumber"
                                control={control}
                            />
                        </>
                    )}
                </FormGroup>
                <FormGroup
                    title="Credentials"
                    defaultValues={{
                        email: "hellouihut@gmail.com",
                        password: "password",
                        confirmPassword: "password",
                    }}
                    resolver={yupResolver(schemaCredentials)}
                >
                    {(control, isUpdate) => (
                        <>
                            <FormField
                                isUpdate={isUpdate}
                                className="col-span-2"
                                title="Email"
                                type="email"
                                placeholder="Email"
                                name="email"
                                control={control}
                                icon={{
                                    position: "left",
                                    elementLeft: <IconEmail />,
                                }}
                            />
                            <FormField
                                isUpdate={isUpdate}
                                title="New Password"
                                type="password"
                                placeholder="New Password"
                                name="password"
                                control={control}
                                icon={{
                                    position: "left",
                                    elementLeft: <IconLock />,
                                    elementRight: <IconEye isOpen={false} />,
                                    toggleElementRight: <IconEye isOpen />,
                                    onClickElementRight: handleTogglePassword,
                                }}
                            />
                            <FormField
                                isUpdate={isUpdate}
                                title="Confirm Password"
                                type="password"
                                placeholder="Confirm Password"
                                name="confirmPassword"
                                control={control}
                                icon={{
                                    position: "left",
                                    elementLeft: <IconLock />,
                                    elementRight: <IconEye isOpen={false} />,
                                    toggleElementRight: <IconEye isOpen />,
                                    onClickElementRight: handleTogglePassword,
                                }}
                            />
                        </>
                    )}
                </FormGroup>
            </div>
        </MainLayout>
    );
};

const FormGroup = ({ children, title, defaultValues, resolver, ...props }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const { handleSubmit, control } = useForm({
        resolver,
        defaultValues: defaultValues,
    });

    const onSubmit = (value) => {
        console.log(value);
        setIsUpdate(false);
    };
    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="mb-12 md:mb-14 transition-all"
            {...props}
        >
            <div className={classNames("flex-j-between")}>
                <h2 className="text-text1 dark:text-white font-bold text-base md:text-xl">
                    {title}
                </h2>
                <div
                    className={classNames(
                        "flex-j-start gap-3",
                        "text-secondary",
                        "cursor-pointer"
                    )}
                    onClick={() => setIsUpdate(true)}
                >
                    <span>
                        <IconEdit />
                    </span>
                    <span className=" font-semibold text-sm md:text-xl">
                        Edit
                    </span>
                </div>
            </div>
            <div
                className={classNames(
                    "md:grid grid-cols-2 gap-x-10 gap-y-6",
                    "mt-6 md:mt-11 "
                )}
            >
                {children(control, isUpdate)}
            </div>
            {isUpdate && (
                <Button
                    type="submit"
                    className={classNames(
                        "mt-6 md:mt-8 p-2 md:p-3",
                        "w-[128px] md:w-[190px] min-h-[40px] md:min-h-[52px]",
                        "!text-sm md:!text-base"
                    )}
                >
                    Update
                </Button>
            )}
        </form>
    );
};

const FormField = ({ title, className, isUpdate, ...props }) => {
    const value = props.control._formValues[props.name];
    return (
        <div className={className}>
            <div
                className={classNames(
                    "py-3",
                    "text-text2 dark:text-text3 font-medium text-sm"
                )}
            >
                {title}
            </div>
            {isUpdate ? (
                <Input {...props} wrapperClassName="px-[6px]" />
            ) : (
                <div
                    className={classNames(
                        "py-3 px-5",
                        "text-text1 dark:text-white font-medium text-base leading-[22px] ",
                        "bg-transparent"
                    )}
                >
                    {props.type === "password"
                        ? new Array(value.length).fill("•").map((item) => item)
                        : value}
                </div>
            )}
        </div>
    );
};

export default ProfilePage;
