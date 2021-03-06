const signup = require('../model/signup')
/* const bcrypt = require('bcryptjs') */
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt = require('passport-jwt').ExtractJwt;
require('dotenv').config()

/* const passportOptions = {
  jwtFromRequest=ExtractJwt.fromHeader(authtoken),
  secretOrKey= process.env.SECRET,
  issuer: "bharath",
  audience: "myntraModel",
  algorithms: ['RS256'],
  ignoreExpiration: false,
  passReqToCallback: false,
  jsonWebTokenOptions: {
    complete: false,
    clockTolerance: '',
    maxAge: '2d',
    clockTimestamp: '100',
    nonce: 'string'
  }
} */

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: 'gotmask',
  algorithms: ['HS256']
}

const strategy = new JwtStrategy(options, (payload, done) => {
  console.log(payload)
  signup.findOne({ _id: payload.id })
    .then((user) => {
      console.log(user)
      if (user) {
        return done(null, user)
      } else {
        console.log("error")
        return done(null, false)
      }
    })
    .catch(err => {
      console.log("final error")
      done(err, null)
    })
})

module.exports = (passport) => {
  passport.use(strategy)
}