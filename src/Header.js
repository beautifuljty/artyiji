import React, { PropTypes } from 'react'

class Header extends React.Component {
  render () {
    return(
      <div className='header-warp'>
        <div className='header-inner'>
        </div>
        <span className='glyphicon glyphicon-search' aria-hidden='true'></span>
      </div>
    )
  }
}

export default Header;
