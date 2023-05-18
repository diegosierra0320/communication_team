import './App.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectCoverflow, Navigation, Pagination } from "swiper"
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"
import "swiper/css/navigation"
import sonia from './utils/img/Sonia Bohorquez.jpeg'
import miguel from './utils/img/Miguel Rey.jpeg'
import laura from './utils/img/Laura Romero.jpeg'
import victor from './utils/img/Victor Lopez.jpeg'
import yenny from './utils/img/Yenny Suarez.jpeg'
import yonatan from './utils/img/Yonatan Bejarano.jpeg'
import david from './utils/img/David Herrera.jpeg'
import deissy from './utils/img/Deissy Perdomo.jpeg'
import yohanna from './utils/img/Yohanna Bolivar.jpeg'
import logoCwt from './utils/img/CWT+logo white.png'

function App() {

  return (
    <>
    <div id='particles-js'></div>
      <header className='header'>
        <img src={logoCwt} alt="" />
        <h1>Comité de comunicación</h1>

        <select name="comunicados">
          <option selected disabled value="">Comunicados</option>
          <option value="">CUIT</option>
          <option value="">Duplicados</option>
          <option value="">Aerolineas Guaranteed Ticketing</option>
          <option value="https://mycwt.jiveon.com/groups/gsc-colombia/blog/2021/10/22/cxp-diferencias-reenviar-responder">Responder vs reenviar CXP</option>
        </select>
      </header>
      
      <div className='content'>
        <div className='swiper-container'>
        <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={4}
              modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
              className='swiper_container'
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              pagination={{
                el: ".swiper-pagination",
                clickable: true
              }}
              navigation={{
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
                clickable: true
              }}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 100,
                modifier: 2.5,
              }}
        >
          <SwiperSlide>
          <div className='content-container'>
            <img src={sonia} alt="" />
            <div className='description'>
              <p>Sonia Bohorquez</p>
              <p>Consultora de viajes</p>
              <p>Equipo ERM</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={miguel} alt=""/>
            <div className='description'>
              <p>Miguel Angel Rey</p>
              <p>Consultor de viajes</p>
              <p>Equipo Colombia</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={laura} alt=""/>
            <div className='description'>
              <p>Laura Romero</p>
              <p>Consultora de viajes</p>
              <p>Equipo Colombia</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={victor} alt=""/>
            <div className='description'>
              <p>Victor Lopez</p>
              <p>Consultor de viajes</p>
              <p>Equipo GCG</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={yenny} alt=""/>
            <div className='description'>
              <p>Yenny Suarez</p>
              <p>Consultora de viajes</p>
              <p>Equipo ERM</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={yonatan} alt=""/>
            <div className='description'>
              <p>Yonatan Bejarano</p>
              <p>Consultor de viajes</p>
              <p>Digital Team</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={david} alt=""/>
            <div className='description'>
              <p>David Herrera</p>
              <p>Consultor de viajes</p>
              <p>Equipo MCG</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={deissy} alt=""/>
            <div className='description'>
              <p>Deissy Perdomo</p>
              <p>Consultora de viajes</p>
              <p>Equipo GCG</p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
          <div className='content-container'>
            <img src={yohanna} alt=""/>
            <div className='description'>
              <p>Yohanna Bolivar</p>
              <p>Consultora de viajes</p>
              <p>Equipo ERM</p>
            </div>
          </div>
          </SwiperSlide>

          </Swiper>
        </div>
      </div>

      <footer className='footer'>
        <p>¿Tienes algo por comunicar? contactanos a <a href="mailto:comitedecomunicaciones@mycwt.com">comitedecomunicaciones@mycwt.com</a></p>
      </footer>
    </>
  )
}

export default App
