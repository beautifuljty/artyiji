import React, { PropTypes } from 'react'

import Swiper from 'swiper'


class Lunbo extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination',
    })
  }
  handleTouch(e){
    let dom = this.refs.nopagination;
    if (dom.className.indexOf('swiper-slide-active')!= -1) {
      this.refs.dott.style.display='none';
    }else {
      this.refs.dott.style.display='block';
    }
  }
  render () {
    return(
      <div className="swiper-container">
        <div className="swiper-wrapper" onTouchEnd={this.handleTouch.bind(this)}>
            <div className="swiper-slide slide1"></div>
            <div className="swiper-slide slide2"></div>
            <div className="swiper-slide slide3"></div>
            <div className="swiper-slide slide4"></div>
            <div className="swiper-slide slide5" ref='nopagination'></div>
        </div>
        <div className="swiper-pagination" ref='dott'></div>
    </div>
    )
  }
}

export default Lunbo;
