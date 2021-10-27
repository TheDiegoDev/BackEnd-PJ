import {Schema, model, Mongoose} from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2'

const taskSchema = new Schema({
    id: {
        type: String,
    }, 
    name:  {
        type: String,
    },
    foto:  {
        type: String,
    },
    descripcion:  {
        type: String,
    },
    precio:  {
        type: String,
    },
    primero:  {
        type: String,
    },
    segundo:  {
        type: String,
    },
}, {
    versionKey: false
});


taskSchema.plugin(mongoosePaginate);
export default model('Task',taskSchema)


