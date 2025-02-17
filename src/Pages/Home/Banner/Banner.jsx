import bannerImg1 from '../../../assets/banner1.png'
import bannerImg2 from '../../../assets/banner2.jpg'
import bannerImg3 from '../../../assets/banner3.jpg'
import bannerImg4 from '../../../assets/banner4.jpg'
import bannerImg5 from '../../../assets/banner5.jpg'
import bannerImg6 from '../../../assets/banner6.jpg'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
const Banner = () => {
  return (
    <div className='-mt-2'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg1})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg2})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg3})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg4})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg5})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="flex justify-center items-center"
            style={{
              backgroundImage: `url(${bannerImg6})`,
              height: "400px",
              backgroundPosition: "center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
            }}
          >
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
