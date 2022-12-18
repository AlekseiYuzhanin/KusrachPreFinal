const {Schema, model} = require('mongoose')

const User = new Schema({
    userFullName : {type: String},
    userLogin : {type: String, unique:true},
    userPassword : {type: String},
    roles: [{type:String,ref: 'Roles'}],
    cocktails : [{type:String, ref: 'Cocktails'}]
})

module.exports = model('User',User)