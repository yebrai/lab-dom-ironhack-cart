// ITERATION 1

function updateSubtotal(product) {
  //console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  let subtotalPrice = quantity.value * price.innerText
 // console.log(subtotalPrice)
  let subtotalSpan = product.querySelector(".subtotal span")
  subtotalSpan.innerHTML = subtotalPrice
  return subtotalPrice
}

function calculateAll() {

  let allProducts = document.querySelectorAll(".product")
  let sum = 0
  allProducts.forEach((eachProduct) => {
    sum += updateSubtotal(eachProduct)

  })

  // ITERATION 3

  let totalValue = document.querySelector("#total-value span")
  totalValue.innerHTML = sum 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  target.parentNode.parentNode.remove()
  console.log(target.parentNode.parentNode)
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);
  let removeButtons = document.querySelector(".btn-remove");
  removeButtons.addEventListener("click", removeProduct)
  


  //... your code goes here
});
