import { appConstants } from "../constants";


export const changeTheme = () => {
    return ({
        type: appConstants.HANDLE_CHANGE_THEME,
    });
};