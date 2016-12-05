import React, { PropTypes } from 'react'
import {Link} from 'react-router'

class Footer extends React.Component {
  render () {
    return(
      <div>
        <Link to='/'>展讯</Link>
        <Link to='tuijian'>推荐</Link>
        <Link to='fabu'>发布</Link>
        <Link to='about'>个人</Link>
      </div>
    )
  }
}

export default Footer;
