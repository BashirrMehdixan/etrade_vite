import {useContext} from "react";
// Swiper
import {Swiper, SwiperSlide} from 'swiper/react';
import {Grid, Navigation} from 'swiper/modules';
// Context
import {UsersContext} from "../../context/UsersContext.jsx";
// Components
import TeamSlide from '../../components/TeamSlide';

// CSS
import "./css/OurTeam.css";
import {RiTeamFill} from "react-icons/ri";

const OurTeam = () => {
    const {users} = useContext(UsersContext);
    return (
        <>
            <section className="our-team-section bg-gray">
                <div className="container">
                    <div className="head-box purple-head">
                        <h6 className="best-deal">
                                    <span>
                                        <RiTeamFill />
                                    </span>
                            Our Team
                        </h6>
                        <h5 className="uni-head head1">
                            Expart Management Team
                        </h5>
                    </div>
                    <Swiper
                        slidesPerView={1}
                        breakpoints={{
                            767: {
                                slidesPerView: 2,
                                spaceBetween: 30,
                            },
                            992: {
                                slidesPerView: 3,
                                spaceBetween: 40,
                            },
                            1024: {
                                slidesPerView: 4,
                                spaceBetween: 40,
                            }
                        }}
                        spaceBetween={20}
                        navigation={{
                            nextEl: ".image-swiper-button-next",
                            prevEl: ".image-swiper-button-prev",
                        }}
                        loop={true}
                        modules={[Navigation]}
                        className="our-team-slide"
                    >
                        {users.length && users.map((user, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <TeamSlide {...user} />
                                </SwiperSlide>

                            )
                        })}
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default OurTeam