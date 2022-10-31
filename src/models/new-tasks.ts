import { Schema, model } from 'mongoose';

const newTaskSchema = new Schema({
        title:String,
        description:String,
        note: String, 
        module:String,
        asignacion: String
    },{
        timestamps: true
    }
);

export default model('newTask', newTaskSchema);
