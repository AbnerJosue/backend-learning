import { Schema, model } from 'mongoose';

const modelsSchema = new Schema({
        title:String,
        description:String,
        asignacion: String, 
        imagen:String
    },{
        timestamps: true
    }
);

export default model('models', modelsSchema);
