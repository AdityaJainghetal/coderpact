const jwt = require('jsonwebtoken')

const generateToken = (id) =>{
    return jwt.sign({id},"aditya",{expiresIn:'1d'})
}

module.exports = {generateToken}