// // Complete `server.js` to serve the following endpoints:

// - `GET /` sends the string `"Hello employees!"`
// - `GET /employees` sends the array of employees
// - `GET /employees/:id` sends the employee with the given `id`.
//   - This should 404 with a message if there is no employee with that id.
// - `GET /employees/random` sends a random employee from the array.
//   - Be very careful about where you write this middleware! A request is handled by the _first_ handler with a matching path.
const express = require("express");
const app = express();
const PORT = 3000;
const employees = require("./employees");

app.get("/", (req, res) => {
  res.send("Hello employees!");
});

app.get("/employees", (req, res) => {
  res.json(employees);
});

app.get("/employees/random", (req, res) => {
  const randomIndex = Math.floor(Math.random() * employees.length);
  console.log(randomIndex);
  const randomEmployee = employees[randomIndex];

  res.send(randomEmployee.name);
});

app.get("/employees/:id", (req, res) => {
  const employee = employees.find((obj) => obj.id === +req.params.id);
  if (employee) {
    res.send(employee.name);
  } else {
    res.send("id not located");
  }
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}.`);
});
