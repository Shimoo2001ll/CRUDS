//declare theinputs
let title = document.querySelector('.title');
let price = document.querySelector('.price');
let taxes = document.querySelector('.tasx');
let ads = document.querySelector('.ads');
let discouunt = document.querySelector('.discouunt');
let total = document.querySelector('.total')

//function to get total price
function getTotal() {

    let result = ((+price.value + +taxes.value + +ads.value) - +discouunt.value)
    if (price.value !== "") {
        total.innerHTML = result
        total.classList.add('result')
    }

}
// console.log('Done')
// console.log(price.value)