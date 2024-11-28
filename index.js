const express = require("express")
const cors = require('cors')
const userRouter = require("./routes/users.route")
const productRouter = require('./routes/poducts.route')
const app = express();
const port = 3000


app.use(cors())
app.use(express.urlencoded({extended : true}))
// app.use(express.json())

app.use(userRouter)
app.use(productRouter)

app.use((req, res, next) => {
    res.status(404).json({
        message : "Resource not found"
    })
})

app.listen(port, () => {
    console.log("Server is Running http://localhost:" + port);
})