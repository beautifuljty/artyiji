import React, { PropTypes } from 'react'

import Lunbo from './Lunbo.js'
import Routers from './Routers.js';

class First extends React.Component {
  constructor(){
    super()
    this.state={
      show:false
    }
  }
  render () {
    return(
      <div>
        {this.state.show ? <Lunbo /> : <Routers />}
      </div>
    )
  }
}

export default First;
