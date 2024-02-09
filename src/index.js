import app from "./App.js";
import { config } from './config/config.js'
const port = config.port
// Path: index.js
app.listen(port, ()=>{
    try {
        console.log(`Server is running on port http://localhost:${port}`)
    }catch (e) {
        console.log(e)
    }
})