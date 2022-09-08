import React from "react";
import PropTypes from "prop-types";
import classNames from "../../utils/classNames";
import { Button } from "../Button";
import { IconSearch } from "../Icon";

const Search = ({
    className = "",
    WrapperClassName = "",
    ButtonSearchClassName = "",
    placeholder = "",
    handleSearch = () => {},
}) => {
    return (
        <div
            className={classNames(
                "flex-j-start",
                "px-2",
                "shadow-style1 dark:shadow-none",
                " rounded-3xl",
                "bg-white  dark:bg-darkSecondary",
                WrapperClassName
            )}
        >
            <input
                placeholder={placeholder}
                className={classNames(
                    "pl-3 md:pl-6 pr-2 py-3 md:py-4",
                    "text-text-1 dark:text-white font-normal text-xs md:text-sm placeholder:text-text4 dark:placeholder:text-text2",
                    " rounded-[inherit]",
                    "bg-transparent",
                    "w-full",
                    className
                )}
            />
            <Button
                onClick={handleSearch}
                className={classNames(
                    "rounded-[inherit]",
                    "min-h-[28px] h-7 md:h-10 ",
                    "px-4 py-2 md:px-7 md:py-3",
                    ButtonSearchClassName
                )}
                kind="primary2"
            >
                <IconSearch />
            </Button>
        </div>
    );
};

Search.propTypes = {
    className: PropTypes.string,
    WrapperClassName: PropTypes.string,
    placeholder: PropTypes.string,
    handleSearch: PropTypes.func,
};

export default Search;
