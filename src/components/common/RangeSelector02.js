import React, { useState,useRef, forwardRef, memo } from "react";
import PropTypes from 'prop-types'

const RangeSelector02 = forwardRef((props,propRef) => {
  console.log("--RangeSelector---02-");
  const [rangeVal, setNewVal] = useState(props.minVal);

  const changeVal = (e) => {
    setNewVal(e.target.value);
    props.formRangeChangeHndlr(e.target.name,e.target.value)
  };

  return (
    <>
      <label htmlFor="{props.rangeLabel}" className="form-label">
        {props.rangeLabel} : {rangeVal}
      </label>
      <input
        type="range"
        className="form-range"
        min={props.minVal}
        max={props.maxVal}
        step={props.stepVal}
        name={props.name}
        value={rangeVal}
        onChange={changeVal}
        ref={propRef}
      />
    </>
  );
});

RangeSelector02.propTypes = {
  minVal: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  stepVal: PropTypes.number.isRequired,
  rangeLabel: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

RangeSelector02.defaultProps = {
  rangleLabel: "Range?",
};

export default memo(RangeSelector02);
