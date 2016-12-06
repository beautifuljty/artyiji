import React, { PropTypes } from 'react'
import Header from '../component/Header.js'
class Tuijian extends React.Component {
  render () {
    return(
      <div className='tuijian-warp'>
        <Header style={{marginLeft:'10px'}} /><br />
        <h3>tuijan</h3>
      </div>
    )
  }
}

export default Tuijian;
