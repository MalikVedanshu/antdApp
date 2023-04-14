import express from "express";
import Expensemodal from '../model/expenseModal.js';

const router = express.Router();
router.use(express.json());

router.get('/allexpenses', async (req,res) => {
    try {
        let allexpenses = await Expensemodal.find();
        res.status(200).json({data: allexpenses});
    } catch (error) {
        res.status(500).json({error: "Internal server error"});
    }
})

router.post('/addexpense', async (req,res) => {
    try {
        let myexpense = new Expensemodal(req.body);
        await myexpense.save()
        return res.status(200).json({msg: "Expense added."});
    }
    catch(error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
})

router.delete('/deleteexpense', async (req,res) => {
    try {
        // let id = req.body.id;
        let deleteExpense = await Expensemodal.findById(req.body.id);
        if(!deleteExpense) return res.status(400).json({msg: 'Invalid ID'})
        
        await Expensemodal.findByIdAndDelete(req.body.id);
        return res.status(200).json({msg: "Expense deleted successefully."})
    }
    catch (error) {
        console.log(error);
        res.status(500).json({error: "Internal server error"})
    }
})

export default router;