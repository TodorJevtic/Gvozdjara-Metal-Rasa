import { verify } from "jsonwebtoken";
import { HTTP_UNAPPROVED } from "../constants/http_status";


export default(req: any, res: any, next: any) =>{
    const jwtToken = req.headers.acces_token as string;
    if(!jwtToken) return res.status(HTTP_UNAPPROVED).send();

    try{
        const userDecoded = verify(jwtToken, process.env.JWT_SECRET!);
        req.user = userDecoded;
    } catch(error){
        res.status(HTTP_UNAPPROVED).send();
    }
    return next();
}