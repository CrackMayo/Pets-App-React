import React from "react";

const AddPet = (props) => {
  const {
    name,
    setName,
    sex,
    setSex,
    age,
    setAge,
    petType,
    setPetType,
    service,
    setService,
    handlePetsMainPage,
    handleAddPet,
  } = props;

  return (
    <>
      <nav>
        <h2>Vet App</h2>
        <button onClick={handlePetsMainPage}>View Pets</button>
      </nav>
      <section className="petAdd">
        <div className="petAddContainer">
          <h1 className="petsAppTitle">Add Pet</h1>
          <label>Name:</label>
          <input
            type="text"
            autoFocus
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label>Sex:</label>
          <select
            className="sexSelect"
            value = {sex}
            onChange={(e) => setSex(e.target.value)}
          >
            <option disabled defaultValue value = "">
              Select an option
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label>Age:</label>
          <input
            type="number"
            required
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
          <label>Pet Type:</label>
          <select
            className="petTypeSelect"
            value = {petType}
            onChange={(e) => setPetType(e.target.value)}
          >
            <option value = "" defaultValue>
              Select an option
            </option>
            <option value="Dog">Dog</option>
            <option value="Cat">Cat</option>
            <option value="Hamster">Hamster</option>
            <option value="Bird">Bird</option>
          </select>
          <label>Service:</label>
          <select
            className="serviceSelect"
            value = {service}
            onChange={(e) => setService(e.target.value)}
          >
            <option defaultValue disabled value = "">
              Select an option
            </option>
            <option value="Assessment">Medical Assessment</option>
            <option value="Emergency">Medical Emergency</option>
            <option value="Hospitalization">
              Medical Hospitalization
            </option>
          </select>
          <div className="btnContainer">
            <button onClick={handleAddPet}>Add Pet</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default AddPet;
