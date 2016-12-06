<<<<<<< HEAD
import React, { PropTypes } from 'react'
import Header from '../component/Header.js'
=======
import React, { PropTypes } from 'react';
import Zhan from '../img/zhan.png';
// import TuijianCard from '../component/TuijianCard';
import axios from 'axios';
import Header from '../Header.js'

>>>>>>> 9d6978fee92bf78e14def59b9eed03f652e0cb13
class Tuijian extends React.Component {
  // constructor(){
  //   super();
  //   this.state={
  //     data:[]
  //   }
  // }
  // componentDidMount(){
  //   axios.get('https://raw.githubusercontent.com/beautifuljty/artyiji/master/data/tuijiancard.json').then( res=> this.setState({data:res.data}) )
  // }
  render () {
    return(
<<<<<<< HEAD
      <div className='tuijian-warp'>
        <Header style={{marginLeft:'10px'}} /><br />
        <h3>tuijan</h3>
=======
      <div className='tuijian-wrap'>
        <Header />
        <div className='tuijian-nav'>
          <img className='zhan' src={Zhan}/>
        </div>
        {/* {this.state.data.map( (item,i) => <TuijianCard {...item} key={i} /> )} */}
        <div className='tuijian-card'>
          <div className='share'>
            <i className="fa fa-share-square-o" aria-hidden="true"></i>
            <i className="fa fa-heart" aria-hidden="true"></i>
            <i className="fa fa-eye" aria-hidden="true"></i>
          </div>
          <a href='#' className='mnls'>  </a>
          <a href='#' className='zfz'>  </a>
          <a href='#' className='fg'>  </a>
        </div>
>>>>>>> 9d6978fee92bf78e14def59b9eed03f652e0cb13
      </div>

    )
  }
}

export default Tuijian;
