const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cors= require('cors')
const  EmployeRouter =require('../server/route/EmployeRouter')
app.use(express.urlencoded({extended:true}))
app.use(express.json()) 
app.use(cors()) 
app.use(bodyParser.json())


    

app.use('/add',EmployeRouter)
app.use('/view',EmployeRouter)
app.use('/modify',EmployeRouter)
app.use('/delete',EmployeRouter)


app.listen(2000,()=>console.log("server started"))