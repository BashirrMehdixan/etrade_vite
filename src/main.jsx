import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import store from "/src/store/store";
import { AuthContextProvider } from './context/Auth/AuthContext';
import ProductProvider from "./context/Products/ProductContext";
import UsersProvider from "./context/Users/UsersContext";
import PostsProvider from './context/Posts/PostsContext';

ReactDOM.createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <UsersProvider>
            <ProductProvider>
                <PostsProvider>
                    <AuthContextProvider>
                        <App />
                    </AuthContextProvider>
                </PostsProvider>
            </ProductProvider>
        </UsersProvider>
    </Provider>
)