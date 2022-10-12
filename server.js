const express = require('express')
const app = express()
const mongoose = require('mongoose')
const passport = require('passport')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const flash = require('express-flash')
const logger = require('morgan')
const connectDB = require('./config/database')
const mainRoutes = require('./routes/main')
const trackerRoutes = require('./routes/trackers')
// const path = require('path'); 


require('dotenv').config({ path: './config/.env' })

// Passport config
require('./config/passport')(passport)

connectDB()

app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(logger('dev'))
    // Sessions
app.use(
    session({
        secret: 'keyboard cat',
        resave: false,
        saveUninitialized: false,
        store: new MongoStore({ mongooseConnection: mongoose.connection }),
    })
)

// view engine setup    


// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

// Passport middleware
app.use(passport.initialize())
app.use(passport.session())

app.use(flash())

app.use('/', mainRoutes)
app.use('/trackers', trackerRoutes)
app.use('/about', mainRoutes)
app.use('/forgot', mainRoutes)
app.use('/otherproducts', mainRoutes)

app.listen(process.env.PORT, () => {
    console.log('Server is running, you better catch it!')
})