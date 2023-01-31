import React from "react";

const DetailsTag = (props) => {

   return (
    <>
      <button
        type="button"
        className="btn btn-outline-info btn-sm"
        onClick={() => {props.openDetail(props.id)}}
      >
        Details
      </button>
    </>
  );
};

export default DetailsTag;
