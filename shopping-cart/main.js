let shopIteamData = [
    {
        id: "1",
        name: "Casual Shirts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 45,
        img: "./images/img-1.jpg",
    },
    {
        id: "2",
        name: "Office Shirts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 60,
        img: "./images/img-2.jpg",
    },
    {
        id: "3",
        name: "T Shirts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 25,
        img: "./images/img-3.jpg",
    },
    {
        id: "4",
        name: "Mensl Suit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 100,
        img: "./images/img-4.jpg",
    }
]

let basket = JSON.parse(localStorage.getItem("data")) || [];
let shop = document.getElementById('shop');


//Product Cards - define parent elelement , then inject iteams using inerHtml
let cretaeShop = () => (shop.innerHTML = shopIteamData.map(x => { // array mapping
    let { id, name, desc, price, img } = x; //array destructring
    let search = basket.find((x) => x.id === id) || [];
    return (
        `<div id="product-id-${id}" class="iteam">
    <img width="216" src=${x.img} alt="">
    <div class="details">
        <h3>${name}</h3>
        <p>${desc}</p>
        <div class="price-quantity">
            <h3>$ ${price}</h3>
            <div class="button">
                <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
                <div id=${id} class="quantity">
                ${search.iteam === undefined ? 0 : search.iteam}
                </div>
                <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>
</div>`)
}).join("")
);

cretaeShop();

//Increment Function - for total iteam add to cart 
let increment = (id) => {
    let selectId = id;
    let search = basket.find(x => x.id === selectId);

    if (search === undefined) {
        basket.push({
            id: selectId,
            iteam: 1,
        });
    } else {
        search.iteam += 1;

    }

    //save data to local storage 
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectId)
};

//Decrement Function - for iteams amount remove from cart
let decrement = (id) => {
    let selectId = id;
    let search = basket.find(x => x.id === selectId);

    if (search.iteam === 0) return;
    else {
        search.iteam -= 1;
    }
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectId)

};

//update function - update iteam for add / remove iteams
let update = (id) => {

    let search = basket.find(x => x.id === id);
    document.getElementById(id).innerHTML = search.iteam;

    calculation();
}

//claculation total add/remove iteams in the cart 
let calculation = () => {
    let cartIcon = document.getElementById('cartAmount')
    cartIcon.innerHTML = basket.map(x => x.iteam).reduce((x, y) => x + y, 0)
}

calculation();
