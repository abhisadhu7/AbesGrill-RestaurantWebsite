import React from "react";

const RestDesc2 = (props) => {
  const restInfo =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return (
    <div className="secPagetwo">
      <img src={props.Isource} />
      <div className="RestInfotwo">
        <h1>{props.header}</h1>
        <p>{props.restInfo}</p>
      </div>
    </div>
  );
};

export default RestDesc2;
