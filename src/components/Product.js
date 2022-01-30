import React, { Component } from 'react';
import { Row, Col, Card, CardImg, Button } from "reactstrap";
import mug from "../images/black-mug.png";
import shirt from "../images/shirt.png";
import Pagination from "react-js-pagination";

export default class Product extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPage: 1
        }
    }

    handleClick(event) {
        this.setState({
            currentPage: event
        });
    }

    // low to high sort
    priceFilterLowToHigh = (vals) => {
        return vals.sort((a, b) => {
            const aPrice = a.price
            const bPrice = b.price
            return aPrice - bPrice;
        });
    }

    // high to low sort
    priceFilterHighToLow = (vals) => {
        return vals.sort((a, b) => {
            const aPrice = a.price
            const bPrice = b.price
            return bPrice - aPrice;
        });
    }

    // old to new sort
    sortOldToNew = (vals) => {
        return vals.sort((a, b) => {
            const aPrice = a.added
            const bPrice = b.added
            return aPrice - bPrice;
        });
    }

    // new to old sort
    sortNewToOld = (vals) => {
        return vals.sort((a, b) => {
            const aPrice = a.added
            const bPrice = b.added
            return bPrice - aPrice;
        });
    }

    render() {

        const { currentPage } = this.state;
        const productsPerPage = 16;
        const dividedProducts = this.props.productlist.length > 0 ? this.props.productlist : [];
        const allProducts = [].concat.apply([], dividedProducts);

        if (this.props.currentSortingMode === "lowToHigh") this.priceFilterLowToHigh(allProducts);
        else if (this.props.currentSortingMode === "highToLow") this.priceFilterHighToLow(allProducts);
        else if (this.props.currentSortingMode === "oldToNew") this.sortOldToNew(allProducts);
        else if (this.props.currentSortingMode === "newToOld") this.sortNewToOld(allProducts);

        // Logic for displaying current todos
        const indexOfLastTodo = currentPage * productsPerPage;
        const indexOfFirstTodo = indexOfLastTodo - productsPerPage;
        const currentProducts = allProducts.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentProducts.map((product, index) => {
            return (
                <Col key={index} sm="3" className='productParentCard'>
                    <Card body className='productCard'>
                        <CardImg
                            alt="Card image cap"
                            src={this.props.selectedToggle === 'mug' || this.props.selectedToggle === '' ? mug : shirt}
                            top
                            width="92px"
                            height="92px"
                        />
                    </Card>
                    <p class="price">₺{product.price} </p>
                    <p class="product-title">{product.name}</p>
                    <Button className="addButton"
                        onClick={() => this.props.addToCart(product)}
                    >
                        Add
                    </Button>
                </Col>
            );
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(allProducts.length / productsPerPage); i++) {
            pageNumbers.push(i);
        }

        return <div>
            <Row >
                {renderTodos}
            </Row>
            <Pagination
                activePage={this.state.currentPage}
                itemsCountPerPage={16}
                totalItemsCount={allProducts.length}
                pageRangeDisplayed={5}
                onChange={this.handleClick.bind(this)}
            />
        </div>;
    }
}
