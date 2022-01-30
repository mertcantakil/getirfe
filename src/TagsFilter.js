import React, { Component } from 'react';
import { Card, CardBody, Label, Input } from "reactstrap";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default class TagsFilter extends Component {


  state = {
    searchStr : "",
  }
  clickHandler = (event) => (
    this.props.selectedTags(event.target.labels[0].innerText.split('(')[0])
  )
  handleSearch = (event) => (
    this.setState({searchStr : event.target.value})
  )

  render() {

    let count = 0;
    let convertedArray = [];

    Object.entries(this.props.tags).forEach(([key, value]) => {
      convertedArray.push({ "name": key, "value": value })
    })

    return <div className="cardSpacing">
      <p className="filter-title">Tags</p>
      <Card>
        <CardBody className='filter-body'>
          <FormGroup>
            <Label for="exampleSearch">
            </Label>
            <Input
              id="exampleSearch"
              name="search"
              placeholder="Search tag"
              type="search"
              onBlur={this.handleSearch}
            />
            {
              convertedArray.map((element) => {
                if(this.state.searchStr === ""){
                  return <FormControlLabel control={<Checkbox />} label={element.name + '(' + element.value + ')'} key={++count} onClick={this.clickHandler}/>
                }else{
                  if(element.name.includes(this.state.searchStr)){
                    return <FormControlLabel control={<Checkbox />} label={element.name + '(' + element.value + ')'} key={++count} onClick={this.clickHandler}/>
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
