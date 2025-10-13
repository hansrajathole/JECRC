const userModel = require("../models/user.model")
const bcrypt =  require("bcrypt")
const jwt = require("jsonwebtoken")
const config = require("../config/config")
const upload = require("../services/imagekit")



module.exports.loginPostController = async function (req ,res) {

    try {
        const {email , password} = req.body

        if (!email) {
            return res.status(400).json({message : "email is required"})
        }

        if (!password) {
            return res.status(400).json({message : "password is required"})
        }

        const user = await userModel.findOne({email : email})

        
        if(!user){
            return res.status(400).json({message : "invalid credencial"})
        }

        const isMatch = await bcrypt.compare(password, user.password)

        if (!isMatch) {
           return res.status(400).json({message : "invalid credencial"})
        }


        const token = await jwt.sign({
            id : user._id ,
            username : user.username ,
            email : user.email
        },config.JWT_SECRET)


        
        delete user._doc.password
        
        res.status(200).json({message : "login successfully", token , user })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
    
}




module.exports.registerPostController = async function(req, res) {
    try {
        
        const {username , email , password} = req.body

        if(!username || !email || !password){
            return res.status(400).json({message : "All field are required"})
        }

        const exist = await userModel.findOne({email : email})

        if(exist){
            return res.status(400).json({message : "user already exist"})
        }

        const hashedPass = await bcrypt.hash(password, 10)
        
        const user = await userModel.create({
            username : username,
            email : email,
            password : hashedPass
        })

        delete user._doc.password


        res.status(201).json({message : "register successfully", user})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
        
    }
}


module.exports.logoutController = function (req, res) {
    try {
        req.session.destroy((err)=>{
            if(err){
                return res.redirect("/")
            }
            res.redirect("/users/login")
        })
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}


module.exports.profileController = async (req, res) => {
    try {
        const userId = req.params.userId
        const user = await userModel.findById(userId)

        res.render("profile" , {title : "profile page" , user})
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}


module.exports.getUpdateController = async (req, res) => {
    try {

        const userId = req.params.userId

        const user = await userModel.findById(userId)

        res.render("updateProfile", {title : "update page" , user})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
     
    }
}

module.exports.postUpdateController = async (req , res) => {
    try {
        console.log("file wala data",req.file);
        console.log("body wala data",req.body);
        
        
        const profile = req.file
        const {username} = req.body
        const userId = req.params.userId


        let profileUrl = null

        if(profile){
            const result = await upload(profile)
            console.log(result);
            profileUrl = result.url
        }

        let user = await userModel.findById(userId)

        user.username = username || user.username
        
        if(profileUrl){
            user.profile = profileUrl 
        }

        await user.save()

        res.redirect(`/users/profile/${userId}`)

        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
     
    }
}