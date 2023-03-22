import React from "react";

import img1 from "../assets/images/new/sa.png";
import img2 from "../assets/images/new/sa2.png";
import img3 from "../assets/images/new/sa3.png";
import img4 from "../assets/images/new/sa4.png";
import img5 from "../assets/images/new/sa5.png";
import img6 from "../assets/images/new/sa6.png";
import ss1 from "../assets/images/new/sa7.png";
import ss2 from "../assets/images/new/sa8.png";
import ss3 from "../assets/images/new/sa9.png";
import ss4 from "../assets/images/new/sa10.png";
import ss5 from "../assets/images/new/sa11.png";
import ss6 from "../assets/images/new/sa12.png";
import ss7 from "../assets/images/new/sa13.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";

// import required modules
import { Pagination } from "swiper";
function Slider() {
  SwiperCore.use([Autoplay]);

  return (
    <div className="lg:mt-8 xl:4">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper p-4"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <div>
            <img src={ss2} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss3} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss4} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss5} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss6} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss7} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={ss1} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img1} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img2} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img3} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img4} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img5} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <img src={img6} alt="nf" className="m-auto" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Slider;
