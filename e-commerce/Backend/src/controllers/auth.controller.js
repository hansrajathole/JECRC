const productModel = require("../models/product.model")

module.exports.indexController = async function (req, res) {
    try {


        const productData = await productModel.find()
        
        if(productData.length === 0){
            return res.status(200).json({message : "product Data Not Found"})
        }

        res.status(200).json({message : "product data found",productData })
    
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message : "internal server error" , error : error.message})
       
    }
}