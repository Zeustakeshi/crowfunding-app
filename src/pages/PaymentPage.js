import React from "react";
import Image from "../components/Image";
import MainLayout from "../layouts/MainLayout";
import classNames from "../utils/classNames";
import logoPaypal from "../assets/images/logo-paypal.svg";
import logoPayoneer from "../assets/images/logo-payoneer.svg";
import { Button } from "../components/Button";

const PaymentPage = () => {
    return (
        <MainLayout>
            <div
                className={classNames(
                    "flexc-center",
                    "mx-auto",
                    "w-full md:max-w-[624px] max-w-full"
                )}
            >
                <div className={classNames("my-16 mx-9")}>
                    <h1
                        className={classNames(
                            "text-text1 dark:text-white font-bold text-lg md:text-2xl text-center",
                            "mb-3"
                        )}
                    >
                        Connect Your Payment Processor
                    </h1>
                    <p
                        className={classNames(
                            "text-text3 font-normal text-xs md:text-base   text-center"
                        )}
                    >
                        To Start Processing credit card payments and donations,
                        you will need to select either Paypal or Payoneer
                    </p>
                </div>
                <div className="flex flex-col md:flex-row items-center justify-center w-full gap-5 md:gap-10">
                    <PaymentMethod logo={logoPaypal}>
                        Get paid directly via Paypal.
                    </PaymentMethod>
                    <PaymentMethod logo={logoPayoneer}>
                        Get paid worldwide your Work.
                    </PaymentMethod>
                </div>
            </div>
        </MainLayout>
    );
};

const PaymentMethod = ({ logo, children }) => {
    return (
        <div
            className={classNames(
                "flexc-center",
                "md:mb-10 p-6 pt-9",
                "bg-white dark:bg-darkSecondary",
                "shadow-style4 dark:shadow-style4Dark",
                "rounded-3xl",
                "w-[245px] md:min-w-[292px]",
                "group cursor-pointer"
            )}
        >
            <div
                className={classNames(
                    "mb-6 md:mb-10",
                    "w-[65px] h-[65px] md:w-[80px] md:h-[80px]"
                )}
            >
                <Image src={logo} alt="logo payment" />
            </div>
            <p
                className={classNames(
                    "text-text4 dark:text-text4 font-normal text-sm text-center",
                    "mb-5 md:mb-6 "
                )}
            >
                {children}
            </p>
            <Button
                kind="secondary3"
                className={classNames(
                    "w-full",
                    "group-hover:bg-secondary",
                    "group-hover:text-white"
                )}
            >
                Connect
            </Button>
        </div>
    );
};

export default PaymentPage;
