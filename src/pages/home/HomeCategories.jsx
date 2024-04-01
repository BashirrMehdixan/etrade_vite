import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation} from 'swiper/modules';
import 'swiper/css/navigation';
import {categories} from "/src/data/datas.jsx";
// Icons
import {IoPricetagsOutline} from "react-icons/io5";
import {IoIosArrowRoundForward, IoIosArrowRoundBack} from "react-icons/io";

// CSS
import 'swiper/css';
import "./css/HomeCategories.css"

const HomeCategories = () => {
    return (
        <section className="categories">
            <div className="container relative">
                <div className="head-box" data-aos="fade-down">
                    <p className="best-deal">
                        <span>
                            <IoPricetagsOutline/>
                        </span>
                        categories
                    </p>
                    <p className="uni-head head1">
                        Browse by Category
                    </p>
                </div>
                <div className="image-swiper-button-next">
                    <IoIosArrowRoundForward/>
                </div>
                <div className="image-swiper-button-prev">
                    <IoIosArrowRoundBack/>
                </div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={30}
                    loop={true}
                    breakpoints={{
                        400: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        640: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        },
                        800: {
                            slidesPerView: 4,
                            spaceBetween: 50,
                        },
                        1000: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                    }}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    className="categories-slide"
                >
                    {categories.map((category, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="category-block" data-aos="fade-down">
                                    <Link to="/products">
                                        <img src={category.image} alt={category.name}/>
                                        {category.name}
                                    </Link>
                                </div>
                            </SwiperSlide>
                        )
                    })}

                </Swiper>
            </div>
        </section>
    )
}
export default HomeCategories;