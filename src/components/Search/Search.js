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
                "bg-transparent  dark:bg-darkSecondary",
                WrapperClassName
            )}
        >
            <input
                placeholder={placeholder}
                className={classNames(
                    "pl-6 pr-2 py-4",
                    "text-text-1 dark:text-white font-normal text-sm placeholder:text-text4 dark:placeholder:text-text2",
                    " rounded-[inherit]",
                    "w-full",
                    className
                )}
            />
            <Button
                onClick={handleSearch}
                className={classNames(
                    "rounded-[inherit]",
                    "h-10",
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
