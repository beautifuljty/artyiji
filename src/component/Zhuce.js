import React, { PropTypes } from 'react'

class Zhuce extends React.Component {
  constructor(){
    super()
    this.state={
      content:'',
      show:false
    }
  }
  handleChange(e){
    let value = e.target.value;
    this.setState({content:value,show:false})
  }
  handleBlur(){
    this.setState({show:true})
  }
  handleBack(){
    this.context.router.goBack()
  }
  render () {
    var re1 = /^[0-9]{6,11}@(qq|163).com$/;
    return(
      <div className='sign'>
        <div>
          <form>
            <input className='my-inp' placeholder='点击输入手机号/Email' value={this.state.content} onChange={this.handleChange.bind(this)} onBlur={this.handleBlur.bind(this)}/>
            {this.state.show? <span style={{color:'red',fontSize:'12px'}}>{re1.test(this.state.content)?'':"错误"}</span> : null}
            <input className='my-inp' placeholder='输入密码' type="password" />
            <input className='my-inp' placeholder='输入昵称'></input>
          </form><br />
        </div>
        <div className="main-btn">
          <button className='my-btn my-btn1' onClick={this.handleBack.bind(this)}>返回</button>
          <button className='my-btn my-btn2'>完成</button>
        </div>
      </div>
    )
  }
}

export default Zhuce;
