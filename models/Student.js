import mongoose from "mongoose";
const studentSchema = new mongoose.Schema({
    Name : {type :String,required : true , trim : true},
    Age : {type : Number , required : true,min : 18 , max : 60},
    fees : {type : mongoose.Decimal128,
        required : true , validate : (fees)=> fees >= 5000},
})

const studentModel = mongoose.model("student",studentSchema)

export {studentModel}