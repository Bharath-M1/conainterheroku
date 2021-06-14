const mongoose = require('mongoose')
/* const MongoStore = require('connect-mongo')(session)
const session = require('express-session')*/




const connectDB = () => {
  mongoose.Promise = global.Promise;
  mongoose.connect(process.env.DB_CLUSTER, {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    console.log("Successfully connected to cluster 🚀 ")
  })
}


/* const sessionStore = new MongoStore({
    mongooseConnection: mongoose.connection,
    collection: 'sessions'
})
app.use(session({
    secret: process.env.SECRET,
    store: sessionStore,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000 * 60 * 60 * 24
    }
})) */




module.exports = connectDB;