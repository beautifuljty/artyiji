import React from 'react';
import Bannera from '../img/banner1.jpg';
import Bannerb from '../img/u65.jpg';
import Bannerc from '../img/u68.jpg';
import Swiper from 'swiper'
class Focus extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.foc', {
      direction: 'horizontal',
      pagination: '.swiper-pagination1',
      autoplay:5000,
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
      <div className="focus-wrap">
        <div className="swiper-container foc" onTouchEnd={this.handleTouch.bind(this)}>
      		<div className="swiper-wrapper">
    	        <div className="swiper-slide slid1">
                <a href="#"><img src={Bannera} alt="" /></a>
              </div>
    	        <div className="swiper-slide slid1" >
                <a href="#"><img src={Bannerb} alt="" /></a>
              </div>
    	        <div className="swiper-slide slid1">
                <a href="#"><img src={Bannerc} alt="" /></a>
              </div>
          	</div>
          <div className="swiper-pagination1"></div>
	      </div>

      </div>
    )
  }
}

export default Focus;
