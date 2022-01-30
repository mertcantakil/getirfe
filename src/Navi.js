import React, { Component } from "react";
import { Nav, NavItem, NavLink, Button } from "reactstrap";
import Logo from './images/Logo.png';
import { BsCartPlusFill } from "react-icons/bs";

export default class Navi extends Component {

  getTotalAmount(){
    let total = 0;
    if(this.props.cart.length > 0 ){
      this.props.cart.map(cart=>(
        total += cart.quantity*cart.price
      ))
    }
    return total.toFixed(2);
  }

  render() {
    return (
      <div>
        <Nav fill>
          <NavItem ></NavItem>
          <NavItem >
            <img width="70px" height="auto" className="img-responsive logo" src={Logo} alt="logo" />
          </NavItem>
          <NavItem>
            <NavLink className="cartButtonLink" href="#">
              <Button className="cartButton" size="md"><BsCartPlusFill size={21} style={{ margin: "8px" }} /> ₺ {this.getTotalAmount()}</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
