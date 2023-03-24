import React, { useState, useEffect } from 'react'
import nike from './images/nike.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faBagShopping } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'
import ProductCard from './ProductCard'

const Nav = () => {
  const loginList = ['매장찾기', '고객센터', '가입하기', '로그인']
  const menuList = ['New Releases', 'Men', 'Women', 'Kids', 'Sale', 'SNKRS', '나이키 앱']

  const navigate = useNavigate()
  const goToLogin = () => {
    navigate('/Login')
  }

  // onkeyPress 유저가 키를 눌렀을 때 발생한다.
  // alt, ctrl, shift, ESC 키에는 onkeyPress가 적용안됨
  // Enter (조건문)
  
  const [searching, setSearching] = useState("")
  const onChange = (e) => {
    setSearching(e.target.value.toLowerCase());
  }
  
  const search = (e) => {
    if (e.key === "Enter") {
      console.log(searching)
    }
  }

  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    let url = " http://localhost:5000/products"
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)

    setProducts(data)
  }

  useEffect(() => {
    getProducts()
  }, [])


  const searched = products.filter((item) =>
    item.title.toLowerCase().includes(searching)
    );
    console.log(searched)

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
              <input type='text' placeholder='검색' onKeyPress={search} value={searching} onChange={onChange}></input>
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