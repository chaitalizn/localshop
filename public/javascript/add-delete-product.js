
function setNewProductObject(){
    const product_name = document.querySelector('#product-add-name').value.trim();
    const description_text = document.querySelector('#description-add-text').value.trim();
  
    return {product_name, description_text};
}

//Add a product to the database
async function addNewProduct(event){
    event.preventDefault();

    //Await the response to create new product
    const responseProduct = await fetch('/api/product', {
        method: 'Post',
        body: JSON.stringify(setNewProductObject()),
        headers: {'Content-Type': 'application/json'}
    });

    if (responseProduct.ok) {
        document.location.reload();
    } 
    else {
        alert(responseProduct.statusText);
    }
}

//Delete a product from the database
async function deleteProduct(event){
    event.preventDefault();

    if(event.target.matches(".delete-product-btn")){
        const product_id = event.target.dataset.id;

        //Await the response to delete product
        const responseDelete = await fetch(`/api/product/${product_id}`, {
            method: 'DELETE'
        });

        if (responseDelete.ok) {
            document.location.reload();
        } 
        else {
            alert(responseDelete.statusText);
        }
    }
}

document.querySelector('#add-product-btn').addEventListener('click', addNewProduct);
document.querySelector('#product-list').addEventListener('click', deleteProduct);