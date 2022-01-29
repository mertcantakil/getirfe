import React, { Component } from 'react';
import { Card, CardBody,Label,Input } from "reactstrap";
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default class TagsFilter extends Component {
  render() {
    return <div className="cardSpacing">
      <p class="filter-title">Tags</p>
      <Card>
        <CardBody>
          <FormGroup>
            <Label for="exampleSearch">
                </Label>
                <Input
                  id="exampleSearch"
                  name="search"
                  placeholder="Search tag"
                  type="search"
                />
            <FormControlLabel control={<Checkbox defaultChecked />} label="a" />
            <FormControlLabel control={<Checkbox />} label="b" />
            <FormControlLabel control={<Checkbox />} label="c" />
            <FormControlLabel control={<Checkbox />} label="d" />
            <FormControlLabel control={<Checkbox />} label="e" />
            <FormControlLabel control={<Checkbox />} label="f" />
          </FormGroup>
        </CardBody>
      </Card>
    </div>;
  }
}
