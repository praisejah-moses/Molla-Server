import { app } from "./init.module.js";
import dbReady from './src/configs/database.config.js';
import index from './src/api/index.js'
import auth from  './src/api/authentication/auth-routes/auth.routes.js'

app.use(index)
app.use('/user',auth) 

if (dbReady){
    app.listen(process.env.PORT, () => 
        console.log(`Server running 🎉`)
    )
}
