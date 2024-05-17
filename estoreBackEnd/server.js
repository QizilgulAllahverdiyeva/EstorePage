const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const mongoose = require('mongoose');
const { type } = require('os');

const app = express()
app.use(cors())
app.use(express.json())

dotenv.config();


app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const {Schema}=mongoose;

const productSchema = new Schema({
    img: {
        type: String,
        require: true
    },
    title: {
        type: String,
        require: true
    },
    price: {
        type: Number,
        require: true
    }
});

const Product = mongoose.model("Product", productSchema)


app.post("/products", async(req,res)=>{
    try{
        const {img,price,title,category} = req.body
        const product = new Product({
            img,
            price,
            title,
            category
        })
       await product.save();
    res.status(201).send(product)

    }catch (error){
        res.status(500).json({
            message: error
        });

    }
});

app.get("/products", async(req, res)=>{
    try{
        const products = await Product.find({})
    res.status(200).send(products)

    }catch (error){
        res.status(500).json({
            message: error
        });

    }
});



app.delete("/products/:id", async(req, res)=>{
    try{
        const {id}=req.params
    const productDel = await Product.findByIdAndDelete(id)
    res.status(200).send(productDel)
    }catch(error){
        res.status(500).json({
            message: error
        });
    }
})


app.get("/products/:id", async(req, res)=>{
    try{
        const {id}=req.params
    const findProduct = await Product.findById(id)
    res.status(200).send(findProduct)
    }catch(error){
        res.status(500).json({
            message: error
        });
    }
})

app.put("/products/:id", async(req, res)=>{
    try{
        const {id}=req.params
        const {img,price,title, category} = req.body
    const product = await Product.findByIdAndUpdate(id,{
        img,
        price,
        title,
        category
    },
      {new:true});
      
    res.status(200).send(product)
    }catch(error){
        res.status(500).json({
            message: error
        });
    }
})

const PORT = process.env.PORT
const DB = process.env.DB_URL

mongoose.connect(DB)
  .then(() => console.log('Connected!'));
app.listen(PORT, ()=>console.log("Port is Active", PORT))