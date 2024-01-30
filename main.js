//declare theinputs
let inp = document.getElementsByTagName('input')
let title = document.querySelector('.title');
let price = document.querySelector('.price');
let taxes = document.querySelector('.tasx');
let ads = document.querySelector('.ads');
let discouunt = document.querySelector('.discouunt');
let total = document.querySelector('.total');
let count = document.querySelector('.count');
let category = document.querySelector('.category');
let create = document.querySelector('.create');
let mood = 'create';
let tem;
//function to get total price
function getTotal() {

    let result = ((+price.value + +taxes.value + +ads.value) - +discouunt.value);
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
if (localStorage.product != null) {
    products = JSON.parse(localStorage.product)
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
            //  save the product like te user enter in count box
        if (mood === 'create') {

            if (newProduct.count > 1) {
                for (let i = 0; i < newProduct.count; i++) {
                    products.push(newProduct)
                }
            } else {
                products.push(newProduct)
            }
        } else {
            products[tem] = newProduct
            mood = 'create'
            create.innerHTML = 'create'
            count.style.display = 'block'
                // alert("Updated successfully")

        }


        //  save to local storage
        localStorage.setItem('product', JSON.stringify(products))
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
                <td>${products[i].category}</td>
                <td><button onclick="updatData(${i})" class="btn btn-info m-2"> update</button></td>
                <td><button onclick="deleteProd(${i})" class="btn btn-danger m-2"> delete</button></td>
            </tr>`
    }
    document.querySelector('.tableBody').innerHTML = table;
    if (products.length > 0) { document.querySelector('.deleteAll').innerHTML = `<button onclick="deleteAll()" class="btn btn-danger m-2 p-2 w-100 text-capitalize">
    delete all(${products.length})
    </button>` } else {
        document.querySelector('.deleteAll').innerHTML = ''
    }
}
showData()

//  delete btn
function deleteProd(i) {
    products.splice(i, 1)
    localStorage.product = JSON.stringify(products)
    showData()

}
// delet all data
function deleteAll() {
    localStorage.clear()
    products.splice(0)
    showData()

}
//  update the data

function updatData(i) {
    title.value = products[i].title;
    price.value = products[i].price;
    taxes.value = products[i].taxes;
    ads.value = products[i].ads;
    discouunt.value = products[i].discouunt;
    category.value = products[i].category;
    getTotal();
    create.innerHTML = 'update'
    mood = 'Update'
    count.style.display = 'none'
    tem = i;
    scroll({ top: 0, behavior: "smooth" })

}