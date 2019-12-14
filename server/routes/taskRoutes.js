var express = require('express');
const app = express();

app.get('/tasks/all',(req, res)=>{
    res.status(200).json('All tasks in the database');
});

app.get('/tasks/:id', (req,res)=>{
    res.status(200).json(`Task with id:${req.params.id} `);
})

module.exports = app;