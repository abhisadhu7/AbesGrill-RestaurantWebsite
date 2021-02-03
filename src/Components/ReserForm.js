export const validate = (values) => {
  const CurrentDate = new Date().toLocaleDateString();

  const errors = {};
  if (!values.time) {
    errors.time = "Please Specify a time for the reservation.";
  } else if (values.time > "22:00" || values.time < "11:00") {
    errors.time = "Please enter a time between 11:00 a.m. and 11:00 p.m.";
  }

  if (!values.name) {
    errors.name = "Please enter a name to reserve the table.";
  }

  if (values.persons === "Choose Option") {
    errors.persons = "Please choose total persons visiting our restaurant.";
  }

  if (!values.date) {
    errors.date = "Please choose a date for the reservation.";
  } else if (values.date < CurrentDate) {
    errors.date =
      "Please choose the current date, or make a reservation for a future date";
  }

  return errors;
};
