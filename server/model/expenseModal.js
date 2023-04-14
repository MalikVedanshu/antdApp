import mongoose from "mongoose";
const { Schema } = mongoose;

const Expenseschema = new Schema({
    expense: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    coment: {
        type: String,
        default: "NA"
    }
})

let Expensemodal = mongoose.model('expenses', Expenseschema);
export default Expensemodal;

