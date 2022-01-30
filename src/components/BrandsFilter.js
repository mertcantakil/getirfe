import React, { Component } from 'react';
import { Card, CardBody, Label, Input } from "reactstrap";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default class BrandsFilter extends Component {

  state = {
    searchStr: "",
  }
  clickHandler = (event) => (
    this.props.selectedBrands(event.target.labels[0].innerText)
  )
  handleSearch = (event) => (
    this.setState({ searchStr: event.target.value })
  )

  render() {

    return <div className="cardSpacing">
      <p className="filter-title">Brands</p>
      <Card >
        <CardBody className='filter-body'>
          <FormGroup>
            <Label for="exampleSearch">
            </Label>
            <Input
              id="exampleSearch"
              name="search"
              placeholder="Search brand"
              type="search"
              onBlur={this.handleSearch}
            />
            {
              this.props.companies.map((company, index) => {
                if (this.state.searchStr === "") {
                  return <FormControlLabel control={<Checkbox />} label={company.slug} key={index} onClick={this.clickHandler} />
                } else {
                  if (company.slug.includes(this.state.searchStr)) {
                    return <FormControlLabel control={<Checkbox />} label={company.slug} key={index} onClick={this.clickHandler} />
                  }
                }
              })
            }
          </FormGroup>
        </CardBody>
      </Card>
    </div>;
  }
}
