const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const Admin = require("./../model/adminModel")

exports.createAdmin = async (req, res, next) => {
    try {
        //Get the body data
        const { email, username, password } = req.body

        if (!email || !username || !password) {
            res.status(400)
            throw new Error("Please provide all the required fields")
        }

        //Check if user is exists or not
        const prevAdmin = await Admin.findOne({ email })

        if (prevAdmin) {
            res.status(400)
            throw new Error('User already exists')
        }

        //Hash the password
        const salt = await bcrypt.genSalt(20)
        const hashedPassword = await bcrypt.hash(password, salt)

        //Create a new Admin
        const admin = await Admin.create({
            email,
            username,
            password: hashedPassword
        })

        if (admin) {
            res.status(201).json('Admin created successfully')
        }
    } catch (error) {
        next(error)
    }
}

exports.loginAdmin = async (req, res, next) => {
    try {
        res.status(201).json({
            status: 'success',
            message: 'Admin logined successfully'
        });
    } catch (error) {
        next(error)
    }
}

exports.getMe = async (req, res, next) => {
    try {

        const admin = await Admin.find()

        res.status(200).json({
            status: 'success',
            message: 'User data dislpayed successfully',
            data: {
                admin
            }
        });
    } catch (error) {
        next(error)
    }
}