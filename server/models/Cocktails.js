const {Schema, model} = require('mongoose')

const Cocktails = new Schema({
    idDrink: {type:String,required:true},
    strDrink : {type: String, required:true},
    strDrinkThumb : {type: String, required:true}
})

module.exports = model('Cocktails',Cocktails)