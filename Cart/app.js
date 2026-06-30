let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'powder makeup brushes', 
        image: '1.PNG',
        price: 1200
    },
    {
        id: 2,
        name: 'huda HD Foundation',
        image: '2.PNG',
        price: 1200
    },
    {
        id: 3,
        name: 'Foundation',
        image: '3.jfif',
        price: 22000
    },
    {
        id: 4,
        name: 'EYE SHADOW',
        image: '4.jfif',
        price: 1230
    },
    {
        id: 5,
        name: 'HIGHLITER',
        image: '5.jfif',
        price: 3200
    },
    {
        id: 6,
        name: 'EYE LINER',
        image: '6.jfif',
        price: 1200
    },
    {
        id: 7,
        name: 'FACE WASH', 
        image: '7.jfif',
        price: 920
    }, {
        id: 8,
        name: 'MUSCARA', 
        image: '8.jfif',
        price: 800
    }, {
        id: 9,
        name: 'HIGH LITER', 
        image: '9.jfif',
        price: 10000
    },
    {
        id: 10,
        name: 'MAKEUP FIXER', 
        image: '10.jfif',
        price: 3000
    },
];
let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}
