import passport from "passport";
import {Strategy,ExtractJwt} from 'passport-jwt';

module.exports = app =>{
    console.log("Teste")
    const User = app.models.user;
    const cfg = app.config.jwt;
    const params = {
        secretOrKey: cfg.jwtSecret,
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
    };
    const strategy = new Strategy(params,(payload,done)=>{
        User.findById(payload.id)
            .then(user =>{
                if(user){
                    return done(null,{
                        id:user.id
                    })
                }
                return done(null,false)
            })
            .catch(error => done(error,null));

    });
    
    passport.use(strategy);
    return{
        initialize: () => {
            //return passport.initialize();
            console.log("bugala")
        },
        authenticate: () => {
            return passport.authenticate("jwt",cfg.jwtSession);
        }
    }
}