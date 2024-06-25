import bcrptjs from 'bcryptjs';
import User from '../models/user.model.js';
import { errHandler } from '../utils/error.js';

export const test = (req , res)=> {
    res.json({
        message: 'Api route is working',
    });
};


export const updateUser = async(req , res , next) => {
    if(req.user.id !== req.params.id)
         return next (errHandler(401, "you can only update your own acccount"))
    try {
        if(req.body.password){
           req.body.password  = bcrptjs.hashSync(req.body.password, 10);
        }
    const updateUser = await User.findByIdAndUpdate(req.parms.id,{

    
            $set:{
                username:req.body.username,
                email:req.body.email,
                password:req.body.password,
                avatar:req.body.avatar,
            },
        }, {new: true});

        const {password, ...rest} = updateUser._doc;

        res.status(200).json(rest);
    } catch (error) {
        next(error)
        
    }    

};
