import jwt from "jsonwebtoken"

const Auth = async (req, res, next) => {
    try {
        const token = await req.headers.authorization.split(" ")[1]
        if (token) {
            const verifiedToken = jwt.verify(token, process.env.HASH_KEY)
            req.userId = verifiedToken?.id
            next()
        } else {
            console.log("You are unauthenticated!");
            res.status(403).json({ msg: "You are unauthenticated!" })
        }
    } catch (error) {
        console.log({ msg: error });
        res.status(403).json({ msg: error })
    }
}

export default Auth;