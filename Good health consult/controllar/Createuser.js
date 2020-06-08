const User = require('../model/patientname')

module.exports = (req, res) => {
    User.create(req.body, (error, user) => {
        if (error) {
            return res.redirect('/')
        }
        res.redirect('/')
    })
}