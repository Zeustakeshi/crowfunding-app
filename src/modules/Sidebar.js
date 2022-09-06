import React from "react";
import { NavLink } from "react-router-dom";
import {
    IconCampaign,
    IconDashboard,
    IconLight,
    IconLogOut,
    IconPayment,
    IconProfile,
    IconWithdraw,
} from "../components/Icon";
import classNames from "../utils/classNames";

const sidebarLinks = [
    {
        title: "Dashboard",
        icon: <IconDashboard />,
        url: "/",
    },
    {
        title: "Campaign",
        icon: <IconCampaign />,
        url: "/campaign",
    },
    {
        title: "Payment",
        icon: <IconPayment />,
        url: "/payment",
    },
    {
        title: "Withdraw",
        icon: <IconWithdraw />,
        url: "/withdraw",
    },
    {
        title: "Profile",
        icon: <IconProfile />,
        url: "/profile",
    },
    {
        title: "Logout",
        icon: <IconLogOut />,
    },
    {
        title: "Light/Dark",
        icon: <IconLight />,
    },
];

const Sidebar = (props) => {
    return (
        <div
            className={classNames(
                "mt-3 md:px-4 py-10",
                "bg-white dark:bg-darkSecondary",
                "shadow-style1 dark:shadow-none",
                "rounded-3xl",
                "hidden md:flexc-center gap-7",
                "min-h-[733px]"
            )}
        >
            {sidebarLinks?.map((link) => {
                return (
                    <div
                        className={classNames(
                            " w-full min-w-[327px] md:min-w-[auto] md:w-auto  ",
                            "last:mt-auto ",
                            "last:shadow-style2 dark:last:shadow-style3Dark",
                            "last:rounded-xl",
                            "last:dark:bg-darkSecondary"
                        )}
                        key={link.title}
                    >
                        {link.url ? (
                            <NavLink
                                to={link.url}
                                className={({ isActive }) =>
                                    classNames(
                                        "sidebar-item block",
                                        isActive ? "sidebar-item--active" : ""
                                    )
                                }
                            >
                                <SidebarItem item={link} />
                            </NavLink>
                        ) : (
                            <div className={classNames("sidebar-item")}>
                                <SidebarItem item={link} />
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};

const SidebarItem = ({ item }) => {
    return (
        <>
            <span>{item.icon}</span>
            <span className={classNames("md:hidden", "text-text3")}>
                {item.title}
            </span>
        </>
    );
};

Sidebar.propTypes = {};

export default Sidebar;
