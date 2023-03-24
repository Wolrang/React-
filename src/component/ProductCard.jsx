import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({ menu }, i) => {
  
  const navigate = useNavigate()

  const showDetail = () => {
    navigate(`/product/${menu.id}`)
  }

  return (
    <div className="img" onClick={showDetail}>
      <img src={menu?.img}></img>
      <div>{menu.choice == true ? "베스트셀러" : ""}</div>
      <div>{menu.title}</div>
      <div>{menu.price}원</div>
      <div>{menu.new == true ? "신상품" : ""}</div>
    </div>
  )
}

export default ProductCard