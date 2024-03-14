import {useEffect, useContext, useState} from 'react';
import {createBrowserRouter, Route, createRoutesFromElements, RouterProvider, Navigate} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import {AuthContext} from './context/AuthContext';
import {ProductContext} from "./context/ProductContext.jsx";

import {getDoc, doc} from "firebase/firestore";
import {db} from './store/firebase.jsx';
import AOS from 'aos';

// CSS
import './App.css';
import 'aos/dist/aos.css';

// Layouts
import RootLayout from "./layouts/RootLayout"
import ProfileLayout from './layouts/ProfileLayout';
import ProductsLayout from "./layouts/ProductsLayout";

// Pages
import Home from './pages/home/Home';
import Products from './pages/products/Products';
import ProductDetail from "./pages/products/ProductDetail";
import Wishlist from "./pages/profile/Wishlist";
import Cart from './pages/profile/Cart';
import Register from './pages/profile/Register';
import Login from './pages/profile/Login';
import Dashboard from "./pages/profile/Dashboard";
import Orders from './pages/profile/Orders';
import Downloads from './pages/profile/Downloads';
import Addresses from "./pages/profile/Addresses";
import AccountDetail from "./pages/profile/AccountDetail";
import About from "./pages/about/About";
import NotFound from "./pages/NotFound";


function App() {
    AOS.init({
        disable: false,
        startEvent: 'DOMContentLoaded',
        initClassName: 'aos-init',
        animatedClassName: 'aos-animate',
        useClassNames: false,
        disableMutationObserver: false,
        debounceDelay: 50,
        throttleDelay: 99,
        offset: 120,
        delay: 0,
        duration: 1000,
        easing: 'ease',
        once: false,
        mirror: false,
        anchorPlacement: 'top-bottom',

    });
    document.addEventListener('scroll', () => {
        AOS.refreshHard();
    });
    const {currentUser} = useContext(AuthContext);
    const {products} = useContext(ProductContext);
    const [data, setData] = useState([])

    useEffect(() => {
        if (currentUser) {
            const fetchData = async () => {
                try {
                    const docSnapshot = await getDoc(doc(db, 'users', currentUser.uid));
                    setData(docSnapshot.data())
                } catch (e) {
                    console.log(e);
                }
            }
            fetchData();
        }
    }, [currentUser]);
    const RequireAuth = ({children}) => {
        return currentUser ? children : <Navigate to="/login"/>
    }

    // const routers = createBrowserRouter([
    //     {
    //         element: <RootLayout/>,
    //         children: [
    //             {
    //                 path: "*",
    //                 element: <NotFound/>,
    //             },
    //             {
    //                 path: "/",
    //                 element: <Home/>
    //             },
    //             {
    //                 path: "wishlist",
    //                 element: <Wishlist/>
    //             },
    //             {
    //                 path: "cart",
    //                 element: <Cart/>
    //             },
    //             {
    //                 path: "products",
    //                 element: <Products/>,
    //                 children: [
    //                     {
    //                         path: ":id",
    //                         element: <ProductDetail/>,
    //                         errorElement: <NotFound/>
    //                     }
    //
    //                 ]
    //             },
    //             {
    //                 element: <ProfileLayout accountData={data}/>,
    //                 children: [
    //                     {
    //                         path: "profile",
    //                         element: <Dashboard accountData={data}/>
    //                     }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         path: "/login",
    //         element: <Login/>
    //     },
    //     {
    //         path: "/signup",
    //         element: <Register/>
    //     }
    // ])

    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<RootLayout/>}>
                    {products && <Route index element={<Home/>}/>}
                    <Route path="/profile" element={
                        <RequireAuth>
                            <ProfileLayout accountData={data}/>
                        </RequireAuth>
                    }>
                        <Route index element={<Dashboard/>}/>
                        <Route path="orders" element={<Orders/>}/>
                        <Route path="downloads" element={<Downloads/>}/>
                        <Route path="addresses" element={<Addresses/>}/>
                        <Route path="account-details" element={<AccountDetail accountData={data}/>}/>
                    </Route>
                    <Route path="/products" element={<ProductsLayout/>}>
                        <Route index element={<Products/>}/>
                        <Route path=":id" element={<ProductDetail/>}/>
                    </Route>
                    <Route path={"/about-us"} element={<About/>}/>
                    <Route path="/wishlist" element={<Wishlist/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                    <Route path="*" element={<NotFound/>}/>
                </Route>
                <Route path="login" element={<Login/>}/>
                <Route path="signup" element={<Register/>}/>
            </>
        )
    )
    return (
        <>
            <RouterProvider router={router}/>
            <Toaster
                position="top-right"
                reverseOrder={false}
            />
        </>
    );
}

export default App;
