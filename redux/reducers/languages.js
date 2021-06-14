const initialState = {
    language: null, // доступные языки {}
};

const reduserLanguages = (state = initialState, action) => {
    switch (action.type) {
        case "SET_LANGUAGE":
            return {
                ...state,
                language: action.payload,
            };
        default:
            return state;
    }
};

export default reduserLanguages;
