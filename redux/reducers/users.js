const initialState = {
    users: null,
};

const reduserUsers = (state = initialState, action) => {
    switch (action.type) {
        case "SET_USERS":
            return {
                ...state,
                users: action.payload,
            };
        default:
            return state;
    }
};

export default reduserUsers;
