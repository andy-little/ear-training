export const navDefaultState = {
    isSidebarOpen: false,
};

export const navReducer = (state, action) => {
    switch (action.type) {
        case "TOGGLE_SIDEBAR":
            return { ...state, isSidebarOpen: !state.isSidebarOpen };
        case "OPEN_SIDEBAR":
            return { ...state, isSidebarOpen: true };
        case "CLOSE_SIDEBAR":
            return { ...state, isSidebarOpen: false };

        default:
            throw new Error(`action type ${action.type} does not exist`);
    }
};
