const path = require('path')
const producs = require('../models/products.models')
exports.getProducts = (req, res) => {
    res.sendFile(path.join(__dirname + '/../views/products.html'))
}

exports.saveProducts = (req, res) => {
    const name = req.body.name
    const price = req.body.price

    const product = {
        name,
        price
    }

    producs.push(product)

    res.status(201).json({
        status : true,
        producs
    })

}