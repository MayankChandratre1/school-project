import mongoose from 'mongoose';



const SchoolSchema = new mongoose.Schema({
    name : {type:String, required: true},
    logo : {type:String},
    address: {type:String},
    teachers : [{type : mongoose.Schema.Types.ObjectId , ref : 'Teacher' }],
    students : [{type : mongoose.Schema.Types.ObjectId , ref : 'Student' }],
    createdAt : {type : Date, default : Date.now},
    createdBy: {type: mongoose.Types.ObjectId, ref: 'User'}
});



export default mongoose.model('School', SchoolSchema);