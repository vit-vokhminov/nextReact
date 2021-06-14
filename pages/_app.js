import React from 'react';

import '../styles/global.css'
//import '../styles/navbar.css'

import { Provider } from "react-redux";
import store from "../redux/store";

import { appWithTranslation } from 'next-i18next';

// This default export is required in a new `pages/_app.js` file.
function MyApp({ Component, pageProps }) {
    return (
        <Provider store={store}>
            <Component {...pageProps}/>
        </Provider>
    );
}

export default appWithTranslation(MyApp);
