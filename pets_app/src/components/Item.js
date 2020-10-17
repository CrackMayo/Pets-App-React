import React from "react";

function Item(props) {
  return (
    <div className="col-md-3">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">
            <b>Sex: </b>
            {props.sex}
          </p>
          <p className="card-text">
            <b>Age: </b>
            {props.age} years
          </p>
          <p className="card-text">
            <b>Pet Type: </b>
            {props.petType}
          </p>
          <p className="card-text">
            <b>Service: </b>
            {props.service}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Item;
