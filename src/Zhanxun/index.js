import React, { PropTypes } from 'react';
import Focus from '../component/Focus';
import LeiFocus from '../component/LeiFocus';
import Header from '../component/Header.js'

class Zhanxun extends React.Component {
  render () {
    return(
      <div className='zhanxin-warp'>
        <Header />
        <Focus />
        <LeiFocus />
      </div>
    )
  }
}

export default Zhanxun;
