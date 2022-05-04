import { Swiper, SwiperSlide } from "swiper/react";
import Customitemdata from './Customitemdata'
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "./Popular.css";
import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Navigation,Autoplay} from "swiper/core";

SwiperCore.use([EffectCoverflow, Pagination, Navigation,Autoplay]);

const Popular=() =>  {
  return (
    <div className="container">
      <div className="title_wrapper">
        
        <div className="title_">
          <span>React</span>Swiper Slider
          

        </div>
      </div>
      <Swiper
        navigation={true}
        // autoplay={{
        //   "delay": 1000,
        //   "disableOnInteraction": false}}
        effect={"coverflow"}
         grabCursor={true} 
         centeredSlides={true} 
         spaceBetween={30}
        slidesPerView={window.innerWidth < 768 ? 1 :4}
        loop={false}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 0,
          slideShadows: true
        }}
        pagination={{
          clickable: true
        }}
        className="mySwiper"
      >
{Customitemdata.map(user=>(
  <SwiperSlide key={user.id}  >
  <img src={user.image} />
  <div className="setitempri">
  <h2>name : {user.name}</h2><br/>
  <h2>Price : {user.price}</h2>
  </div>
  </SwiperSlide>
))}
        
      </Swiper>
    </div>
  );
}

export default Popular;