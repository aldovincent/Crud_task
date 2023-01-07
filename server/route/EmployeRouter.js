const express = require('express')
const  EmployeRouter = express.Router()
const employedata = require('../model/employedata')
const details = require('../model/employedata')


//http://localhost:2000/add/add-info
// http://localhost:2000/view/view-info
//http://localhost:2000/delete/items
//http://localhost:2000/modify/item/

EmployeRouter.post('/add-info', function (req, res) {
    console.log("haai");
    console.log(req.body);
    var item = {
        empName: req.body.empName,
        email: req.body.email,
        mobile: req.body.mobile,
        location:req.body.location,
      
        
    }
    console.log(item);
    employedata(item).save().then((data) => {
        console.log(data);
        if (data) {
            return res.status(200).json({
                details: data,
                success: true,
                error: false,
                message:" details added"
            })

        }
    })

})





EmployeRouter.get('/view-info',(req,res) => {
    details.find()
        .then(function(data){
            if(data == 0){
            return res.status(401).json({
                  success:false,
                  error:true,
                  message:"No details Found!"
        })
    }
        else {
            return res.status(200).json({
                success:true,
                error:false,
                data:data,
            })
        }
    })
    
})

EmployeRouter.post("/item/:id",((req,res)=>{
    const id=req.params.id
    console.log(id);
    var item = {
        empName: req.body.empName,
        email: req.body.email,
        mobile: req.body.mobile,
        location: req.body.location,
      
        
    }
    details.updateOne({_id:id},item)
      .then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:'updated!'
        })

      })

}))



EmployeRouter.delete("/items/:id",((req,res)=>{
    const id=req.params.id
    console.log(id);
    details.deleteOne({_id:id})
      .then(()=>{
        res.status(200).json({
            success:true,
            error:false,
            message:'deleted!'
        })

      })

}))








module.exports = EmployeRouter