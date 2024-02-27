import { Schema, model } from "mongoose";

export interface Proizvod{
    id: string;
    naziv: string;
    cena: number;
    vrsta: string;
    imageUrl: string;
  }

  export const ProizvodSchema = new Schema <Proizvod>(
    {
        naziv:{ type: String, required:true},
        cena:{ type: Number, required:true},
        vrsta:{ type: String, required:true},
        imageUrl:{ type: String, required:true},
    },{
        toJSON:{
            virtuals:true
        },
        toObject:{
            virtuals: true
        },
        timestamps: true
    }
  )

export const ProizvodModel = model<Proizvod>('proizvod', ProizvodSchema);