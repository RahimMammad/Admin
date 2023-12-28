import express from "express"
import { deleteUser, getUserById, getUsers, signInUser, signUpUser, updateUser } from "../controllers/UserController.js"

const userRouter = express.Router()

userRouter.get("/", getUsers)
userRouter.get("/:id", getUserById)
userRouter.post("/signup", signUpUser)
userRouter.post("/signin", signInUser)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)

export default userRouter