import express from 'express'
import { connectDB } from './db/connectdb.js';
import {join} from 'path'
import web from './routes/web.js'
const app = express();
const port = process.env.PORT || '3000'
const DATABASE_URL = "mongodb://localhost:27017"


//database connection
connectDB(DATABASE_URL)
app.use(express.urlencoded({extended : false}))

//static file 
app.use(express.static(join(process.cwd(),"public")))
app.use("/student/edit" ,express.static(join(process.cwd(),"public")))
app.set("view engine","ejs")

app.use("/student",web)
app.use("/",web)


app.listen(port , ()=>{
    console.log(`Server listening at http://localhost:${port}`)
})