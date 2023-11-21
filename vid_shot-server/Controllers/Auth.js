import Users from "../Models/User.js"
import CryptoJS from "crypto-js"
import jwt from "jsonwebtoken"

export const signUp = async (req, res) => {
    try {
        const existingUser = await Users.findOne({ email: req.body.email })
        if (existingUser) {
            return res.status(403).json({ msg: "User already exists!" })
        } else {
            const newUser = await new Users({
                username: req.body.username,
                email: req.body.email,
                password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO).toString()
            })
            const user = await newUser.save()
            const token = jwt.sign({
                id: user._id
            }, process.env.HASH_KEY, { expiresIn: "3d" })
            res.status(201).json({ user, token })
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
}

export const signIn = async (req, res) => {
    try {
        const user = await Users.findOne({ email: req.body.email })
        if (!user) {
            return res.status(404).json({ msg: "User not found!" })
        } else {
            const unHash = CryptoJS.AES.decrypt(user.password, process.env.HASH_KEY)
            const password = unHash.toString(CryptoJS.enc.Utf8)
            if (password !== req.body.password) {
                return res.status(401).json({ msg: "Wrong Credentials!" })
            } else {
                const token = jwt.sign({
                    id: user._id
                }, process.env.HASH_KEY, { expiresIn: "3d" })
                res.status(200).json({ user, token })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: error })
    }
}