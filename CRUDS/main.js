//declare theinputs
let title = document.querySelector('.title');
let price = document.querySelector('.price');
let taxes = document.querySelector('.tasx');
let ads = document.querySelector('.ads');
let discouunt = document.querySelector('.discouunt');
let total = document.querySelector('.total')
let count = document.querySelector('.count')
let category = document.querySelector('.category')
let create = document.querySelector('.create')

//function to get total price
function getTotal() {

    let result = ((+price.value + +taxes.value + +ads.value) - +discouunt.value)
    if (price.value !== "") {
        total.innerHTML = result
        total.classList.add('result')
    } else {
        total.innerHTML = ''
        total.classList.remove('result')
    }

}
//function to create a product
if (localStorage.products != '') {
    products = JSON.parse(localStorage.products)
} else {

    let products = []
}
create.onclick = function() {
    let newProduct = {
        title: title.value,
        price: price.value,
        taxes: taxes.value,
        ads: ads.value,
        discouunt: discouunt.value,
        count: count.value,
        category: category.value,


    }
    products.push(newProduct)
    localStorage.setItem('products', JSON.stringify(products))

}