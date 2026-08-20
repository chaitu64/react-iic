export const login = async(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.status(400).json({message:"Please provide email and password"});
    }
    return res.status(200).json({message:"Login successful"});
}