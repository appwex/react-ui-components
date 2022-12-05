import './quickTransfer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const QuickTransfer = () => {
  return (
    <div className="transfer-box">
      <div className="transfer">
        <h2>Quick Transfer</h2>
        <p>Select your contact account to send currencies fast and easly.</p>
        <div className="user-profiles">
          <Swiper
            modules={[Navigation]}
            navigation
            spaceBetween={5}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={swiper => console.log(swiper)}
          >
            {images.map(image => (
              <SwiperSlide key={image.id}>
                <img src={image.url} alt="" className="user-img" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="input-box">
          <label htmlFor="amount">BTC</label>
          <input type="number" name="amount" id="amount" placeholder="Amount" />
        </div>
        <button className="btn transfer-btn">
          Transfer Now <FontAwesomeIcon icon={faArrowRight} />
        </button>
      </div>
    </div>
  );
};

export default QuickTransfer;

const images = [
  {
    id: 1,
    url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    id: 2,
    url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 3,
    url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
  {
    id: 4,
    url: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80',
  },
  {
    id: 5,
    url: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDZ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  {
    id: 6,
    url: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80',
  },
];
