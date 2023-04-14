import express from 'express';
const app = express();
const port = 5000;
app.use(express.json());

app.get('/', (req,res) => {
    res.send(200).json({msg: "This is home page."});
})

app.listen(port, () => {
    console.log('App is running on port :', port);
})

