import express from 'express';
import 'dotenv/config';
import { routes } from './src/routes';
import { connectMongodb } from './src/config/mongo.config';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 8980;

connectMongodb();
app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(routes);

app.listen(port, () => {
    console.log(`SERVER is running in port ${port}`);
});
