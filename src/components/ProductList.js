import React, { Component } from 'react';
import { Card, CardBody, Row, Button } from "reactstrap";
import Product from './Product';

export default class ProductList extends Component {

  state = {
    selectedToggle: '',
  }

  clickHandler = (event) => {
    this.props.changeSelectedButton(event.target.innerText);
    this.setState({ selectedToggle: event.target.innerText })
  }

  render() {
    return <div>
      <h4 className='productList-title'>Products</h4>

      <Row>
        <Button className="mugToggleButton" onClick={this.clickHandler}>mug</Button>
        <Button className="tshirtToggleButton" onClick={this.clickHandler}>shirt</Button>
      </Row>

      <Card className='productListCard'>
        <CardBody>
          <Product
            productlist={this.props.products}
            addToCart={this.props.addToCart}
            currentSortingMode={this.props.currentSortingMode}
            selectedToggle={this.state.selectedToggle}
          >
          </Product>
        </CardBody>
      </Card>
    </div>;
  }
}
