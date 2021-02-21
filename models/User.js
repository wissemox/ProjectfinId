const mongoose = require('mongoose')
//Require schema from mongoose 
const Schema = mongoose.Schema 
//Ceat the user shema 
const userShema = new Schema({
    name:{
        type:String,
        required: true
    },
    lastName:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    },
    Aritcles:[],
    article01:[],
    Pannier :{
        Number:{type:Number,
        default:0}
    }
    
}); 

module.exports=User= mongoose.model('User',userShema)