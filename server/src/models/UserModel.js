import mongoose from "mongoose";

const UserModel = new mongoose.Schema(
    {
        firstname: { type: String, required: true, maxLength: 255 },
        lastname: { type: String, required: true, maxLength: 255 },
        email: { type: String, unique: true, lowercase: true, required: true, trim: true },
        password: { type: String, required: true, minLength: 8 },
        role: { type: String, default: "user" }
    },
    { timestamps: true }
)

export default mongoose.model("User", UserModel);