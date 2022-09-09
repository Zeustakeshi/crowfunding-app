import { createContext, useContext, useState } from "react";

const DropdownContext = createContext();

const DropdownProvider = ({ dropdownRef, ...props }) => {
    const [show, setShow] = useState(false);
    const [currentItem, setCurrentItem] = useState();
    const [selected, setSelected] = useState([]);

    const values = {
        dropdownRef,
        show,
        currentItem,
        selected,
        setShow,
        setCurrentItem,
        setSelected,
    };
    return (
        <DropdownContext.Provider
            value={values}
            {...props}
        ></DropdownContext.Provider>
    );
};

const useDropdown = () => {
    const context = useContext(DropdownContext);
    if (typeof context === "undefined")
        throw new Error("useDropdown must be used within DropdownProvider");
    return context;
};

export { useDropdown, DropdownProvider };
