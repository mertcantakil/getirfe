import React, { Component } from 'react';
import { Row, Col, Button } from 'reactstrap'

export default class CartDetails extends Component {

  getTotalAmount(){
    let total = 0;
    if(this.props.cart.length > 0 ){
      this.props.cart.map(cart=>(
        total += cart.quantity*cart.price
      ))
    }
    return total.toFixed(2);
  }

  renderSummary(){
    return (
      <div className='cartDetailDiv'>
        {
          this.props.cart.map((cartItem) => (
            <Row className='cart-item'>
              <Col xs="7">
                <p className='cart-title'>{cartItem.name}</p>
                <p className='cart-price'> ₺{cartItem.price}</p>
              </Col>
              <Col xs="5">
                <Row style={{ "align-items": "center", "justify-content": "center" }}>
                  <Button className="cart-button" onClick={()=> this.props.decQty(cartItem)}>-</Button>
                  {cartItem.quantity}
                  <Button className="cart-button" onClick={()=> this.props.incQty(cartItem)}>+</Button>
                </Row>
              </Col>
              <hr style={{ "width": "90%", "margin": "0 auto" }} />
            </Row>
          ))
        }

        <div className="total-amount">
            {this.getTotalAmount()}
        </div>

      </div>
    )
  }

  renderEmptyCart(){
    return (
      <div></div>
    )
  }

  render() {
    return <div>
      {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
    </div>;
  }
}
