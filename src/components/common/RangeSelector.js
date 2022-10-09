import React, { forwardRef, useState } from "react";
import PropTypes from 'prop-types'

const RangeSelector = forwardRef((props,propRef) => {
console.log("--RangeSelector--");
const [rangeVal, setNewVal] = useState(props.minVal);

const changeVal = (e) => {
    console.log(rangeVal)
    setNewVal(e.target.value);
};

  return (
    <>
      <label htmlFor="useAge" className="form-label">
      {props.rangeLabel} : {rangeVal}
      </label>
      <input
        type="range"
        className="form-range"
        min={props.minVal}
        max={props.maxVal}
        step={props.stepVal}
        value={rangeVal}
        onChange={changeVal}
        ref={propRef}
      />
    </>
  );
});

RangeSelector.propTypes = {
    minVal : PropTypes.number.isRequired,
    maxVal : PropTypes.number.isRequired,
    stepVal : PropTypes.number.isRequired,
    rangeLabel :  PropTypes.string.isRequired
}

RangeSelector.defaultProps = {
    rangleLabel : 'Range?',
  };

export default RangeSelector;
