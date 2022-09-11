const express = require('express');
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./routes/product");

const app = express();
const port = process.env.PORT|3000;

//middleware
app.use(express.json());
app.use('/api', productRoutes);


app.get('/', (req, res) => {
    res.send('bienvenido')
});

//mondodb connect
mongoose.connect(process.env.MONGODB_URI)
.then(()=> console.log("conectado a la bd"))
.catch((error) => console.log(error));

app.listen(port, ()=>
    console.log("server listening on port", port)
);