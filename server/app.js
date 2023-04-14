import express from 'express';
const app = express();
const port = 5000;
import expenseRoute from './controllers/expenseRoute.js';

app.use(express.json());
app.use('/expenses', expenseRoute);

import './utilities/dbConnect.js';

app.listen(port, () => {
    console.log('App is running on port :', port);
})

