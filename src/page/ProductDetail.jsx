import React, { useEffect, useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
  let { id } = useParams()
  console.log({ id })
  const [product, setProduct] = useState(null)

  const getProductDetail = async () => {
    // API 호출
    // products/ 뒤에 값은 내가 클릭한 값이 들어와야 한다.
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    console.log(data)
    setProduct(data)
  }

  useEffect(() => {
    getProductDetail()
  }, [])

  return (
    <Container>
      <Row style={{ marginTop: "50px" }}>
        <Col>
          <img width={500} src={product ? product.img : null} alt="" />
        </Col>
        <Col>
          <h2>{product ? product.title : null}</h2>
          <div>{product ? product.price : null}원</div>
          <div>사이즈 : {product ? product.size : null}</div>
        </Col>
      </Row>
    </Container>
  )
}

export default ProductDetail