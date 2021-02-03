import React from "react";
import { validate } from "../Components/ReserForm";
import { useHistory } from "react-router-dom";
import { useFormik } from "formik";

const Reservations = () => {
  let history = useHistory();

  const formik = useFormik({
    initialValues: {
      name: "",
      persons: "Choose Option",
      date: "",
      time: "",
    },
    validate,
    onSubmit: (values, actions) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        actions.setSubmitting(false);
        actions.resetForm(true);
      }, 500);
    },
  });
  return (
    <div>
      <div className="reserImage" />
      <div className="reserTitle">
        <div>RESERVATIONS</div>
      </div>
      <div className="closeReser">
        <a href="/">X</a>
      </div>
      <form className="reserForm" onSubmit={formik.handleSubmit}>
        {/* Name**************************************** */}
        <label>Name for the Table:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
          placeholder="Your Name"
        />
        {formik.errors.name ? (
          <div className="error">{formik.errors.name}</div>
        ) : null}
        {/* Persons***************************************** */}
        <label>Number of people:</label>
        <select
          name="persons"
          value={formik.values.persons}
          onChange={formik.handleChange}
          id="persons"
        >
          <option value="Choose Option" hidden>
            Choose Option
          </option>
          <option value="1 Person">1 Person</option>
          <option value="2 Persons">2 Persons</option>
          <option value="3 Persons">3 Persons</option>
          <option value="4 Persons">4 Persons</option>
          <option value="5 Persons">5 Persons</option>
          <option value="6 Persons">6 Persons</option>
          <option value="7 Persons">7 Persons</option>
          <option value="8 Persons">8 Persons</option>
        </select>
        {formik.errors.persons ? (
          <div className="error">{formik.errors.persons}</div>
        ) : null}
        {/* Date ******************************************************/}
        <label>Date:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formik.values.date}
          onChange={formik.handleChange}
        />
        {formik.errors.date ? (
          <div className="error">{formik.errors.date}</div>
        ) : null}
        {/* Time ********************************************************/}
        <label>Time:</label>
        <input
          type="time"
          name="time"
          id="time"
          value={formik.values.time}
          onChange={formik.handleChange}
        />
        {formik.errors.time ? (
          <div className="error">{formik.errors.time}</div>
        ) : null}

        <button className="reserSubmit" type="submit">
          Submit
        </button>
      </form>
      ;
    </div>
  );
};

export default Reservations;
