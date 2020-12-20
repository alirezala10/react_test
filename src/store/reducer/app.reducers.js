import { appConstants } from '../constants';
const initState = {
    darkTheme: false,
};

const appReducer = (state = initState, action) => {
    switch (action.type) {
        case appConstants.HANDLE_CHANGE_THEME:
            return {
                ...state,
                darkTheme :!state.darkTheme
            };
        default:
            return state
    }
}

export default appReducer;