import React, { useState,useRef, forwardRef, memo } from "react";
import PropTypes from 'prop-types'

const RangeSelector01 = forwardRef((props,propRef) => {
  console.log("--RangeSelector--");
  const [rangeVal, setNewVal] = useState(props.minVal);

  const changeVal = (e) => {
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

RangeSelector01.propTypes = {
  minVal: PropTypes.number.isRequired,
  maxVal: PropTypes.number.isRequired,
  stepVal: PropTypes.number.isRequired,
  rangeLabel: PropTypes.string.isRequired,
};

RangeSelector01.defaultProps = {
  rangleLabel: "Range?",
};

export default memo(RangeSelector01);
