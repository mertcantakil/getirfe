import React, { Component } from 'react';
import { Card, CardBody } from "reactstrap";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

export default class SortingFilter extends Component {

  render() {

    const handleChange = (event) => {
      this.props.changeSortingMode(event.target.value);
    };

    return <div>
      <p className="filter-title">Sorting</p>
      <Card >
        <CardBody>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
            // value={value}
             onChange={handleChange}
            >
              <FormControlLabel value="lowToHigh" control={<Radio />} label="Price low to high" />
              <FormControlLabel value="highToLow" control={<Radio />} label="Price high to low" />
              <FormControlLabel value="newToOld" control={<Radio />} label="New to old" />
              <FormControlLabel value="oldToNew" control={<Radio />} label="Old to new" />
            </RadioGroup>
          </FormControl>
        </CardBody>
      </Card>
    </div>;
  }
}





