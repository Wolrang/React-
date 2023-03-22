import React from 'react'
import Card from '../db/db.json'

const ProductCard = () => {
  return (
    <div className='img-box'>
      {
        Card.products.map((item, i) => {
          return (
            <div className="img" key={i}>
              <img src={item.img}></img>
              <div>베스트셀러</div>
              <div>{item.title}</div>
              <div>{item.price}원</div>
              <div>신제품</div>
            </div>
          )
        })
      }

    </div>
  )
}

export default ProductCard