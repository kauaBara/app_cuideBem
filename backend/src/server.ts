import express, { json, urlencoded } from 'express';
import Route from './routes/routes';

const app = express()
app.use(urlencoded({ extended: true }))
app.use(json())

app.use(Route)

app.listen(3000, () => console.log('Server is listening!'))