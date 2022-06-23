//const mongoose = require("mongoose");

// const connectDatabase = () => {
//   mongoose
//     .connect("mongodb+srv://TULSHI_KALAKHETI:Tulshi@38@cluster0.85frmwp.mongodb.net/?retryWrites=true&w=majority", {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//       useCreateIndex: true,
//     })
//     .then((data) => {
//       console.log(`Mongodb connected with server: ${data.connection.host}`);
//     });
// };

// module.exports = connectDatabase;

const mongoose = require("mongoose");

const connectDatabase = () => {
mongoose .connect( "mongodb+srv://TULSHI_KALAKHETI:Tulshi@38@cluster0.85frmwp.mongodb.net/?retryWrites=true&w=majority", {
   useNewUrlParser: true,
    useUnifiedTopology: true,
   } 
   ) .then(() => { 
    console.log("Mongo db is connected");
  }) 
  .catch((err) => { 
    console.log(err); 
  });

};

  module.exports = connectDatabase;
