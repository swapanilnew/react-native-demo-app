export const loginUser = (payload) => {
    return async (dispatch) => {
        dispatch({ type: "LOGIN_SUCCESS", payload: payload });
    }
}

export const logOut = () => {
    console.log("8")
    return async (dispatch) => {
        try {
            // dispatch({ type: "RESET_ORDER_LIST" });
            dispatch({ type: "LOG_OUT" });
        } catch (error) {
            if (error) {
                console.log(error)
            }
        }
    }
}