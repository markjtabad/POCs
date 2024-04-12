import express from "express";
import cors from "cors";
import data from "../vaxqr";
import govdata from "../vaxrecords";
import * as utils from "./utils/functions";
//import { connection } from "mongoose";
// import swaggerUi from "swagger-ui-express";

//Imports for MongoDB
const { MongoClient } = require("mongodb");
//const recordRouter = express.Router();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

// root
//app.get("/", (req, res) => {
//    res.send("VaxQR DB");
//});

// ===========================================================================================
// VaxQR API
// ===========================================================================================

// get by ID
app.get("/api/v1/vaxqr/", (req, res) => {

    //From JSON file (old)
    /*const userID = data.userdb.find((person) => person.govt_id === req.params.id);

    if (!govtId) {
        return res.status(404).json({ error: "Person not found."});
    }
    return res.json(govtId);*/

    //From MongoDB (New)
    var connString="mongodb+srv://6aa839e8-0c3c-4338-a7f4-14862bc3b3b1:VGsjyWtDAHD_d2sZP6ys9Uu5wQY1MkN-8CKuN2BvZxc=@team3-db-govt.etfxb.mongodb.net/default";
    var dBase="default";
    var vcapServices = null;
    if (process.env.VCAP_SERVICES){
      vcapServices = JSON.parse(process.env.VCAP_SERVICES);
      const { connectionString, database } = vcapServices['mongodb-atlas-azure'][0]['credentials'];
      connString = connectionString;
      dBase = database;
    }

    const client = new MongoClient(connString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    );  
    
    client.connect((err, db) => {
        if (err || !db) {
        console.log(err);
        res.status(500).send("Unable to connect to database.");
        }
        
        const dbConnection = db.db(dBase);
        console.log("Successfully connected to MRTeam database.");
        
        var searchParam = null;
        var searchLimit = 50;
        if (req.query.limit) searchLimit = Number.parseInt(req.query.limit);
        
        if (req.query.id){
            searchParam = {id: Number.parseInt(req.query.id)};
        }
        else if (req.query.user_id){
            searchParam = {user_id: Number.parseInt(req.query.user_id)};
        }
        else if (req.query.govt_id){
            searchParam = {govt_id: req.query.govt_id};
        }
        else if (req.query.collection){
            searchParam = {};
        }
        else {
            res.status(400).send("Error in query format.");
        }

        dbConnection
            .collection(req.query.collection)
            .find(searchParam).project({_id:0}).limit(searchLimit)
            .toArray(function (err, result) {
                if (err || !result.length) {
                    res.status(400).send("No record found.");
                } else {
                    res.json(result);
                }
            });
    });
});

//Insert Contact Tracing
/*app.post("/api/v1/vaxqr/contact_tracing", (req, res) => {

    //From JSON file (old)
    const userID = data.userdb.find((person) => person.govt_id === req.params.id);

    if (!govtId) {
        return res.status(404).json({ error: "Person not found."});
    }
    return res.json(govtId);

    //From MongoDB (New)
    var connString="mongodb+srv://6aa839e8-0c3c-4338-a7f4-14862bc3b3b1:VGsjyWtDAHD_d2sZP6ys9Uu5wQY1MkN-8CKuN2BvZxc=@team3-db-govt.etfxb.mongodb.net/default";
    var dBase="default";
    var vcapServices = null;
    if (process.env.VCAP_SERVICES){
      vcapServices = JSON.parse(process.env.VCAP_SERVICES);
      const { connectionString, database } = vcapServices['mongodb-atlas-azure'][0]['credentials'];
      connString = connectionString;
      dBase = database;
    }

    const client = new MongoClient(connString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    );  
    
    client.connect((err, db) => {
        if (err || !db) {
        console.log(err);
        res.status(500).send("Unable to connect to database.");
        }
        
        const dbConnection = db.db(dBase);
        console.log("Successfully connected to MRTeam database.");
        
        dbConnection
            .collection("contact_tracing")
            .insertOne() {
                if (err || !result.length) {
                    res.status(400).send("No record found.");
                } else {
                    res.json(result);
                }
            });
    });
});
*/

// ===========================================================================================
// Govt API
// ===========================================================================================
// view all
// app.get("/api/govt/vaxrecordsdb", (req, res) => res.json(govdata.vaxrecordsdb));

// get by ID
app.get("/api/govt/vaxrecords/:id", (req, res) => {
    
    //from private data
    const govtId = govdata.vaxrecords.find((person) => person.govt_id === req.params.id);

    if (!govtId) {
        return res.status(404).json({ error: "Person not found."});
    }
    return res.json(govtId);
});

// get all vaccinated persons

app.listen(PORT, () => {
    console.log(`Listening to http://localhost:${PORT}`);
});