import React, { useState } from "react";

const Reservations = () => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("Choose Option");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleNameChange = (e) => {
    const data = e.target.value;
    setName(data);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

  const handleTimeChange = (e) => {
    setTime(e.target.value);
    if (time > "11:00 p.m." && time < "11:00 a.m.") {
      return <div>Please enter </div>;
    }
  };

  return (
    <div>
      <div className="reserImage" />
      <div className="reserTitle">
        <div>RESERVATIONS</div>
      </div>
      <div className="closeReser">
        <a href="/">X</a>
      </div>
      <form className="reserForm">
        <label>Name for the Table: </label>

        <input
          type="text"
          id="fname"
          name="fname"
          onChange={handleNameChange}
          value={name}
          placeholder="Your Name"
        />

        <label>Number of people:</label>

        <select
          name="totalPersons"
          value={number}
          onChange={handleNumberChange}
          id="totalPersons"
        >
          <option value="Choose option" hidden>
            Choose Option
          </option>
          <option value="1">1 Person</option>
          <option value="2">2 Persons</option>
          <option value="3">3 Persons</option>
          <option value="4">4 Persons</option>
          <option value="5">5 Persons</option>
          <option value="6">6 Persons</option>
          <option value="7">7 Persons</option>
          <option value="8">8 Persons</option>
        </select>

        <label>Date:</label>

        <input
          type="date"
          id="date"
          name="date"
          value={date}
          onChange={handleDateChange}
        />

        <label>Time:</label>

        <input type="time" value={time} onChange={handleTimeChange} />

        <a href="#" class="reserSubmit">
          Submit
        </a>
      </form>
    </div>
  );
};

export default Reservations;
