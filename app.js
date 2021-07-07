const express = require('express');

const app = express();

app.get('/' ,(req,res)=>{
    res.status(200).json({
        tegr:2000,
        tegggr:2000,
        teggr:2000,
        tegdrgr:2000,
        tegehjur:2000,
        tegrdr:2000,
    });
})

module.exports = app;