import React from "react";
import { Dropdown, DropdownField } from "../components/dropwdown";
import { TextEditor } from "../components/textEditor";
import MainLayout from "../layouts/MainLayout";
import classNames from "../utils/classNames";

const filters = ["Trending", "Best Match", "Newest"];

const WithdrawPage = () => {
    return (
        <MainLayout>
            <Dropdown
                className={classNames(
                    "max-w-[112px] md:max-w-[160px]",
                    "text-text3 font-semibold text-sm md:text-lg ",
                    "rounded-lg border border-current"
                )}
            >
                <DropdownField.Label
                    label="Filter"
                    className="px-3 md:px-4 py-2 md:py-2"
                />
                <DropdownField.Selection
                    className={classNames(
                        "rounded-xl",
                        "shadow-style5",
                        "bg-white dark:bg-darkSecondary"
                    )}
                    gap={0}
                >
                    {filters?.map((item) => (
                        <DropdownField.Item
                            key={item}
                            value={item}
                            className={classNames(
                                "dark:border-t-darkStroke border-t first:border-t-transparent",
                                "px-3 md:px-4 pt-4 md:pt-5  pb-3 ",
                                "text-text3 font-medium md:text-base text-xs"
                            )}
                            multiSelection
                            id={item}
                        >
                            {item}
                        </DropdownField.Item>
                    ))}
                </DropdownField.Selection>
            </Dropdown>
            <div>
                <TextEditor></TextEditor>
            </div>
        </MainLayout>
    );
};

export default WithdrawPage;
