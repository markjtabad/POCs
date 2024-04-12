import express from "express";
import cors from "cors";
import * as utilities from './utils/functions';
import data from "../employees";

//import swaggerUi from "swagger-ui-express";
//import swaggerDocument from '../swagger.json';

const app = express();

const {PORT = '3000'} = process.env
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Mark's Koyabashi Maru (MUSE Cohort 8)"));

//app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.get("/api/v1/employees", (req, res) => {
  const { id, department } = req.query;

  //Filter by id
  if (id) {
    if (utilities.invalidId(id)) {
      return res.status(400).json({ error: "Invalid employee id."});
    }
    else {
      const employee = data.employees.find(emp => emp.id == id);

      if (!employee){
        return res.status(404).json({ error: "Employee not found!"});
      }

        return res.json(employee);
    }
  }

  //Filter by department
  if (department){
    const employees = data.employees.filter(dept => dept.department === department);
    if (Object.keys(employees).lenght === 0){
      return res.status(404).json({ error: "No employees under that department!"});
    }

    return res.json(employees);
    }

  //Return all if no param provided
  return res.json(data.employees);
});


app.post("/api/v1/employees", (req, res) => {
  if (!req.body.name){
    return res.status(404).json({ error: "Employee should have a name."});
  }

  const nextId = data.employees.length + 1;
  const employee = {
    id: nextId,
    name: req.body.name,
    dob: req.body.dob,
    department: req.body.department,
    title : req.body.title,
    avatarUrl: req.body.avatarUrl
  };
  data.employees.push(employee);

  res.status(201).json(employee);
});

//End of Employees block

/*
//Humans
app.get("/api/v1/humans", (req, res) => res.json(data.humans));

app.get("/api/v1/humans/:id", (req, res) => {
  if (utilities.invalidId(req.params.id)){
    return res.status(400).json({ error: "Invalid id."});
  }
  const id = parseInt(req.params.id, 10)
  const human = data.humans.find(human => human.id == id);

if (!human){
  return res.status(404).json({ error: "Human not found!"});
}

  return res.json(human);
});

app.post("/api/v1/humans", (req, res) => {
  if (!req.body.name){
    return res.status(404).json({ error: "Human needs a name."});
  }

  const nextId = data.humans.length + 1;
  const human = {id: nextId, name: req.body.name};
  data.humans.push(human);

  res.status(201).json(human);
});
//End of Human block


app.get("/api/v1/visits", (req, res) =>{
  //console.log(req.query);
  const { doctorid, patientid } = req.query;
  let visits = data.visits;

  if(doctorid){
    visits = visits.filter(
      (visit) => visit.doctorid === parseInt(doctorid)
    );
  }

  if(patientid){
    visits = visits.filter(
      (visit) => visit.patientid === parseInt(patientid)
    );
  }

  //console.log(doctorid, patientid);
  return res.json(visits);
})*/

app.listen(PORT, () =>
  console.log(`Mark, Rest is listening to port ${PORT}`)
);
