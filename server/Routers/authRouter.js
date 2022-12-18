const Router = require('express')
const router = new Router()
const controller = require('../Controllers/authController')
const {check} = require('express-validator')

router.post('/registration',[
  check('userFullName','User name is required to texted').notEmpty(),
    check('userLogin','User login is required to texted').notEmpty(),
    check('userPassword','User password is required to texted').notEmpty(),
    check('userPassword','User password must have length from 8 to 16 symbols').isLength({min:8,max:16})
],controller.registration)
router.post('/login',[
  check('userLogin','User login is required to texted').notEmpty(),
  check('userPassword','User password is required to texted').notEmpty(),
  check('userPassword','User password must have length from 8 to 16 symbols').isLength({min:8,max:16})
],controller.login)
router.get('/users',controller.getUsers)

module.exports = router