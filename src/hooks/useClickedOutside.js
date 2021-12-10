import React, {useEffect } from "react";

/**
 * Hook that alerts clicks outside of the passed ref
 */
export function useClickedOutside(menu, btn, cb) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (menu.current && !menu.current.contains(event.target) && btn.current && !btn.current.contains(event.target)) {
                cb();
            }
        }

        // Bind the event listener
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menu]);
}
