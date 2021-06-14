export const setLanguage = (value) => ({
    type: "SET_LANGUAGE",
    payload: value,
});

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const loadLanguages = () => {
    return async (dispatch) => {
      await delay(300);
      return dispatch(setLanguage(['en', 'ru']))
    }
}
