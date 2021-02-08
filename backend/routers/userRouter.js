import express from 'express';
import User from '../models/userModels';

const userRouter = express.Router();

userRouter.get("/createadmin", async (req,res) => {
    try{
        const user = new User({
            name:'admin',
            email:'admin@exp.com',
            password:'ecommercejs',
            isAdmin: true
        });
        const createdUser = await user.save();
        res.send(createdUser);
    } catch(err){
        res.status(500).send({message: err.message});
    }
})

export default userRouter;