const express = require("express");
const productsRoute = express.Router();

// importing productsController
const { getAllProducts, getSingleProduct, addProduct, editProduct, deleteProduct } = require('../controllers/productsController');

// @ define:    get all products
// @ route:     /api/products/
// @ privacy:   protected
// @ method:    GET
   productsRoute.get("/", getAllProducts);

// @ define:     get single product
// @ route:      /api/products/:id
// @ privacy:    protected
// @ method:     GET
    productsRoute.get("/:id", getSingleProduct );

// @ define:    add product
// @ route:     /api/products/
// @ privacy:   protected
// @ method:    POST
    productsRoute.post("/", addProduct );

// @ define:    edit product
// @ route:     /api/products/:id
// @ privacy:   protected
// @ Method:    PUT
    productsRoute.put("/:id", editProduct );

// @ define:    delete product
// @ route:     /api/products/:id
// @ privacy:   protected
// @ method:    DELETE
   productsRoute.delete("/:id", deleteProduct );


module.exports = productsRoute;