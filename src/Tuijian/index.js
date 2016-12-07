
import React, { PropTypes } from 'react';
import Zhan from '../img/zhan.png';
// import TuijianCard from '../component/TuijianCard';
import axios from 'axios';
import Header from '../component/Header.js'

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
      </div>

    )
  }
}

export default Tuijian;
