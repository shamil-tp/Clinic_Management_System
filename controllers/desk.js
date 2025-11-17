const Doctor = require('../models/Doctor')
const Patient = require('../models/Patient')

exports.GetDesk = async (req,res)=>{
    try{
        const doctors = await Doctor.find()
        const patients = await Patient.find()
        return res.render('desk/desk',{doctors,patients})
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetDoctor = async (req,res)=>{
    try{
        const doctors = await Doctor.find()
        return res.render('desk/doctor',{doctors})
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.Availability = async (req,res)=>{
    try{
        const doctor = await Doctor.findOne({id:req.params.drId})
        console.log(doctor)
        doctor.available = !(doctor.available)
        doctor.save()
        return res.redirect('/desk/doctors')
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetPatient = async (req,res)=>{
    try{
        const patient = await Patient.find()
        return res.render('desk/patient',{patient})
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetAddPatient = (req,res)=>{
    try{
        return res.render('desk/addPatient')
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetAddDoctor = (req,res)=>{
    try{
        return res.render('desk/addDoctor')
    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.AddDoctor = async (req,res)=>{
    try{
        let {name,phone,isAvailable}=req.body
        console.log(isAvailable)

        await Doctor.create({
            id:Date.now(),
            name:name,
            phone:phone,
            available:isAvailable == 'true' ?true:false
        })

        return res.redirect('/desk')

    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}
exports.AddPatient = async (req,res)=>{
    try{
        let {name,phone,age,gender,bloodGroup,address,lastVisit}=req.body
        console.log(req.body)

        await Patient.create({
            id:Date.now(),
            name:name,
            phone:phone,
            age:age,
            gender:gender,
            bloodGroup:bloodGroup,
            address:address,
            createdAt:Date.now(),
            lastVisit:lastVisit
        })

        return res.redirect('/desk')

    }catch(e){
        console.log(e)
        return res.send('something went wrong')
    }
}



