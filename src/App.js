/* eslint-disable */
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Login from './page/Login'
import ProductAll from './page/ProductAll'
import ProductDetail from './page/ProductDetail'
import Nav from './component/Nav'
import PrivateRoute from './route/PrivateRoute';

// 1. 전체상품(ProductAll), 로그인(Login), 상세페이지(ProductDetail)
// 2. 로그인 전에 상세페이지 접속 시, 로그인 페이지를 먼저 보여준다.
// 3. 로그인이 이미 되어있다면, 상세페이지 보여준다.
// 4. 로그인 상태면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다. 

function App() {
  // true면 로그인 된 상태, false면 로그인이 안 된 상태
  // 사이트 접속 했을 때 처음 로그인된 상태면 안되니까 기본값이 false

  // 로그인 상태를 변경하려면 state변경 함수인 setUserLogin를 이용
  // Login component에서 이 함수를 이용하려면 어떻게 해야할까? => Props
  // 함수도 Props 전송이 가능하다
  const [userLogin, setUserLogin] = useState(false)

  useEffect(() => {
    console.log("Login", userLogin)
  }, [userLogin])

  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login setUserLogin={setUserLogin}></Login>}></Route>
        <Route path='/product/:id' element={<PrivateRoute userLogin={userLogin}></PrivateRoute>}></Route>
      </Routes>
    </div>
  );
}

export default App;