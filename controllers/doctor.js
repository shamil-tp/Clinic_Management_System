const Consultation = require('../models/Consultation')
const Patient = require('../models/Patient')

exports.GetDoctorHome = (req,res) => {
    try{
        return res.render('doctor/home')
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}