const mongoose = require('mongoose')

const mongoSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'must providr a name'],
        trim: true ,
        maxlength:[100, 'name canot be more then 100 character.']
    },
    completed: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', mongoSchema);
