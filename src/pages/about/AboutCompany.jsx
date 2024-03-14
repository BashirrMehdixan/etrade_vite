import { FaShoppingBasket } from "react-icons/fa"

import "./css/AboutCompany.css"

const AboutCompany = () => {
    return (
        <>
            <section>
                <div className="container">
                    <div className="about-box">
                        <div className="left-side">
                            <img src={'assets/images/about/about-01.png'} alt="" />
                        </div>
                        <div className="right-side">
                            <div className="head-box products-head">
                                <p className="best-deal">
                                    <span>
                                        <FaShoppingBasket />
                                    </span>
                                    Our products
                                </p>
                                <p className="uni-head head1">
                                    Explore our Products
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AboutCompany;