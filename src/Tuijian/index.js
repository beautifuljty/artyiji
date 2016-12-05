import React, { PropTypes } from 'react';
import Zhan from '../img/zhan.png';
import TuijianCard from '../component/TuijianCard';
import axios from 'axios'


class Tuijian extends React.Component {
  constructor(){
    super();
    this.state={
      data:[]
    }
  }
  componentDidMount(){
    axios.get('https://raw.githubusercontent.com/beautifuljty/artyiji/master/data/tuijiancard.json').then( res=> this.setState({data:res.data}) )
  }
  render () {
    return(
      <div className='tuijian-wrap'>
        <div className='tuijian-nav'>
          <img className='zhan' src={Zhan}/>
        </div>
        {this.state.data.map( (item,i) => <TuijianCard {...item} key={i} /> )}

        </div>

    )
  }
}

export default Tuijian;
