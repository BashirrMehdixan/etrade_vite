import {Outlet} from "react-router-dom";
import Navbar from "./Navbar";
import Subscription from "./Subscription";
import Offers from "./Offers";
import Footer from "./Footer";
import Preferences from "./Preferences";

const RootLayout = () => {
    return (
        <>
            <Navbar/>
            <Offers/>
            <Outlet/>
            <Subscription/>
            <Preferences/>
            <Footer/>
        </>
    )
}
export default RootLayout;