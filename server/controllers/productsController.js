const userModel = require("../models/userModel");
const UserModel = require("../models/userModel");
const bcrypt = require("bcrypt");

        // @define:     getAllProducts
        // @ route:     /api/products/
        // @ privacy:   protected
        // @ method:    GET
        const getAllProducts = async (req,res) => {
        res.json({message: "get All Products!" });
        };
    
        // @ define:    get single product
        // @ route:     /api/products/
        // @ privacy:   protected
        // @ method:    GET
        const getSingleProduct = async (req,res) => {
            res.json({message: "get single product!" });
        };
    
        // @ define:    add product
        // @ route:     /api/products/
        // @ privacy:   protected
        // @ method:    POST
        const addProduct = async (req,res) => 
        {
            const { first_name, last_name, password, phone, email } = req.body;

    try {
        // check if email already exists
        const foundUser = await UserModel.find({email: email });
        

        //if user found
        if(!foundUser) {
           res.status(400).json({message: "User already registered"});
           return;
        }

        // if not found, create a new user

        // create a salt
        const salt = 10;
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser  = await UserModel.create({
            first_name: first_name,
            last_name: last_name,
            phone: phone,
            email: email,
            password: hashedPassword,
        });

    //if user not created successfully
    if(!newUser) {
        res.status(400).json({ message: "Unable to create user" });
    }

    // response to front-end
    res.status(201).json ({ message: "User created successfully!", data: newUser });

    } catch (error) {
       res.status(500).json({ message: error.message});
       throw new Error(`Internal server error: ${error} `);
    }
            res.json({message: "add product!" });
        };
    
        // @ define:    edit product
        // @ route:     /api/products/
        // @ privacy:   protected
        // @ Method:    PUT
        const editProduct = async (req,res) => {
            res.json({message: "edit product!" });
        };
    
        // @ define:    delete product
        // @ route:     /api/products/:id
        // @ privacy:   protected
        // @ method:    DELETE
        const deleteProduct = async (req,res) => {
            res.json({message: "delete product!" });
        };
    
        module.exports = { 
        getAllProducts, 
        getSingleProduct,
        addProduct,
        editProduct,
        deleteProduct };