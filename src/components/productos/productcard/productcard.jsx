import React from "react";

export default function Productcard(props) {
  return (
    <div>
      <h3>{props.name}</h3>

      <img src={props.image} alt="" />

      <span>{props.price}</span>
    </div>
  );
}
