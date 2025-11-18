const Consultation = require('../models/Consultation')
const Patient = require('../models/Patient')

exports.GetPharmHome = (req, res) => {
    try {
        return res.render('pharm/home')
    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetBilling = async (req, res) => {
    try {
        let patient = await Patient.find()
        let consultation = await Consultation.find()
        return res.render('pharm/billing', { username: req.user.name ,consultation})
    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetPayment = async (req, res) => {
    try {
        let patient = await Patient.find()
        let consultation = await Consultation.find()
        

        return res.render('pharm/payment',{consultation})
    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}
// 9633131257
exports.PrescriptionPurchased = async (req, res) => {
    try {
        let bill = await Consultation.findOne({id:req.params.cid})
        bill.prescriptionPurchased = bill.prescriptionPurchased === false
        bill.save()
        return res.redirect('/pharm/payment')
    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}