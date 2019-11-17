const local = require('./localStrategy');
const User = require('../schemas/user');

/*
    passport 모듈 구현
*/
module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        User.find({ where: { id } })
        .then(user => done(null, user))
        .catch(err => done(err));
    });

    local(passport);
};