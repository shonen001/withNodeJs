const app = require('./app');

const PORT = process.env.PORT || 5000;
app.listen(PORT , ()=>{
    console.log(`server are  running port : ${PORT}`);
})