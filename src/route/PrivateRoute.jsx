import React from 'react'
import ProductDetail from '../page/ProductDetail'
import Login from '../page/Login'
import { Navigate } from 'react-router-dom'

// useNavigate (React Hook중에 하나)
// React Hook 규칙
// 조건문, 반복문에서는 useNavigate를 사용할 수 없다.
// Navigate

// 조건부 렌더링
// userLogin이 true라면 <ProductDetail></ProductDetail>을 보여주고,
// userLogin이 false라면 Login 페이지로 이동
const PrivateRoute = ({userLogin}) => {
  return (
    userLogin === true ? <ProductDetail></ProductDetail> : <Navigate to='/login'></Navigate>
  )
}

export default PrivateRoute