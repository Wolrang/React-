import nike from '../component/images/nike.png'
import { useNavigate } from 'react-router-dom'

const Login = ({setUserLogin}) => {

  const navigate = useNavigate()

  const loginUser = (e) => {
    // 콘솔이 잠깐 찍혔다가 사라지는 이유
    // : 페이지를 새로고침 하기 때문
    // 해결방법 : preventDefault로 form이 새로고침 하는 걸 막아준다.
    e.preventDefault();
    console.log("loginUser")

    setUserLogin(true);
    navigate('/')
  }

  return (
    <div className='login-box'>
      {/* omSubmit : type이 submit일 경우 onClick이 아니라 onSubmit을 사용 */}
      {/* form 자체에서 주는 이벤트를 파라미터 값으로 보내줌 */}
      <form onSubmit={(e) => loginUser(e)}>
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
        <div className="btn-box"><button type='submit'>계속</button></div>
      </form>
    </div>
  )
}

export default Login