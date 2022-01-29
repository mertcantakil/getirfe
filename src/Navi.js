import React, { Component } from "react";
import {Nav, NavItem, NavLink, Button} from "reactstrap";
import Logo from './images/Logo.png';
import { BsCartPlusFill } from "react-icons/bs";

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Nav fill>
          <NavItem ></NavItem>
          <NavItem >
            <img width="70px" height="auto" className="img-responsive logo" src={Logo}  alt="logo" />
          </NavItem>
          <NavItem>
            <NavLink className="cartButtonLink" href="#">
              <Button className="cartButton"  size="md"><BsCartPlusFill size={21} style={{margin:"8px"}}/> ₺ 14,99</Button>
            </NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
