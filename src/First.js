import React, { PropTypes } from 'react'

import Lunbo from './Lunbo.js'
import Routers from './Routers.js';
import Sign from './component/Sign.js';
import Zhuce from './component/Zhuce.js'

class First extends React.Component {
  constructor(){
    super()
    this.state={
      show:0
    }
  }
  handleClick(){
    this.setState({
      show:1
    })
  }
  handleClick2(){
    this.setState({
      show:2
    })
  }
  handleClick3(){
    this.setState({
      show:3
    })
  }
  render () {
    return(
      <div>
        {this.state.show==0 ? <Lunbo click={this.handleClick.bind(this)}/> :
          this.state.show==1 ? <Sign click2={this.handleClick3.bind(this)} click1={this.handleClick2.bind(this)}/> :
          this.state.show==3 ? <Zhuce /> : <Routers />
      }
      </div>
    )
  }
}

export default First;
