import React, { PropTypes } from 'react'
import Focus from '../component/Focus';
import Header from '../component/Header.js'
class Zhanxun extends React.Component {
  render () {
    return(
      <div className='zhanxin-warp'>
        <Header />
        <Focus />
      </div>
    )
  }
}

export default Zhanxun;
