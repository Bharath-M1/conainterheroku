const express = require('express');
const cors = require('cors');
const passport = require('passport')
const connectDb = require('./config/dbConfig')

/* express intialization */
const app = express()

/* middlewares and configure */
require('dotenv').config()
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(passport.initialize())
app.use(passport.session())

/* Router */
app.use('/home', 
require('./route/carouselRoute'), 
require('./route/loginRoute'), 
require('./route/catogeriesRoute'), 
require('./route/galleryRoute'), 
require('./route/productRoute'), 
require('./route/signupRoute')
)

/* connecting to database */
connectDb()


// listen for requests
app.listen(5000, () => {
    console.log(`server is running at port : http://localhost:5000 😇 `);
});