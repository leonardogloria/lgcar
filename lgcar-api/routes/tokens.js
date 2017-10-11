import jwt from "jwt-simple";
module.exports = app =>{
    const cfg = app.config.jwt;
    const User = app.models.user;
    app.post("/token",(req,res) =>{
        console.log(req.body.email)
        if(req.body.email && req.body.password){
            const email = req.body.email;
            const password =  req.body.password;
            User.findOne({email:email})
                .then(user =>{
                    console.log("User ---")
                    console.log(user)
                    if(true){//Senha bate
                        const payload = {email:user.email}
                        res.json({
                        token:jwt.encode(payload,cfg.jwtSecret)
                        
                })
                }else{
                    res.sendstatus(401);
                }
            }).catch
        }else {
            res.sendStatus(401);
        }
       
    })

}