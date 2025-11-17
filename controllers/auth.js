const User = require('../models/User')
const sendCookie = require('../utils/sendCookie')

exports.loginPage = (req,res)=>{
    return res.render('login',{msg:""})
}

exports.login = async(req,res)=>{
    try{
        const {username,password}=req.body

        const user = await User.findOne({userName:username})
        if(!user){
            return res.render('login',{msg:'Incorrect'})
        }
 
        const validation = await user.isValidatedPassword(password)

        if(!validation){
            return res.render('login',{msg:'Incorrect'})
        }
        req.user = username
        return sendCookie(user,res)
       
    }catch(e){
        console.log(e)
        return res.send('error')
    }
}

exports.logout = (req,res)=>{
    return res.cookie('token', null).redirect('/login')

}