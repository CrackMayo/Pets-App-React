import React from "react";
import Item from "../components/Item";

function List() {
  return (
    <div className = "container">
      <div className="row">
        {Object.entries(localStorage).map((value, index) => {
          return <Item key={index} name={JSON.parse(value[1]).petName} age={JSON.parse(value[1]).petAge} sex={JSON.parse(value[1]).petSex} petType={JSON.parse(value[1]).petTyp} service={JSON.parse(value[1]).serviceType} />;
        })}
      </div>
    </div>
  );
}

export default List;
