const passport = require('passport')
const OneauthStragey = require('passport-oneauth').Strategy
const {ONEAUTH} = require('./config')
const {User} = require('./db/models')

passport.serializeUser((user, done) => {
    return done(null, user.id)
})

passport.deserializeUser((userId, done) => {
    User.find({
        where: {
            id: userId
        }
    }).then(user => done(null, user))
        .catch((err) => console.log(err))
})

const oneauthStrategy = new OneauthStragey({
    clientID: ONEAUTH.CLIENT_ID,
    clientSecret: ONEAUTH.CLIENT_SECRET,
    callbackURL: 'http://localhost:2626/login/callback',
    include: ['facebook', 'twitter', 'github']
}, function(accessToken, refreshToken, profile, done) {

    User.findCreateFind({
        where: {id: profile.id},
        defaults: {
            id: profile.id,
            name: profile.name
        }
    }).spread((user, created) => done(null, user))
        .catch((err) => done(err))

})

passport.use(oneauthStrategy)

exports = module.exports = passport