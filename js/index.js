// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector(".price span");
  let quantity = product.querySelector(".quantity input");

  // console.log(price);
  // console.log(quantity);

  let subtotal = product.querySelector(".subtotal span");
  let subtotalValue = +price.innerText * +quantity.value;

  subtotal.innerText = subtotalValue;

  // console.log(subtotal);
  return subtotalValue;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.

  // const singleProduct = document.querySelector('.product');
  // updateSubtotal(singleProduct);

  // end of test

  // ITERATION 2

  let products = document.querySelectorAll(".product");
  // console.log(products[0]);

  // ITERATION 3
  let sum = 0;
  for (let product of products) {
    let subtotal = updateSubtotal(product);
    sum += subtotal;
  }

  let totalValue = document.querySelector("#total-value span");
  totalValue.innerText = sum;
  return sum;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);


}

// ITERATION 5

function createProduct() {

  let inputs = document.querySelectorAll(".create-product input");
  let name = inputs[0];
  let price = inputs[1];

  // console.log(name);



  let newRow = document.createElement("tr");
  newRow.appendChild(document.createElement("td"));

  // ok I'm giving up on this because this might not be the correct way...

  // console.log(newRow);


  // newRow.querySelector(".name span").innerText = name.value;
  // newRow.querySelector(".price span").innerText = price.value;

}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);


  // bonus: iteration 4 - remove product

  // const removeButtons = document.querySelectorAll(".btn-remove");
  // for (let button of removeButtons) {
  //   button.addEventListener("click", () => removeProduct);   // did I do something wrong here?
  // }


  // bonus: iteration 5 - create new product
  const createProductBtn = document.querySelector("#create");
  createProductBtn.addEventListener("click", createProduct);


});