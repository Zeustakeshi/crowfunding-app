import React from "react";
import { Button } from "../components/Button";
import { IconArrow, IconGrowth } from "../components/Icon";
import Image from "../components/Image";
import Logo from "../components/Logo/Logo";
import { Search } from "../components/Search";
import classNames from "../utils/classNames";

const Header = (props) => {
    return (
        <div className={classNames("mb-5 md:mb-8 px-3", "flex-j-between")}>
            <div className={classNames("flex-j-start gap-10 flex-1")}>
                <Logo size={52} sizeMobile={40} />
                <Search
                    placeholder="Do fundrise now"
                    WrapperClassName={classNames("flex-1", "max-w-[458px]")}
                />
            </div>
            <div className="flex-j-end gap-10 flex-1">
                <div className="flex-center gap-2 text-text2 dark:text-text3">
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
                <Button kind="secondary">Start a campaign</Button>
                <div className="w-[52px] h-[52px] rounded-full">
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
