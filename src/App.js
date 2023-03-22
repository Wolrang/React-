/* eslint-disable */
import './App.css';
import {Routes, Route, Link} from 'react-router-dom';
import Login from './page/Login'
import ProductAll from './page/ProductAll'
import ProductDetail from './page/ProductDetail'
import Nav from './component/Nav'
import ProductCard from './component/ProductCard'

// 1. 전체상품(ProductAll), 로그인(Login), 상세페이지(ProductDetail)
// 2. 로그인 전에 상세페이지 접속 시, 로그인 페이지를 먼저 보여준다.
// 3. 로그인이 이미 되어있다면, 상세페이지 보여준다.
// 4. 로그인 상태면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다. 

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Routes>
        <Route path='' element={<ProductAll></ProductAll>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/product/:id' element={<ProductDetail></ProductDetail>}></Route>
      </Routes>
    </div>
  );
}

export default App;