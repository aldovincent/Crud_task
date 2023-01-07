const mongoose=require('mongoose');
mongoose.connect('mongodb+srv://Aldovincent:aldo@cluster0.qlnx2i4.mongodb.net/crud?retryWrites=true&w=majority')
const Schema = mongoose.Schema;


const employeSchema = new Schema({
    empName:{type:String,required:true},
    email:{type:String,required:true},
    mobile:{type:String,required:true},
    location:{type:String,required:true},
   
});
var employedata=mongoose.model('details_tb',employeSchema);
module.exports=employedata;