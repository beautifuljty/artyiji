import React from 'react'
import pica from '../img/diaosu.jpg';
import picb from '../img/huihua.jpg';
import picc from '../img/shejji.jpg';
import picd from '../img/sheying.jpg';
import pice from '../img/shuimo.jpg';
import Swiper from 'swiper'
class LeiFocus extends React.Component {
  componentDidMount(){
    var mySwiper = new Swiper ('.fouce', {
      pagination: '.swiper-pagination',
      slidesPerView: 3,
      paginationClickable: true,
      spaceBetween: 30

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
      <div className="leifaous-wrap">
        <div className="swiper-container fouce" onTouchEnd={this.handleTouch.bind(this)}>
      		<div className="swiper-wrapper">
      	        <div className="swiper-slide slid2" data-history="slide1">
                  <a href="#"><img src={pica} alt="" /></a>
                </div>
      	        <div className="swiper-slide slid2" data-history="slide2">
                  <a href="#"><img src={picb} alt="" /></a>
                </div>
      	        <div className="swiper-slide slid2" data-history="slide3">
                  <a href="#"><img src={picc} alt="" /></a>
                </div>
                <div className="swiper-slide slid2" data-history="slide4">
                  <a href="#"><img src={picd} alt="" /></a>
                </div>
                <div className="swiper-slide slid2" data-history="slide5">
                  <a href="#"><img src={pice} alt="" /></a>
                </div>
          	</div>

	      </div>

      </div>
    )
  }
}

export default LeiFocus;
