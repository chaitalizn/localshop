
function setNewProductObject(){
    const product_name = document.querySelector('#product-add-name').value.trim();
    const description_text = document.querySelector('#description-add-text').value.trim();
  
    return {product_name, description_text};
}

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

document.querySelector('#add-product-btn').addEventListener('click', addNewProduct);