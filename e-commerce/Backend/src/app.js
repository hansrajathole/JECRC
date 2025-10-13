const express = require("express")
const userRouter = require("../src/routes/user.router")
const authRouter = require("../src/routes/auth.router")
const productRouter = require("./routes/product.router")
const app = express()
const cors = require("cors")
require("dotenv").config()



// middleware
app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors("*"))


// base url
app.use("/", authRouter)
app.use("/users",userRouter)
app.use("/products", productRouter)



module.exports = app