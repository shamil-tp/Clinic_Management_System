const User = require('../models/User')

exports.getUsers = async (req,res)=>{
    try{
        const users = await User.find()
        
        return res.render('admin/home',{users,})
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.getAddUser = (req,res)=>{
    try{
        return res.render('admin/add-user')
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.addUser = async (req,res)=>{
    try{
        let {name,username,password,roles}=req.body

        if(!Array.isArray(roles)){
            roles = [roles]
        }

        await User.create({
            id:Date.now(),
            name:name,
            userName:username,
            password:password,
            role:roles
        })

        return res.redirect('/admin')

    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}