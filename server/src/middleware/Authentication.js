import jwt from "jsonwebtoken" 

export const AuthMiddleWare = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1]
        const decodeToken = jwt.verify(token, "secretKey")
        res.userData = { userId: decodeToken.userId }
        next()
    } catch (error) {
        res.status(401).send({msg: "Authentication failed!"})
    }
}