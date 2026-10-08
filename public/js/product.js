const onSumbitHandler = (e) => {
    e.preventDefault();
    const product = e.target.productName.value;
    const obj = {
        "productName":product
    }
    axios.post("http://localhost:3030/api/products",obj).then(result => {
        console.log("Value returned from post request: "+result.data.value)
    })
}