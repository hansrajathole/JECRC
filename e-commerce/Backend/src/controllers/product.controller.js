const productModel = require("../models/product.model");




module.exports.CreateController = async (req,res)=>{
    try {
        
        const {title , description , image , price ,category} = req.body

        if(!title || !description || !image || !price || !category){
            return res.status(400).json({message : "all field are required"})
        }

        const product = await productModel.create({
           title,
           description,
           image,
           price,
           category
        })

        res.status(201).json({message : "product created successfully"})
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
                
    }
}

module.exports.getProductDataController = async (req ,res) => {
    try {
        const productId = req.params.productId

        const product = await productModel.findById(productId)

        if(!product){
            return res.status(400).json({message : "product data not found"})
        }

        res.status(200).json({message : "product data found" , product})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
         
    }
}


module.exports.UpdateController = async (req ,res) => {
    try {
        const productId = req.params.productId

        const {title , description , image , price ,category} = req.body

        const product = await productModel.findById(productId)

        product.title = title || product.title
        product.description = description || product.description
        product.image = image || product.image
        product.price = price || product.price
        product.category = category || product.category

        await product.save()

        res.status(200).json({message : "product updated successfully", product})


    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
        
    }
}


module.exports.deleteController = async (req ,res) => {
    try {
        const productId = req.params.productId

        await productModel.findByIdAndDelete(productId)

        res.status(200).json({message : "product deleted successfully"})

    } catch (error) {
        console.log(error.message);
        res.status(500).json({message :"internal server error", error :error.message })
       
    }
}



