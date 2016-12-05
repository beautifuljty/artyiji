import React, { PropTypes } from 'react';
import {Link} from 'react-router'

class TuijianCard extends React.Component {
  render () {
    return (
      <div className='tuijian-card'>
        <div className='tuijian-content '>
          <img src={this.props.bgi}/>
          <h3>{this.props.title}</h3>
          <h4>{this.props.desc}</h4>
          <p>{this.props.time}</p>
          <p>{this.props.address}</p>
        </div>
      </div>
    )
  }
}
TuijianCard.defaultProps={
  title:'',
  desc:'',
  time:'',
  address:''
}
TuijianCard.propTypes={
  title:React.PropTypes.string,
  desc:React.PropTypes.string,
  time:React.PropTypes.string,
  address:React.PropTypes.string
}

export default TuijianCard;
