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
                "shadow-[10px_10px_20px_rgba(218,213,213,0.15)]",
                " rounded-3xl",
                WrapperClassName
            )}
        >
            <input
                placeholder={placeholder}
                className={classNames(
                    "pl-6 pr-2 py-4",
                    "text-text-1 font-normal text-sm placeholder:text-text4",
                    " rounded-[inherit]",

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
