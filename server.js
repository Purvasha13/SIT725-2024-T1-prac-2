var express = require('express');
var app = express();
var PORT = 3000;

app.get('/addnumbers', (req, res) => {
    var { num1, num2 } = req.query;
    var sum = Number(num1) + Number(num2);
    
    if ((num1) && (num2) != null) {
        res.status(200).json({ data: sum, message: "success",statuscode: 200 });
    } else {
        res.status(400).json({ data: "null",message: "Invalid numbers provided",statuscode: 400 });
    }});

app.get('/subnumbers', (req, res) => {
    var { num1, num2 } = req.query;
    var sub = Number(num1) - Number(num2);
        
    if ((num1) && (num2) != null) {
         res.status(200).json({ data: sub, message: "success",statuscode: 200 });
    } else {
        res.status(400).json({ data: "null",message: "Invalid numbers provided",statuscode: 400 });
    }});

app.listen(PORT, () => 
console.log(`Server running on port ${PORT}`));


