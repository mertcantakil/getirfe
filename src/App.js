import Navi from "./Navi";
import SortingFilter from "./SortingFilter";
import BrandsFilter from "./BrandsFilter";
import TagsFilter from "./TagsFilter";
import ProductList from "./ProductList";
import CartDetails from "./CartDetails";
import { Container, Row, Col } from "reactstrap";

function App() {
  return (
    <div className="App">
      <Navi></Navi>
      <Container className="mt-4">
        <Row>
          <Col xs="3">
            <SortingFilter></SortingFilter>
            <BrandsFilter></BrandsFilter>
            <TagsFilter></TagsFilter>
          </Col>
          <Col xs="6">
            <ProductList></ProductList>
          </Col>
          <Col xs="3" className="cartDetailComp">
            <CartDetails></CartDetails>
          </Col>
        </Row>
      </Container>

    </div>
  );
}

export default App;
