let productDetails = [];

let pdtName = document.querySelector(".pdtName");
let price = document.querySelector(".price");

let itemAdded = document.querySelector(".itemAdded");
let priceCal = document.querySelector(".priceCal");



function addToCart() {
    let oldDiv = document.querySelector(".itemDiv")
    let newDiv = oldDiv.cloneNode(true);

    // console.log(newDiv);

    //product item
    /*  let itemName = itemAdded.nextElementSibling.innerHTML;
    //console.log(itemName);
    // newDiv.append(itemName);
  newDiv.append(itemName); */



    //product price addition
    let priceAdd = document.createElement('p');
    priceAdd.innerHTML = price.innerHTML;
    newDiv.append(priceAdd);

    // console.log(newDiv);


}