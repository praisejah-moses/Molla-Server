import { router } from "../../init.module.js";

router.get("/", (_req,res)=> res.send('API RUNNING'));

export default router;