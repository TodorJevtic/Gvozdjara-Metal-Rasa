import {model, Schema, Types} from 'mongoose';
import { OrderStatus } from '../constants/order_status';
import { Proizvod, ProizvodSchema } from './proizvod.model';


export interface OrderItem{
    proizvod: Proizvod;
    price: number;
    quantity: number;
}
export const SchemaOrderItem = new Schema<OrderItem>(
    {
        proizvod: {type: ProizvodSchema, required: true},
        price: {type: Number, required: true},
        quantity: {type: Number, required: true}
    }
);

export interface Order {
    id:string;
    name: string;
    items: OrderItem[];
    totalPrice:number;
    address: string;
    paymentId: string;
    status: OrderStatus;
    user: Types.ObjectId;
    createdAt: Date;
    updatedAt: Date;
  }
  const schemaOrder = new Schema<Order>({
    name: {type: String, required: true},
    address: {type: String, required: true},
    paymentId: {type: String},
    totalPrice: {type: Number, required: true},
    items: {type: [SchemaOrderItem], required: true},
    status: {type: String, default: OrderStatus.NEXT},
    user: {type: Schema.Types.ObjectId, required: true}
},{
    timestamps: true,
    toJSON:{
        virtuals: true
    },
    toObject:{
        virtuals: true
    }
});

export const OrderModel = model('order', schemaOrder);