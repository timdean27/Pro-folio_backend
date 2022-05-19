import mongoose from 'mongoose';

const name_Schema = mongoose.Schema({
    name: {type: String,required: true},
})


const Name_Schema = mongoose.model('Name_Schema' , name_Schema)

export default Name_Schema