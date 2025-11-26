import  jwt  from "jsonwebtoken";
import { ENV } from "../config/env.js";

export function generateToken(user){
return jwt.sign
    (
    {id: user.id, email: user.email}, 
    ENV.JWT_SECRET, {expiresIn: '1d'}
   );
}