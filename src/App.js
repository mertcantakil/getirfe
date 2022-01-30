import Navi from "./Navi";
import SortingFilter from "./SortingFilter";
import BrandsFilter from "./BrandsFilter";
import TagsFilter from "./TagsFilter";
import ProductList from "./ProductList";
import CartDetails from "./CartDetails";
import { Container, Row, Col } from "reactstrap";
import { React, Component } from "react";
import { Grid } from 'react-loader-spinner'


export default class App extends Component {

  state = {
    currentSortingMode: "",
    products: [],
    dividedProducts: [],
    companies: [],
    brands: [],
    tags: [],
    selectedTags: [],
    cart: [],
    currentSelectedButton: "",
    isloadershow: true,

  }

  componentDidMount() {
    this.getItems();
    this.getCompanies();
  }

  async getItems(id, name) {

    let url = `http://localhost:3000/items`;

    if (id) {
      if (id.length > 1) {
        id.forEach(urlStr => {
          url += "?" + name + "=" + urlStr.name + "&";
        })
      }
      else if (id.length === 1) {
        url += "?" + name + "=" + id[0].name;
      }
    }

    const responseItems = await fetch(url)
    const jsonItems = await responseItems.json();
    this.setState({ products: jsonItems }, () => {
      this.dividedProducts();
      this.getTagsNameAndCounts();
    })
    this.setState({isloadershow: false});
    
  }

  async getCompanies(id) {

    let url = `http://localhost:3000/companies`;

    if (id) {
      if (id.length > 1) {
        id.forEach(urlStr => {
          url += "?name=" + urlStr.name + "&";
        })
      }
      else if (id.length === 1) {
        url += "?name=" + id[0].name;
      }
    }

    const responseCompanies = await fetch(url)
    const jsonCompanies = await responseCompanies.json();
    this.setState({ companies: jsonCompanies })
  }

  dividedProducts() {
    let i, j, temporary, chunk = 4;
    let arr = this.state.products;
    let finalArr = [];
    if (arr.length > 0) {
      for (i = 0, j = arr.length; i < j; i += chunk) {
        temporary = arr.slice(i, i + chunk);
        finalArr.push(temporary);
      }
      this.setState({ dividedProducts: finalArr })
    }
  }

  getTagsNameAndCounts() {
    let finalArr = [];
    const counts = {};
    let arr = this.state.products;
    if (arr.length > 0) {
      arr.map(elem => (
        elem.tags.map(el => (
          finalArr.push(el)
        ))
      ))
      finalArr.forEach(function (x) { counts[x] = (counts[x] || 0) + 1; });
      this.setState({ tags: counts })
    }
  }

  //sepete eleman ekliyor
  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(item => item.name === product.name)
    if (addedItem) {
      newCart.forEach(item => {
        if (item.name === product.name) item.quantity++;
      })
    } else {
      newCart.push({ id: product.added, name: product.name, price: product.price, quantity: 1 });
    }
    this.setState({ cart: newCart });
  }

  incQty = (product) => {
    let newCart = this.state.cart;
    newCart.forEach(item => {
      if (item.name === product.name) {
        ++item.quantity;
      }
    })
    this.setState({ cart: newCart });
  }

  decQty = (product) => {
    let newCart = this.state.cart;
    newCart.forEach((item, index) => {
      if (item.name === product.name) {
        --item.quantity;
        if (item.quantity <= 0) {
          newCart.splice(index, 1);
        }
      }
    })

    this.setState({ cart: newCart });
  }

  changeSortingMode = (sortingMode) => {
    this.setState({ currentSortingMode: sortingMode });
  }

  selectedBrands = (name) => {
    let newBrand = this.state.brands;
    let addedItem = newBrand.find(item => item.name === name)
    if (!addedItem) {
      newBrand.push({ name: name })
    } else {
      newBrand.forEach((item, index) => {
        if (item.name === name) {
          newBrand.splice(index, 1);
        }
      })
    }

    this.setState({ brands: newBrand });
    this.getItems(newBrand, "manufacturer");
  }

  selectTags = (name) => {
    let newTags = this.state.selectedTags;
    let addedItem = newTags.find(item => item.name === name)
    if (!addedItem) {
      newTags.push({ name: name })
    } else {
      newTags.forEach((item, index) => {
        if (item.name === name) {
          newTags.splice(index, 1);
        }
      })
    }

    console.log(newTags)
    this.setState({ selectedTags: newTags });
    this.getItems(newTags, "tags");
  }

  changeSelectedButton = (name) => {
    console.log(name);
    this.setState({ currentSelectedButton: name });
    this.getItems([{ name: name }], "itemType")
  }

  renderLoading() {
    return (
      <Grid color="#00BFFF" height={80} width={80}/>
    )
  }

  render() {

    let { isloadershow } = this.state;

    const renderLoading = () => {
      if (isloadershow) {
        return <div class="loader">
              <Grid color="#00BFFF" height={80} width={80} />
          </div>
      }
      else {
        return <Container className="mt-4">
          <Row>
            <Col xs="3">
              <SortingFilter
                changeSortingMode={this.changeSortingMode}
              >

              </SortingFilter>
              <BrandsFilter
                selectedBrands={this.selectedBrands}
                companies={this.state.companies}
              >
              </BrandsFilter>
              <TagsFilter
                selectedTags={this.selectTags}
                tags={this.state.tags}
              >
              </TagsFilter>
            </Col>
            <Col xs="6">
              <ProductList
                addToCart={this.addToCart}
                products={this.state.dividedProducts}
                currentSortingMode={this.state.currentSortingMode}
                selectedBrands={this.state.brands}
                changeSelectedButton={this.changeSelectedButton}
              >
              </ProductList>
            </Col>
            <Col xs="3" className="cartDetailComp">
              <CartDetails
                products={this.state.dividedProducts}
                cart={this.state.cart}
                incQty={this.incQty}
                decQty={this.decQty}
              >
              </CartDetails>
            </Col>
          </Row>
          <p className="footer mt-4">©2019 Market • Privacy Policy</p>
        </Container>
      }
    }

    return (
      <div className="App">
        <Navi cart={this.state.cart} ></Navi>
        {renderLoading()}
       
      </div>
    )
  }
}
