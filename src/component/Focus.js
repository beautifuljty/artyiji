import React from 'react'
import Bannera from '../img/banner1.jpg'
class Focus extends React.Component {
  render () {
    return(
      <div>
        <div class="swiper-container">
            <div class="swiper-wrapper">

              <div class="swiper-slide">
                <img src={Bannera} />
              </div>

              <div class="swiper-slide">
                <img src={Bannera} />
              </div>

              <div class="swiper-slide">
                <img src={Bannera} />
              </div>

            </div>
        </div>
      </div>
    )
  }
}

export default Focus;
