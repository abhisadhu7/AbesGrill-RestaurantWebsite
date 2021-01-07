import React from "react";

const RestDesc = (props) => {
  return (
    <div className="secPage">
      <img src={props.Isource} />
      <div className="RestInfo">
        <h1>{props.header}</h1>
        <p>{props.restInfo}</p>
      </div>
    </div>
  );
};

export default RestDesc;
