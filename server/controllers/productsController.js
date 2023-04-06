
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
        const addProduct = async (req,res) => {
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