const express = require('express');
const productSchema = require("../models/product");

const router = express.Router();

//create product
router.post("/product",(req, res)=>{

    console.log(req.body);
    const product = productSchema(req.body);
    product
    .save()
    .then((data)=> res.json(data))
    .catch((error) => res.json({ message: error}));
});

//get all
router.get('/product',(req, res)=>{
    productSchema
    .find()
    .then((data)=> res.json(data))
    .catch((error) => res.json({ message: error}));
});

//get by Id
router.get('/product/:id',(req, res)=>{
    const {id} = req.params;
    productSchema
    .findById(id)
    .then((data)=> res.json(data))
    .catch((error) => res.json({ message: error}));
});

//update product
router.put('/product/:id',(req, res)=>{
    const {id} = req.params;
    const {name, price} = req.body;

    productSchema
    .updateOne({_id: id}, { $set:{name, price} })
    .then((data)=> res.json(data))
    .catch((error) => res.json({ message: error}));
});


//delete product
router.delete('/product/:id',(req, res)=>{
    const {id} = req.params;
    productSchema
    .remove({_id: id})
    .then((data)=> res.json(data))
    .catch((error) => res.json({ message: error}));
});


module.exports = router;