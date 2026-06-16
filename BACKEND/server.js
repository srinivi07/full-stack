const express = require('express');

const app = express();
const connectDB = require("./config/db")
const todo = require('./model/todo')
const cors = require('cors')
app.use(cors())
connectDB();

app.use(express.json());
app.get('/',async (req,res) => {
    try{
        const todos = await todo.find();
        res.json(todos);
    }
    catch(err) {
        res.send(err);
    }
    
})

app.post('/',async (req,res)=>{
    try{
        const task = await todo.create(req.body);
        res.status(201).json(task)
    }catch(err){
        res.status(500).json(err)
    }
        })

app.put('/:id', async(req,res)=>{
    try{
        const updatedtodo = await todo.findByIdAndUpdate(req.params.id,req.body,{new:true})
    res.status(200).json(updatedtodo);
}catch(err){
    res.status(500).json(err);
}
})

app.delete('/:d',async(req,res)=>{
    try{
        await todo.findByIdAndDelete(req.params.id);
        res.status(200).json({"message":"task deleted succesfully"}) }
        catch(err){
            res.status(500).send(err);
        }
})

app.listen(3000,()=>{
    console.log('server running on port http://localhost:3000');
})