import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store/store";
import {Provider} from 'react-redux';
import ProductProvider from "./context/ProductContext";
import {AuthContextProvider} from './context/AuthContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <ProductProvider>
            <AuthContextProvider>
                <App/>
            </AuthContextProvider>
        </ProductProvider>
    </Provider>
)
