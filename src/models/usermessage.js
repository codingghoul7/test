// const { error } = require("jquery");
const mongoose = require("mongoose");
// const  validator = require("validator");



const userSchema = mongoose.Schema({
   
email:{
type:String,
required:true,

// validate(value){
//     if(!validator.isEmail(value)){
//         // throw new Error("Invalid emailid")
//         console.log(error)
//     }
// }

    },

name:{
    type:String,
    required:true, 
    minLength:3
    },

 message:{
            type:String,
            },

})

// we need to create a collection

const User=mongoose.model("User",userSchema);

module.exports= User;