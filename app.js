import { app } from "./init.module.js";
import dbReady from './src/configs/database.config.js';
import index from './src/api/index.js'
import auth from './src/api/authentication/auth-routes/auth.routes.js'
import productRoute from './src/api/product/product.routes.js'
import categories from './src/api/category/category.routes.js'
import HandleErrors from "./src/middleware/error.middleware.js";
import AppError from "./src/utils/app.error.utils.js";

app.use(index)
app.use('/user',auth)
app.use('/categories',categories) 
app.use('/products',productRoute)
app.use(HandleErrors)


if (dbReady){
  app.listen(process.env.PORT, () => 
    console.log(`Server running 🎉`)
  )
}
