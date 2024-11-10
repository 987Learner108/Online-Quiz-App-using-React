const mongoose=require("mongoose")
mongoose.connect("mongodb+srv://dinesh746:helloreact1@react1.90ezi.mongodb.net/?retryWrites=true&w=majority&appName=React1")
//mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const collection = mongoose.model("collection",newSchema)

module.exports=collection