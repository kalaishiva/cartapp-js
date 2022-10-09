let productDetails = [];

let pdtName = document.querySelector(".pdtName");
let priceCal = document.querySelector(".priceCal");
let itemDivContainer = document.querySelector(".itemDivContainer");

let buttonCart = document.querySelectorAll('.buttonCart');
buttonCart.forEach((button) => {
    button.addEventListener('click', addToCart)
});

function addToCart(event) {
    let division = event.target.parentElement.parentElement.parentElement;
    let pdtName = division.children[1].children[0];
    let price = division.children[4].children[1];

    //subtotal price
    let subtotal = priceCal.innerHTML; //$0
    //remove $ from the value
    subtotal = subtotal.substring(1); // 0
    //Replace comma with Empty character
    subtotal = subtotal.replace(/,/g, ""); //remove comma
    subtotal = parseInt(subtotal);

    let itemPrice;
    //shipping price
    let shippingPrice = document.querySelector(".shippingPrice").innerHTML;
    shippingPrice = shippingPrice.substring(1);
    shippingPrice = parseInt(shippingPrice);
    //console.log(shippingPrice);

    //tax price
    let taxPrice = document.querySelector(".taxPrice").innerHTML;
    taxPrice = taxPrice.substring(1);
    taxPrice = parseInt(taxPrice);
    //console.log(taxPrice);

    //total price
    let totalPrice = document.querySelector(".totalPrice");
    let addingPrice = totalPrice.innerHTML;
    addingPrice = addingPrice.substring(1);
    addingPrice = addingPrice.replace(/,/g, "");
    addingPrice = parseInt(addingPrice);

    //clone the div and add to summary side
    let itemDiv = document.querySelector('.itemDiv');
    let cloneItemDiv = itemDiv.cloneNode(true);

    itemDivContainer.append(cloneItemDiv);

    cloneItemDiv.children[0].innerText = pdtName.innerHTML;
    cloneItemDiv.children[1].innerText = price.innerHTML;


    //number of item selected
    itemPrice = price.innerHTML.substring(1);
    itemPrice = itemPrice.replace(/,/g, "");
    itemPrice = parseInt(itemPrice);

    //add selected item price
    subtotal = subtotal + itemPrice;
    console.log(subtotal)

    //adding shipping price and tax price to get total price
    addingPrice = subtotal + shippingPrice + taxPrice;
    console.log(addingPrice);

    //subtotal price
    // Add $ and comma into the number
    priceCal.innerHTML = "$" + subtotal.toLocaleString();


    //total price
    totalPrice.innerHTML = "$" + addingPrice.toLocaleString();


}