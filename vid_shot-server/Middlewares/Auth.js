import jwt from "jsonwebtoken"

const Auth = async (req,res)=>{
   try {
    const token = await req.headers.authorization.split(" ")[1]
    console.log(token);

    if(token){
        const verifiedToken = jwt.verify(token,process.env.HASH_KEY)
        req.userId = verifiedToken?.id
        next()
    }else{
        res.status(403).json({msg:"You are unauthenticated!"})
    }
   } catch (error) {
    res.status(403).json({msg:error})
   }
}

export default Auth;