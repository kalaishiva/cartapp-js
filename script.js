let productDetails = [];

let pdtName = document.querySelector(".pdtName");
// let price = document.querySelector(".price");

//let itemAdded = document.querySelector(".itemAdded");
let priceCal = document.querySelector(".priceCal");
//console.log(priceCal.innerHTML);


let itemDivContainer = document.querySelector(".itemDivContainer");

let buttonCart = document.querySelectorAll('.buttonCart');
buttonCart.forEach((button) => {
    button.addEventListener('click', addToCart)

});

function addToCart(event) {
    let division = event.target.parentElement.parentElement.parentElement;
    let pdtName = division.children[1].children[0];
    let price = division.children[4].children[1];

    let subtotal = priceCal.innerHTML;
    let itemPrice;

    //remove $ from the value
    subtotal = subtotal.substring(1);

    //Replace comma with Empty character
    subtotal = subtotal.replace(/,/g, "");

    subtotal = parseInt(subtotal);

    let itemDiv = document.querySelector('.itemDiv');
    let cloneItemDiv = itemDiv.cloneNode(true);

    itemDivContainer.append(cloneItemDiv);

    cloneItemDiv.children[0].innerText = pdtName.innerHTML;
    cloneItemDiv.children[1].innerText = price.innerHTML;

    itemPrice = price.innerHTML.substring(1);

    itemPrice = itemPrice.replace(/,/g, "");



    itemPrice = parseInt(itemPrice);


    subtotal = subtotal + itemPrice;

    // Add $ and comma into the number


    priceCal.innerHTML = "$" + subtotal.toLocaleString();

}