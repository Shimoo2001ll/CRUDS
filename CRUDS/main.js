//declare theinputs
let inp = document.getElementsByTagName('input')
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
let products;
if (localStorage.products != '') {
    products = JSON.parse(localStorage.products)
} else {

    products = []
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
            //  save to local storage
        localStorage.setItem('products', JSON.stringify(products))
        clearData()
        showData()
    }
    //cleare date
function clearData() {
    title.value = ''
    price.value = ''
    discouunt.value = ''
    taxes.value = ''
    ads.value = ''
    count.value = ''
    category.value = ''
    total.innerHTML = ''
    total.classList.remove('result')

}

//  read the dataand display it in html
function showData() {
    let table = ''
    for (let i = 0; i < products.length; i++) {
        // table = products[i]
        //     // console.log(table)
        table += ` 
                <tr>
                <td>${i} </td>
                <td>${products[i].title}</td>
                <td>${products[i].price}</td>
                <td>${products[i].taxes}</td>
                <td>${products[i].ads}</td>
                <td>${products[i].discouunt}</td>
                <td>${products[i].count}</td>
                <td>${products[i].category}</td>
                <td><button class="btn btn-info"> update</button></td>
                <td><button class="btn btn-danger"> delete</button></td>
            </tr>`
    }
    document.querySelector('.tableBody').innerHTML = table
}
showData()