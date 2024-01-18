import { router } from "../../../init.module.js";
import { AddCategory, GetCategories } from "./category.controller.js";

router.post('/add',AddCategory)

router.get('/list',GetCategories);

export default router