import { combineReducers } from "redux";

const initialState = {
    isLoading: false,
    isLoggedIn: false,
    isError: false,
    userId: '',
    adminId: '',
    profileImage: '',
    role: '',
    error: ''
}

const auth = (state = initialState, action) => {
    switch (action.type) {
        case "SERVICE_RUNNING":
            return {
                ...state,
                isLoading: true,
                isError: false,
                isLoggedIn: false,
                userId: '',
                adminId: '',
                profileImage: '',
                role: '',
                error: ''
            }

        case "LOGIN_SUCCESS":
            console.log('success')
            return {
                ...state,
                error: '',
                isLoading: false,
                isLoggedIn: true,
                isError: false,
                userId: action.payload.userId,
                adminId: action.payload.adminId,
                profileImage: action.payload.profileImage,
                role: action.payload.role,
            }

        case "LOGIN_FAILED":
            console.log('action.payload')
            return {
                ...state,
                isLoading: false,
                isError: true,
                isLoggedIn: false,
                error: action.payload.error,
                role: ''
            }

        case "LOG_OUT":
            console.log("herel")
            return {
                ...state,
                isLoading: false,
                isLoggedIn: false,
                isError: false,
                userId: '',
                adminId: '',
                profileImage: '',
                role: '',
                error: ''
            }

        default:
            return state;
    }

}

export default combineReducers({
    auth,
});