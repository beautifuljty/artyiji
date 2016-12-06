import React, { PropTypes } from 'react'

import Swiper from 'swiper'


class Lunbo extends React.Component {
  constructor(){
    super()
    this.state={
      nowTime:''
    }
  }
  componentDidMount(){
    var mySwiper = new Swiper ('.swiper-container', {
      pagination: '.swiper-pagination',
    })
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth()+1;
    var day = date.getDate();
    var time = year + '/' + month + '/' + day;
    this.setState({nowTime:time})
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
            <div className="swiper-slide slide5" ref='nopagination'>
              <p className="swiper-time">{this.state.nowTime}</p>
              <p className='swiper-p' onClick={this.props.click}>今日推送<span className='animate'>>></span></p>
            </div>
        </div>
        <div className="swiper-pagination" ref='dott'></div>
    </div>
    )
  }
}

export default Lunbo;
