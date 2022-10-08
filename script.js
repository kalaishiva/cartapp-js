let productDetails = [];

let pdtName = document.querySelector(".pdtName");
// let price = document.querySelector(".price");

//let itemAdded = document.querySelector(".itemAdded");
//let priceCal = document.querySelector(".priceCal");
let itemDivContainer = document.querySelector(".itemDivContainer");

let buttonCart = document.querySelector('.buttonCart');
buttonCart.addEventListener('click', addToCart)

function addToCart(event) {
    let division = event.target.parentElement.parentElement.parentElement;
    let pdtName = division.children[1].children[0];
    let price = division.children[4].children[1];
    console.log(price);

    let itemDiv = document.querySelector('.itemDiv');
    let cloneItemDiv = itemDiv.cloneNode(true);

    itemDivContainer.append(cloneItemDiv);

    cloneItemDiv.children[0].innerText = pdtName.innerHTML;
    cloneItemDiv.children[1].innerText = price.innerHTML;


}