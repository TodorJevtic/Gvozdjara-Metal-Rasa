import {Router} from 'express';
import { sample_users } from "../data";
import jwt from "jsonwebtoken";
import asyncHandler from 'express-async-handler';
import { User, UserModel } from '../models/user.model';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import bcrypt from 'bcryptjs';

const router = Router();

router.get("/",asyncHandler(
  async (req, res) => {
    const korisnik = await UserModel.find();
      res.send(korisnik);
  }
))

router.get("/:userId", asyncHandler(
  async (req, res) => {
    const user = await UserModel.findById(req.params.userId);
    res.send(user);
  }
))

router.get("/seedUsers", asyncHandler(
    async (req, res) => {
       const usersCount = await UserModel.countDocuments();
       if(usersCount> 0){
         res.send("User seed is finished already!");
         return;
       }
   
       await UserModel.create(sample_users);
       res.send("User seed finished!");
   }
   ))

router.post("/loginUser", asyncHandler(
  async (req, res) => {
    const {email, password} = req.body;
    const korisnik = await UserModel.findOne({email});
      if(korisnik && (await bcrypt.compare(password,korisnik.password))) {
      res.send(generateTokenResponse(korisnik));
      }
      else{
        res.status(HTTP_BAD_REQUEST).send("Username or password incorrect!");
      }
    }
  ))

  router.post('/registration', asyncHandler(
    async (req, res) => {
      const {name, email, password, address} = req.body;
      const korisnik = await UserModel.findOne({email});
      if(korisnik){
        res.status(HTTP_BAD_REQUEST)
        .send('User is exist already, please login with your account!');
        return;
      }
  
      const encryptedPassword = await bcrypt.hash(password, 10);
  
      const noviKorisnik:User = {
        id:'',
        name,
        email: email.toLowerCase(),
        password: encryptedPassword,
        address,
        isAdmin: false
      }
  
      const dbUser = await UserModel.create(noviKorisnik);
      res.send(generateTokenResponse(dbUser));
    }
))

//update
router.put('/update/:userId', asyncHandler(
  async (req, res) => {
    const userId = req.params.userId;
    const {name, email, password, address} = req.body;
    const user = await UserModel.findById(userId);
    if(!user){
      res.status(HTTP_BAD_REQUEST)
      .send('User not found!');
      return;
    }else{
      user.name = name;
      user.email = email;
      user.address = address;
  
      if(password){
        user.password = await bcrypt.hash(password, 10);
      }
  
      const dbUser = await user.save();
      res.send(generateTokenResponse(dbUser));
    }
    
  }
))

const generateTokenResponse = (user : User) => {
    const jwtToken = jwt.sign({
      id: user.id, email:user.email, isAdmin: user.isAdmin
    },"" + process.env.JWT_SECRET!,{
      expiresIn:"30d"
    });
  
    return {
      id: user.id,
      email: user.email,
      name: user.name,
      address: user.address,
      isAdmin: user.isAdmin,
      token: jwtToken
    };
  }

export default router;