const express = require("express")
const router = express.Router()
const protected = require("../middleware/protected")
const productControllers = require("../controllers/product.controller")



router.post("/create", protected, productControllers.CreateController )
router.get("/detail/:productId", protected , productControllers.getProductDataController)
router.patch("/update/:productId", protected , productControllers.UpdateController)
router.delete("/delete/:productId", protected , productControllers.deleteController)



module.exports = router