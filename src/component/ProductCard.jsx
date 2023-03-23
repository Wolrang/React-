import React from 'react'

const ProductCard = ({ menu }, i) => {
  return (
    <div className="img">
      <img src={menu?.img}></img>
      <div>{menu.choice == true ? "베스트셀러" : ""}</div>
      <div>{menu.title}</div>
      <div>{menu.price}원</div>
      <div>{menu.new == true ? "신상품" : ""}</div>
    </div>
  )
}

export default ProductCard