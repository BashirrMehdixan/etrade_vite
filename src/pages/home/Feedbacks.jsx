import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation} from 'swiper/modules';
import {feedbacks} from "/src/data/datas";
// Icons
import {LuQuote} from "react-icons/lu";
import {IoIosArrowRoundForward, IoIosArrowRoundBack} from "react-icons/io";
// CSS
import "./css/Feedbacks.css";

const Feedbacks = () => {

    return (
        <section className="feedback-section">
            <div className="container relative">
                <div className="head-box" data-aos="fade-down">
                    <p className="best-deal">
                        <span>
                            <LuQuote/>
                        </span>
                        Testimonials
                    </p>
                    <p className="uni-head head1">
                        Users Feedback
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
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 40,
                        }
                    }}
                    spaceBetween={30}
                    loop={true}
                    navigation={{
                        nextEl: ".image-swiper-button-next",
                        prevEl: ".image-swiper-button-prev",
                    }}
                    modules={[Navigation]}
                    className="home-feedback"
                >
                    {feedbacks.map((feedback, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <div className="feedback-block" data-aos="fade-down">
                                    <p className="feed-content">
                                        {feedback.comment}
                                    </p>
                                    <div className="feed-user">
                                        <div className="user-img">
                                            <img src={feedback.image} alt={feedback.image}/>
                                        </div>
                                        <div className="user-info">
                                            <p>{feedback.position}</p>
                                            <p>{feedback.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </section>
    )
}
export default Feedbacks;