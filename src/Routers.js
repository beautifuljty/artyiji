import React, { PropTypes } from 'react'
import { Router, Route, hashHistory ,IndexRoute} from 'react-router';

import App from './App.js';
import Zhanxun from './Zhanxun/index.js'
import Tuijian from './Tuijian'
import Fabu from './Fabu'
import About from './About'

class Routers extends React.Component {
  render () {
    return(
      <Router history={hashHistory}>
        <Route path='/' component={App}>
          <IndexRoute component={Zhanxun} />
          <Route path="tuijian" component={Tuijian} />
          <Route path="fabu" component={Fabu} />
          <Route path="about" component={About} />
        </Route>
      </Router>
    )
  }
}

export default Routers;
