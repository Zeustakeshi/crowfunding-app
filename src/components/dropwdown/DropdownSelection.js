import React, { useRef } from "react";
import { useDropdown } from "../../context/dropdownProvider";
import useClickOutside from "../../hooks/useClickOutSide";
import Portal from "../portal/Portal";
import { CSSTransition } from "react-transition-group";
import classNames from "../../utils/classNames";

const DropdownSelection = ({ className = "", gap = 10, children }) => {
    const { show, setShow, dropdownRef } = useDropdown();
    const coords = dropdownRef?.current?.getBoundingClientRect() || null;

    const ref = useRef();
    useClickOutside(ref, dropdownRef, () => {
        setShow(false);
    });
    return (
        <CSSTransition
            unmountOnExit
            in={show}
            timeout={200}
            classNames="move-down"
        >
            {(status) => (
                <Portal>
                    <div
                        ref={ref}
                        style={
                            coords && {
                                left: coords.left,
                                top:
                                    coords.top +
                                    coords.height +
                                    window.scrollY +
                                    gap,
                                width: coords.width,
                            }
                        }
                        className={classNames(
                            "absolute z-20",
                            "w-full",
                            "transition-all",
                            status !== "exited"
                                ? "visible opacity-100 "
                                : "invisible opacity-0",
                            className
                        )}
                    >
                        {children}
                    </div>
                </Portal>
            )}
        </CSSTransition>
    );
};

export default DropdownSelection;
