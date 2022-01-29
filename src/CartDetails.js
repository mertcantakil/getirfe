import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap'

export default class CartDetails extends Component {
  render() {
    return <div>
      <div className='cartDetailDiv'>
        <Row className='cart-item'>
          <Col xs="7">
            <p className='cart-title'>Example Product</p>
            <p className='cart-price'> ₺14,99</p>
          </Col>
          <Col xs="5">
            <Row style={{"align-items":"center","justify-content":"center"}}>
              <Button className="cart-button">-</Button>
               3
              <Button className="cart-button">+</Button>
            </Row>
          </Col>
          <hr style={{"width":"90%", "margin":"0 auto"}}/>
        </Row>

        <Row className='cart-item'>
          <Col xs="7">
            <p className='cart-title'>Example Product</p>
            <p className='cart-price'> ₺14,99</p>
          </Col>
          <Col xs="5">
            <Row style={{"align-items":"center","justify-content":"center"}}>
              <Button className="cart-button">-</Button>
               3
              <Button className="cart-button">+</Button>
            </Row>
          </Col>
          <hr style={{"width":"90%", "margin":"0 auto"}}/>
        </Row>

        <div className="total-amount">
            ₺39,97
        </div>


      </div>
    </div>;
  }
}
