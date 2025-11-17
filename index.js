require('dotenv').config()

const express = require('express')
const connectDB = require('./config/db')
const cookieParser = require('cookie-parser')

const app = express()

app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(cookieParser())
app.use(express.urlencoded())
app.use(express.json())

const doctor = require('./routes/doctor')
const desk = require('./routes/desk')
const pharm = require('./routes/pharm')
const auth = require('./routes/auth')
const admin = require('./routes/admin')
const { isLoggedin, isDoctor, isDesk, isPharm } = require('./middlewares/auth')


app.use('/admin', admin)
app.use('/doctor', isLoggedin, isDoctor, doctor)
app.use('/desk', isLoggedin, isDesk, desk)
app.use('/pharm', isLoggedin, isPharm, pharm)
app.use('/', auth)

app.get('/',isLoggedin ,(req, res) => {
    console.log(req.user)
    let username = req.user.name
    return res.render('home', { username })
})

app.use((req, res) => {
    return res.send('404')
})

const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
    connectDB()
});
