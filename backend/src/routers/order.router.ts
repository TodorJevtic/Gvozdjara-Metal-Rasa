import {Router} from 'express';
import asyncHandler from 'express-async-handler';
import { HTTP_BAD_REQUEST } from '../constants/http_status';
import { OrderStatus } from '../constants/order_status';
import { OrderModel } from '../models/order.model';
import auth from '../middlewares/auth.mid';

const router = Router();
router.use(auth);

router.post('/create',
asyncHandler(async (req:any, res:any) =>{
    const orderRequest = req.body;

    if(orderRequest.items.length <= 0){
        res.status(HTTP_BAD_REQUEST).send('Empty cart!');
        return;
    }

    await OrderModel.deleteOne({
        user: req.user.id,
        status: OrderStatus.NEXT
    });

    const order = new OrderModel({...orderRequest,user: req.user.id});
    await order.save();
    res.send(order);
})
)
export default router;