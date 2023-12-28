import UserModel from "../models/UserModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken"

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find({})
        users ? res.status(200).send(users) : res.status(404).send({msg: "Something wrong!"})
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getUserById = async (req, res) => {
    try {
         const user = await UserModel.findById(req.params.id)
         user ? res.status(200).send(user) : res.status(404).send({msg: "Not found!"})
    } catch (error) {
        res.status(500).send(error);
    }
}

export const signUpUser = async (req, res) => {
    try {
        const {firstname, lastname, email, password} = req.query
        const existedUser = await UserModel.findOne({email})
        if(existedUser) {
            res.status(409).send({msg: "User exists!"})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new UserModel({
            firstname, lastname, email, password: hashedPassword, role: "user"
        });
        await newUser.save();
        const token = jwt.sign({ email: newUser.email, role: newUser.role }, "secretKey", { expiresIn: "7d" })
        console.log(token);
        res.status(200).send({msg: `User ${firstname} ${lastname} is created!`})
    } catch (error) {
        res.status(500).send(error)
    }
}

export const signInUser = async (req, res) => {
    try {
        const {email, password} = req.query
        const existedUser = await UserModel.findOne({email})
        if(!existedUser) {
            return res.status(401).send({msg: 'User is not exist!'});
        }

        if(!(bcrypt.compare(password, existedUser.password))) {
            return res.status(404).send({msg: "Wrong password!"})
        }

        const token = jwt.sign(
            { userId: existedUser._id },
            "secretKey",
            { expiresIn: "7d" }
        )
        res.status(200).send({msg: `${firstname} ${lastname} logined!`})
    } catch (error) {
        res.status(500).send(error);
    }
}

export const updateUser = async (req, res) => {
    try {
        const user = await UserModel.findByIdAndUpdate(req.params.id)
        const { firstname, lastname, email, password } = req.query
        if (user) {
            user.firstname = firstname,
            user.lastname = lastname,
            user.email = email,
            user.password = password
            await user.save()
            res.send({ msg: `${firstname} ${lastname} updated!` })
        } else {
            res.status(404).json({ message: "Not Found" })
        }
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

export const deleteUser = async (req, res) => {
    try {
        await UserModel.findByIdAndDelete(req.params.id) ?
            res.status(200).send({ msg: "User Deleted" }) :
            res.status(404).send({ msg: "Not Found!" })
    } catch (error) {
        res.status(500).send({ msg: error })
    }
}