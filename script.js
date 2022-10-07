let productDetails = [];

let pdtName = document.querySelector(".pdtName");
let price = document.querySelector(".price");
let itemAdded = document.querySelector(".itemAdded");
let priceCal = document.querySelector(".priceCal");


function addToCart() {
    //product item
    let itemName = document.createElement('p');
    itemName.innerHTML = pdtName.innerHTML;
    itemAdded.append(itemName);


    //product price addition
    let priceAdd = document.createElement('p');
    priceAdd.innerHTML = priceCal.innerHTML;
    itemAdded.append(priceAdd);

}