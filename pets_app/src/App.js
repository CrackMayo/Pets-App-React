import React, { useState, useEffect } from "react";
import Login from "./components/AddPet";
import MainScreen from "./components/MainScreen";
import swal from "sweetalert";
import "./App.css";
import { PetsProvider } from "./PetsContext";

const App = () => {
  const [name, setName] = useState("");
  const [sex, setSex] = useState("");
  const [age, setAge] = useState("");
  const [petType, setPetType] = useState("");
  const [service, setService] = useState("");
  const [mainPage, setMainPage] = useState(true);

  const clearInputs = () => {
    setName("");
    setSex("");
    setAge("");
    setPetType("");
    setService("");
  };

  const handleAddPet = () => {
    if (
      name === "" ||
      sex === "" ||
      age === "" ||
      petType === "" ||
      service === ""
    ) {
      swal("Complete all fields!", "", "warning");
    } else {
      let pet = {
        petName: name,
        petSex: sex,
        petAge: age,
        petTyp: petType,
        serviceType: service,
      };
      window.localStorage.setItem(
        window.localStorage.length + 1,
        JSON.stringify(pet)
      );
      swal("A new pet has been added!", "", "success");
      clearInputs();
    }
  };

  const handlePetsAddPage = () => {
    setMainPage(false);
  };

  const handlePetsMainPage = () => {
    setMainPage(true);
  };

  useEffect(() => {
    if (!mainPage) {
      handlePetsAddPage();
    }
  });

  return (
    <div className="App">
      {mainPage ? (
        <>
          <PetsProvider value = {window.localStorage.length}>
            <MainScreen handlePetsAddPage={handlePetsAddPage} />
          </PetsProvider>
        </>
      ) : (
        <Login
          name={name}
          setName={setName}
          sex={sex}
          setSex={setSex}
          age={age}
          setAge={setAge}
          petType={petType}
          setPetType={setPetType}
          service={service}
          setService={setService}
          handlePetsMainPage={handlePetsMainPage}
          handleAddPet={handleAddPet}
        />
      )}
    </div>
  );
};

export default App;
