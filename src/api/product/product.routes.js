import { router } from "../../../init.module.js";
import { AddProduct, GetProduct } from "./product.controller.js";

router.post('/add',AddProduct)

router.get('/list',GetProduct);


export default router