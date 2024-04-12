import express from "express";
import cors from "cors";
import * as utilities from './utils/functions';
import data from "../data";

import swaggerUi from "swagger-ui-express";
import swaggerDocument from '../swagger.json';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => res.send("Hello MU Cohort 8!"));

app.use("/api/v1/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

//Doctors
app.get("/api/v1/doctors", (req, res) => res.json(data.doctors));

app.get("/api/v1/doctors/:id", (req, res) => {
  if (utilities.invalidId(req.params.id)){
    return res.status(400).json({ error: "Invalid id."});
  }
  //console.log(req.params);
  const id = parseInt(req.params.id, 10)
  const doctor = data.doctors.find(doc => doc.id == id);

if (!doctor){
  return res.status(404).json({ error: "Doctor not found"});
}

  return res.json(doctor);
});

app.post("/api/v1/doctors", (req, res) => {
  if (!req.body.name){
    return res.status(404).json({ error: "Doctor needs a name"});
  }

  const nextId = data.doctors.length + 1;
  //const doctor = {id: nextId, ...req.body};
  const doctor = {id: nextId, name: req.body.name};
  data.doctors.push(doctor);

  res.status(201).json(doctor);
});
//End of Doctors

//Patients
app.get("/api/v1/patients", (req, res) => res.json(data.patients));

app.get("/api/v1/patients/:id", (req, res) => {
  if (utilities.invalidId(req.params.id)){
    return res.status(400).json({ error: "Invalid id."});
  }
  //console.log(req.params);
  const id = parseInt(req.params.id, 10)
  const patient = data.patients.find(pat => pat.id == id);

if (!patient){
  return res.status(404).json({ error: "Patient not found"});
}

  return res.json(patient);
});

app.post("/api/v1/patients", (req, res) => {
  if (!req.body.name){
    return res.status(404).json({ error: "Patient needs a name"});
  }

  const nextId = data.patients.length + 1;
  const patient = {id: nextId, name: req.body.name};
  data.patients.push(patient);

  res.status(201).json(patient);
});

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
})

app.listen(PORT, () =>
  console.log(`Hello World, I'm listening to port ${PORT}`)
);
