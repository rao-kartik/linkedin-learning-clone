import  {Request, Response} from "express";
import user from "../../models/user";
import { checkPassword } from "../utils/Index";

export const loginUser = async (req: Request, res: Response):Promise<void>=>{
    const email = req.body.emailId;
    const password = req.body.password;

    const userStatus = await checkPassword(email, password);
    if(userStatus){

        let userDetails = await user.findOne({emailId: email}).lean().exec();
        res.status(200).json({
            status: 'access granted',
            user: userDetails
        })
    }
    else {
        res.status(401).json('access denied')
    }
}