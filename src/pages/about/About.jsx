import Breadcrumb from "../../layouts/Breadcrumb.jsx";
import {Helmet} from "react-helmet";
import AboutCompany from "./AboutCompany.jsx";

const About = () => {
    return (
        <>
            <Helmet>
                <title>eTrade | About us</title>
            </Helmet>
            <Breadcrumb/>
            <AboutCompany />
        </>
    )
}

export default About;