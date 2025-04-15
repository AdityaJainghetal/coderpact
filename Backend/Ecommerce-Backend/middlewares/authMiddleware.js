const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const asyncHandler = require('express-async-handler')

const authMiddleware = asyncHandler(async(req,res,next)=>{
    console.log(req)
    let token
    if(req?.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
        try{
            if(token){
                const decoded = jwt.verify(token,"aditya")
                const user =await User.findById(decoded.id)
                req.user = user
                console.log(req.user)
                next()
            }
        }catch(err){
            throw new Error ('Authorized token expired,Please Login again')
            console.log(err)
        }
    }else{
        throw new Error('There is no token attached with the header')
    }
})


const isAdmin = asyncHandler(async(req,res,next)=>{
    // console.log(req.user)
    const {email} = req.user
    const adminUser = await User.findOne({email})
    if(adminUser.role !== "admin"){
        throw new Error("You Are Not Admin")
    }else{
        next()
    }

})
module.exports ={ authMiddleware,isAdmin}


