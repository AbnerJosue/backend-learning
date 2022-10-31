import { Schema, model } from 'mongoose';

const taskSchema = new Schema({
        firstName:String,
        lastName:String,
        clase: String, 
        note:String
    },{
        timestamps: true
    }
);

export default model('tasks', taskSchema);
