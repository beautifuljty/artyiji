import React, { PropTypes } from 'react'

class Sign extends React.Component {
  constructor(){
    super()
    this.state={
      show:true
    }
  }
  handleClick(){
    this.setState({
      show:false
    })
  }
  render () {
    return(
      <div className='sign'>
        <div>
          <form>
            <input className='my-inp' placeholder='点击输入手机号/Email登录' ref='inp'/>
            <input className='my-inp' placeholder='输入密码' type="password" />
          </form><br />
        </div>
        <div className="main-btn">
          <button className='my-btn my-btn1' onClick={this.props.click1}>登录</button>
          <button className='my-btn my-btn2' onClick={this.props.click2}>注册</button>
          <p className='p-inp'><input type='checkbox'></input>登录或注册即同意艺集<span className='p-span'>用户服务协议</span></p>
        </div>
          <div className='footer-btn footer-btn1'><div><img src={require('../img/weibo.png')}/></div>微博</div>
          <div className='footer-btn footer-btn2'><div><img src={require('../img/weixin.png')}/></div>微信</div>
          <div className='footer-btn footer-btn3'><div><img src={require('../img/QQ.png')}/></div>QQ</div>
      </div>
    )
  }
}

export default Sign;
