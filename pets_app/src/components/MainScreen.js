import React from "react";
import List from "../components/List";
import { PetsConsumer } from "../PetsContext";
const MainScreen = ({ handlePetsAddPage }) => {
  return (
    <section className="mainScreen">
      <nav>
        <h2>Vet App</h2>
        <button onClick={handlePetsAddPage}>Add Pet</button>
      </nav>
      <PetsConsumer>
        {(numRegisteredPets) => {
          return <h2 className="mainTitle">Registered Pets: {numRegisteredPets}</h2>;
        }}
      </PetsConsumer>
      <List />
    </section>
  );
};

export default MainScreen;
