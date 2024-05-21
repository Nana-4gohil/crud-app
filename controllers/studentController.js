import { studentModel } from "../models/Student.js"
class StudentController{
    static createDoc = async (req,res)=>{
        try{
            const {name , age , fees} = req.body
            const StudentDoc = new studentModel({
                Name : name,
                Age : age,
                fees : fees,
           })
            await StudentDoc.save()
            return res.redirect("/student")

        }catch(err){
            console.log(err)
        }
        
    }
    static getAllDoc = async (req,res)=>{
        try{
            const result = await studentModel.find()
           return res.render("index",{data:result})
        }catch(err){
            console.log(err)
        }
        res.render("index")
    }



    static editDoc = async (req,res)=>{
        try{
            const {id} = req.params
            const result = await studentModel.findById(id)
            res.render("edit",{data : result})
        }catch(err){
            console.log(err)
        }
           
    }

    static updateDocById = async (req,res)=>{
        try{
            const {id} = req.params
            const {name, age, fees}=req.body
            await studentModel.findByIdAndUpdate(id,{Name : name,Age : age , fees : fees})
            res.redirect("/student")

        }catch(err){
            console.log(err)
        }
    }

    static deleteDocById = async (req,res)=>{
        try{
            const {id} = req.params
            const result = await studentModel.findByIdAndDelete(id)
            res.redirect("/student")

        }catch(err){
            console.log(err)
        }
        
    }


}
export {StudentController}