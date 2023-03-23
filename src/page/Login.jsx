import React from 'react'
import nike from '../component/images/nike.png'

const Login = () => {
  return (
    <div className='login-box'>
      <img src={nike} alt='나이키 로고'></img>
      <h1>가입 또는 로그인을 위해 이메일을 입력하세요</h1>

      <div className="lang-box">
        <span>대한민국</span>
        <select name="country" id="country">
          <option>변경</option>
          <option>변경</option>
        </select>
      </div>

      <input type='text' placeholder='이메일'></input>
      <p>계속 진행하면 나이키의 <a>개인 정보 처리방침</a> 및 <a>이용약관</a>에 동의하게 됩니다</p>
      <div className="btn-box"><button>계속</button></div>
    </div>
  )
}

export default Login