const mongoose = require ("mongoose");

//creating a database

// mongoose.connect("mongodb://localhost:27017/Medmentorz",{
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
// }).then(()=>{
//     console.log("connection successful")
// }) .catch((error) => {console.log(error)});

 
// async function main() {
//   mongoose.set("strictQuery", false);
//   await mongoose.connect("mongodb://127.0.0.1/wikiDB",{useNewUrlParser:true});
//   console.log("Connected");}
\

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology:true,
    });
    console.log(`MongoDB Connected: {conn.connection.host}`);
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}


module.exports = connectDB;