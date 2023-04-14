import express from 'express';
const app = express();
const port = 5000;
import expenseRoute from './controllers/expenseRoute.js';

app.use(express.json());
app.use('/expenses', expenseRoute);

import './utilities/dbConnect.js';

app.get('/', async (req,res) => {
    try {
        res.status(200).json({msg: "This is home route"})
    } 
    catch (error) {
        res.status(500).json({error: "Internal server error."});
    }
    
})

app.listen(port, () => {
    console.log('App is running on port :', port);
})

