const getAllProducts = (req,res) => {
    res.send("Fetching all products");
}

const addProduct = (req,res) => {
    res.send("Adding a new product");
}

const getProductById = (req,res) => {
    let id = req.params.id;
    res.send("Fetching product with ID: "+id);
}

module.exports = {
    getAllProducts,
    getProductById,
    addProduct
}