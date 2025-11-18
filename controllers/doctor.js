const Consultation = require('../models/Consultation')
const Patient = require('../models/Patient')

exports.GetDoctorHome = (req, res) => {
    try {
        return res.render('doctor/home')
    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetConsultation = (req, res) => {
    try {
        let username = req.user.name
        return res.render('doctor/consultation', { username })
    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.GetPatientDetails = async (req, res) => {
    try {
        let patient = await Patient.find()
        let consultation = await Consultation.find({doctor:req.user.id})



        const groupedConsultations = consultation.reduce((acc, consultation) => {
            const key = consultation.patientPhone;

            if (!acc[key]) {
                acc[key] = {
                    patientName: consultation.patient,
                    patientPhone: consultation.patientPhone,
                    consultation: []
                };
            }

            acc[key].consultation.push({
                consultationDate: new Date(consultation.date).toLocaleDateString(),
                symptoms: consultation.symptoms,
                description: consultation.description,
                prescription: consultation.prescription,
            });

            return acc;
        }, {});
        console.dir(groupedConsultations, { depth: null });

        const patientConsultationDetails = Object.values(groupedConsultations);
        // Change this line:
        // console.log(finalStructuredArray);

        // To this line, which forces deep inspection:
        // console.dir(patientConsultationDetails, { depth: null });
        return res.render('doctor/patientDetails', { patientConsultationDetails })
    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}

exports.AddConsultation = async (req, res) => {
    try {
        // console.log(req.user)
        let { doctor, patient, patientPhone, symptoms, description, prescription } = req.body
        await Consultation.create({
            id: Date.now(),
            doctor: req.user.id,
            patient: patient.toUpperCase(),
            patientPhone: patientPhone,
            date: Date.now(),
            token: Date.now(),
            symptoms: symptoms,
            description: description,
            prescription: prescription,
            // prescriptionAmount
        })
        let patientLastVisit = await Patient.findOne({ phone: patientPhone,name:patient.toUpperCase() })
        console.log(patientLastVisit)

        patientLastVisit.lastVisit = new Date(Date.now()).toLocaleDateString()
        patientLastVisit.save()
        return res.redirect('/doctor/addconsultation')
    } catch (e) {
        console.log(e)
        return res.send('someting went wrong')
    }
}

exports.ShowConsultationDetails = (req, res) => {
    try {
        console.log(req.params.pid)

    } catch (e) {
        console.log(e)
        return res.send('something went wrong')
    }
}