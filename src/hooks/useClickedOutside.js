import {useEffect } from "react";

/**
 * Hook that triggers a callback function if clicked outside of menu or btn
 */
export function useClickedOutside(menu, btn, cb) {
    // menu: ref, btn: ref, cb: func
    useEffect(() => {
    
        function handleClickOutside(event) {
            if (menu.current && !menu.current.contains(event.target) && btn.current && !btn.current.contains(event.target)) {
                cb();
            }
        }

        document.addEventListener("click", handleClickOutside);
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, [menu, btn, cb]);
}
