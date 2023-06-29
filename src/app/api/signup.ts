
import type { NextApiRequest, NextApiResponse } from 'next';
import { connectToMongoDB } from '../../../lib/mongodb';
import User from '../../../models/user';
import { hash } from 'bcryptjs';
import { IUser } from '../types/propsTypes';
import mongoose from 'mongoose';
const handler = async (req:NextApiRequest,res:NextApiResponse)=>{

    const connection = await connectToMongoDB()
    if(!connection) return connection;

    if(!req.body) return res.status(404).json({error:"Data is missing"});

    const {fullName,email,password} =req.body;

    const userExists = await User.findOne({email});

    if(userExists){
        return res.status(409).json({error:"User already exists"});
    }
    else{
        if(password.length<6){
            return res.status(409).json({error:"Password should be more than six charecters long"});
        }
        const hashedPassword = await hash(password,12);

        User.create({
            email,
            fullName,  
            password:hashedPassword
        },(error:unknown,data:IUser)=>{
            if(error && error instanceof mongoose.Error.ValidationError){
                for(let field in error.errors){
                    const msg = error.errors[field].message;
                    return res.status(409).json({error:msg});

                }
            }
            const user = {
                email : data.email,
                fullName : data.fullName,
                _id :data._id
            }

            return res.status(201).json({
                success:true,
                user
            });

        });
    }
    
}

export default handler;
