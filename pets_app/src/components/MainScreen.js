import React from "react";
import List from "../components/List";
const MainScreen = ({handlePetsAddPage}) => {
  return (
    <section className="mainScreen">
      <nav>
        <h2>Vet App</h2>
        <button onClick={handlePetsAddPage}>Add Pet</button>
      </nav>
      <h2 className = "mainTitle">Registered Pets</h2>
      <List/>
    </section>
  );
};

export default MainScreen;