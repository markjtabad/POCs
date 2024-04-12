const { MongoClient } = require("mongodb");

export const invalidId = (id) => {
  return Number.isNaN(parseInt(id, 10));
};

module.exports = {
  connectToServer: function (callback) {

    var connString="mongodb+srv://6aa839e8-0c3c-4338-a7f4-14862bc3b3b1:VGsjyWtDAHD_d2sZP6ys9Uu5wQY1MkN-8CKuN2BvZxc=@team3-db-govt.etfxb.mongodb.net/default";
    var dBase="default";
    var vcapServices = null;
    console.log("Entered function.");
    if (process.env.VCAP_SERVICES){
      vcapServices = JSON.parse(process.env.VCAP_SERVICES);
      const { connectionString, database } = vcapServices['mongodb-atlas-azure'][0]['credentials'];
      connString = connectionString;
      dBase = database;
    }
    console.log(connString);
    const client = new MongoClient(connString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    );

    client.connect(function (err, db) {
      if (err || !db) {
        return callback(err);
      }

      const dbConnection = db.db(dBase);
      console.log("Successfully connected to MRTeam Database.");

      return callback();
    });
  },

  getDatabaseConnection: function () {
    return dbConnection;
  },


/*
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
  console.log(connString);
  client.connect((err, db) => {
      if (err || !db) {
      console.log(err);
      return "{[]}";
      //res.status(500).send("Error connecting to database.");
      }
      
      const dbConnection = db.db(dBase);
      console.log("Successfully connected to database.");

      switch (collection){
        case 'access_roles':{
          return "{[]}";
          //res.status(400).send(`Collection ${collection} under maintenance.`);
        }
        case 'contact_tracing':{
          return "{[]}";
          //res.status(400).send(`Collection ${collection} under maintenance.`);
        }
        case 'merchants':{
          dbConnection
          .collection(collection)
          .find({
              user_id : id
          }).limit(50)
          .toArray(function (err, result) {
              if (err) {
                return "{[]}";  
                //res.status(400).send("Record not found.");
              } else {
                return result;  
                //res.json(result);
              }
          });
        }
        case 'user_access':{
          return "{[]}";
          //res.status(400).send(`Collection ${collection} under maintenance.`);
        }
        case 'users': {
          dbConnection
          .collection(collection)
          .find({
              id : id
          }).limit(50)
          .toArray(function (err, result) {
              if (err) {
                console.log(err);
                return "{[]}";  
                //res.status(400).send("Record not found.");
              } else {
                console.log(`Result inside function: ${result}`);
                return result;  
                //res.json(result);
              }
          });
        }
        default: {
          return "{[]}";
          //res.status(400).send(`Collection ${collection} not found.`);
          }
      }*/
};