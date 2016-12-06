import React, { PropTypes } from 'react'
import img1 from '../img/ziti_03.png'
import img2 from '../img/fb4_03.png'
import img3 from '../img/fb1.png'
import img4 from '../img/fb3.png'
import img5 from '../img/fb2.png'
class Fabu extends React.Component {
  render () {
    return(
      <div className='fabu-warp' >
        <div className='fabu-inner'>
          <p>上传照片</p>
          <img className='img1'  src={img1}/>
        </div>
        <p className='fabu-p'>说点什么...</p>
        <div className='fabu-pic'>
          <div className='fabu-dian'>
            <img src={img3} /><br />
            <span>点击添加图片</span>
          </div>
          <img className='img2' src={img2}></img>
        </div>
        <div className='fabu-fu'>
          <img src={img4}/>
          <span>点击获取地址</span>
          <img src={img5} />
          <span>添加标签</span>
        </div>
      </div>
    )
  }
}

export default Fabu;
