const User = require('../models/User')
const Role = require('../models/Roles')
const bcrypt = require('bcrypt')
const {validationResult} = require('express-validator')
const jwt = require('jsonwebtoken')
const {secret} = require("../configs/config")

const generateAccessToken = (id,roles) => {
    const payload = {
        id,
        roles
    }
    return jwt.sign(payload, secret,{expiresIn: "24h"})
}

class AuthController{
    async registration(req,res){
       try{
           const errors = validationResult(req)
           if(!errors.isEmpty()){
               return res.status(400).json({message: "Error from registration",errors})
           }
            const {userFullName,userLogin, userPassword} = req.body;
            const candidate = await User.findOne({userLogin})
            if(candidate){
                return res.status(400).json({message: 'User with this login already exists!'})
            }
            const hashPassword = bcrypt.hashSync(userPassword,7);
            const userRole = await  Role.findOne({value:'user'})
            const user = new User({userFullName,userLogin,userPassword:hashPassword,roles:[userRole.value], cocktails:[]})
            await user.save();
            return res.json({message: 'Successfully registration'})
       }
       catch(e){
           console.log(e)
           res.status.json({message: "Registration error"})
       }
    }

    async login(req,res){
        try{
            const {userLogin,userPassword} = req.body
            const errors = validationResult(req)
            const user = await User.findOne({userLogin})
            if(!user){
                return res.status(400).json({message: `User ${userLogin} not Found`},errors)
            }
            const validPassword = bcrypt.compareSync(userPassword,user.userPassword)
            if(!validPassword){
                return res.status(400).json({message: `Not valid password`},errors)
            }
            const token = generateAccessToken(user._id,user.roles)
            return res.json({token})
            res.cookie('sessionCookieName', token, {httpOnly: true})
            res.status(200).json({ success: true })
        }
        catch(e){
            console.log(e)
            res.status(400).json({message: "login error"})
        }
    }

    async getUsers(req,res){
        try{
           const users = await User.find();
            res.json(users);
            res.body('123')
        }
        catch(e){

        }
    }
}

module.exports = new AuthController();