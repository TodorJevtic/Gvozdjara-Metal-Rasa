import {Router} from 'express';
import { sample_proizvod } from '../data';
import asyncHandler from 'express-async-handler';
import { ProizvodModel } from '../models/proizvod.model';

const router = Router();

router.get("/seedProizvod", asyncHandler(
    async (req, res) => {
       const proizvodCount = await ProizvodModel.countDocuments();
       if(proizvodCount> 0){
         res.send("Seed is already done!");
         return;
       }
   
       await ProizvodModel.create(sample_proizvod);
       res.send("Seed Is Done!");
   }
   ))

  router.get("/",asyncHandler(
    async (req, res) => {
      const proizvod = await ProizvodModel.find();
        res.send(proizvod);
    }
  ))
  router.get("/alati",asyncHandler(
    async (req, res) => {
      const alati = await ProizvodModel.find({vrsta: "alati"});
        res.send(alati);
    }
  ))
  router.get("/rasveta",asyncHandler(
    async (req, res) => {
      const rasveta = await ProizvodModel.find({vrsta: "rasveta"});
        res.send(rasveta);
    }
  ))
  router.get("/sanitarija",asyncHandler(
    async (req, res) => {
      const sanitarija = await ProizvodModel.find({vrsta: "sanitarija"});
        res.send(sanitarija);
    }
  ))
 
  router.get("/:proizvodId", asyncHandler(
      async (req, res) => {
        const prozivod = await ProizvodModel.findById(req.params.proizvodId);
        res.send(prozivod);
      }
    ))

export default router;