export const setUsers = (value) => async dispatch => {
    dispatch({
        type: "SET_USERS",
        payload: value,
    })
}
