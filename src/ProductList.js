import React, { Component } from 'react';
import { Card, CardBody } from "reactstrap";
import Product from './Product';

export default class ProductList extends Component {
  render() {
    return <div>
      <h4 className='productList-title'>Products</h4>
      <Card className='productListCard'>
        <CardBody>
          <Product 
            productlist={this.props.products}
            addToCart={this.props.addToCart}
            currentSortingMode={this.props.currentSortingMode}
            >
           </Product>
        </CardBody>
      </Card>
    </div>;
  }
}
