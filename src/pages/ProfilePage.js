import React from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../components/Button";
import { IconEdit, IconEmail, IconEye, IconLock } from "../components/Icon";
import Input from "../components/Input/Input";
import MainLayout from "../layouts/MainLayout";
import classNames from "../utils/classNames";

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
                        firstName: "",
                        lastName: "",
                        dateOfBirth: "2011-09-29",
                        mobileNumber: "",
                    }}
                >
                    {(control) => (
                        <>
                            <FormField
                                title="First Name"
                                type="text"
                                placeholder="First Name"
                                name="firstName"
                                control={control}
                            />
                            <FormField
                                title="Last Name"
                                type="text"
                                placeholder="Last Name"
                                name="lastName"
                                control={control}
                            />
                            <FormField
                                title="Date of Birth"
                                type="date"
                                placeholder="Date of Birth"
                                name="dateOfBirth"
                                control={control}
                            />
                            <FormField
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
                        email: "",
                        password: "",
                        confirmPassword: "",
                    }}
                >
                    {(control) => (
                        <>
                            <FormField
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

const FormGroup = ({ children, title, defaultValues }) => {
    const [isUpdate, setIsUpdate] = useState(false);
    const { handleSubmit, control } = useForm({
        defaultValues: defaultValues,
    });

    const onSubmit = (value) => {
        setIsUpdate(false);
        console.log(value);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)} className="mb-12 md:mb-14">
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
                {children(control)}
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
const FormField = ({ title, className, ...props }) => {
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
            <Input {...props} wrapperClassName="px-[6px]" />
        </div>
    );
};

export default ProfilePage;
