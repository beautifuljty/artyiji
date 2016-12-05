import React from 'react';

import Header from './Header.js'
import Footer from './Footer.js'

class App extends React.Component {
  render () {
    return(
      <div className='my-warp'>
        <Header />
        <div className='my-main'>
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}

export default App;
