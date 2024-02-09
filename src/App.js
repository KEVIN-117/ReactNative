import express from 'express';
import { uploaderRouter } from './routes/image.route.js'
import cors from 'cors'
const app = express();

app.use(express.json())
app.use(cors())
app.get('/', (req, res) => {
    res.json({ message: 'Hello World'})
})

app.use('/api', uploaderRouter)
export default app;
