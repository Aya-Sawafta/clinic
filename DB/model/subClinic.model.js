import mongoose, { model, Schema, Types } from "mongoose";

const subClinicSchema = new Schema({
    name:{
        type: 'string',
        required: true,
        unique: true
    },
    slug:{
        type: 'string',
        required: true,
    },
    image:{
       type: Object,
        required: true,
    },
    clinicId :{
        type : Types.ObjectId ,
         ref:'Clinic',
         required: true
    },
    createdBy : {
        type: Types.ObjectId ,ref:'User',required : true
     },
     updatedBy : {
         type: Types.ObjectId ,ref:'User',required : true
      },
},
   
)


const subClinicModel = mongoose.models.SubClinic || model('subClinic' , subClinicSchema);
export default subClinicModel;