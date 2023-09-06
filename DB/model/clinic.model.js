
import mongoose, {Schema,model, Types} from 'mongoose';
const clinicSchema = new Schema ({
    name:{
        type :'string',
        required: true,
        unique: true
    },
    slug:{
        type : 'string',
        required : true
    },
    
    createdBy : {
       type: Types.ObjectId ,ref:'User',required : true
    },
    updatedBy : {
        type: Types.ObjectId ,ref:'User',required : true
     },
},
{ 
    toJSON :{virtuals:true},

    toObject:{virtuals:true},

  timestamps:true, 
})
categorySchema.virtual('subClinic',{
    localField: '_id',
    foreignField : 'clinicId',
    ref:'subClinic'

})
const clinicModel = mongoose.models.Clinic ||  model('Clinic', clinicSchema);
export default clinicModel;


