const mongoose = require('mongoose')
const bcrypt=require('bcryptjs')
const jwt=require('jsonwebtoken')

const userSchema = new mongoose.Schema({
    id:String,
    userName:String,
    name:String,
    role:[String],
    password:String
});


userSchema.pre('save',async function(next){

    if(!(this.isModified('password'))){
        return next()
    }

    this.password= await bcrypt.hash(this.password,10)

})

//validate the password with passedon userpassword
userSchema.methods.isValidatedPassword = async function(userSendPassword){
    return await bcrypt.compare(userSendPassword,this.password)
}

//create and return jwt_token
userSchema.methods.getJwtToken = function(){
    return jwt.sign(
        {    
            id:this.id,
            name:this.name,
            role:this.role
        },
        process.env.JWT_SECRET,
        {expiresIn:'8h'}
    )
} 

module.exports = mongoose.model('User', userSchema);
