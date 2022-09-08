import React from "react";
import { Button } from "../components/Button";
import { IconArrow, IconGrowth } from "../components/Icon";
import Image from "../components/Image";
import Logo from "../components/Logo/Logo";
import { Search } from "../components/Search";
import classNames from "../utils/classNames";

const Header = (props) => {
    return (
        <div
            className={classNames(
                "mb-5 md:mb-8 px-3",
                "flex-j-between",
                "w-full"
            )}
        >
            <div
                className={classNames(
                    "flex-j-start gap-5 md:gap-10 flex-1 shrink-0",
                    "mr-5 md:mr-0"
                )}
            >
                <Logo size={52} sizeMobile={20} />
                <Search
                    placeholder="Do fundrise now"
                    WrapperClassName={classNames("flex-1", "max-w-[458px]")}
                />
            </div>
            <div className="flex-j-end gap-10 md:flex-1">
                <div className="hidden md:flex-center gap-2 text-text2 dark:text-text3">
                    <span>
                        <IconGrowth />
                    </span>
                    <span className=" font-semibold flex-1">
                        Fundrising for
                    </span>
                    <span>
                        <IconArrow />
                    </span>
                </div>
                <Button kind="secondary" className="md:!flex  !hidden">
                    Start a campaign
                </Button>
                <div className="w-[40px] h-[40px] md:w-[52px] md:h-[52px] rounded-full">
                    <Image
                        src="https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dHJlZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                        alt="avatar"
                        errorIconSize={28}
                    ></Image>
                </div>
            </div>
        </div>
    );
};

Header.propTypes = {};

export default Header;
