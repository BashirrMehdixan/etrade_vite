// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid, Navigation } from 'swiper/modules';
import TeamSlide from '../../components/TeamSlide';
const OurTeam = () => {
    return (
        <>
            <section>
                <div className="container">
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
                        modules={[Grid, Navigation]}
                        className="home-product-slide"
                    >
                        <SwiperSlide>
                            <TeamSlide />
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default OurTeam