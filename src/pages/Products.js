import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Container,
  Row,
  Col
} from "reactstrap";
import { CartContext } from "../contexts/Cart";

export default function Products() {
  const productsArr = [];

  const [products, setProducts] = useState(productsArr);

  useEffect(() => {
    axios.get("https://5vktd.sse.codesandbox.io/products").then(res => {
      setProducts(() => res.data);
    });
  });

  return (
    <Container>
      <h2>Products</h2>
      <Row>
        {products.map(product => (
          <Col xs="12" sm="6" md="4" lg="3">
            <Card>
              <CardImg
                top
                width="100%"
                src={product.imageUrl}
                alt="Card image cap"
              />
              <CardBody>
                <CardTitle>Card title</CardTitle>
                <CardSubtitle>{product.name}</CardSubtitle>
                <CardText>{product.description}</CardText>
                <CartContext.Consumer>
                  {/* take addToCart in CartProvider to using */}
                  {/* ({ addToCart }) => {addToCart} 
                  embed variable function addToCart*/}
                  {({ addToCart }) => (
                    <Button onClick={() => addToCart(product)}>
                      Add to cart
                    </Button>
                  )}
                </CartContext.Consumer>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
