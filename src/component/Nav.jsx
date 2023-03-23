import React from 'react'
import nike from './images/nike.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'

const Nav = () => {
  const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱']

  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/Login')
  }

  return (
    <div>
      <div className='login'>
        <ul className='nav'>
          {
            loginList.map((item, i) => {
              if( i === loginList.length - 1) {
                return (
                  <li className='login-item' key={i} onClick={goToLogin}>{item}</li>
                )
              } else {
                return (
                  <li className='login-item' key={i}>{item}</li>
                )
              }
            })
          }
        </ul>

        <div className="gnb">
          <img src={nike} alt='nike-logo'></img>
          <ul className='gnb-list'>
            {
              menuList.map((menu, i) => {
                return (
                  <li className='gnb-item' key={i}>{menu}</li>
                )
              })
            }
          </ul>
          <div className='icon-list'>
            <div className='search'>
              <FontAwesomeIcon className='glass' icon={faMagnifyingGlass} />
              <input type='text' placeholder='검색'></input>
            </div>
            <div>
              <FontAwesomeIcon className='heart' icon={faHeart} />
              <FontAwesomeIcon className='shopping' icon={faBagShopping} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Nav