let shopIteamData = [
    {
        id: "1",
        name: "Casual Shirts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 45,
        img: "/images/img-1.jpg",
    },
    {
        id: "2",
        name: "Office Shirts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 60,
        img: "/images/img-2.jpg",
    },
    {
        id: "3",
        name: "T Shirts",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 25,
        img: "/images/img-3.jpg",
    },
    {
        id: "4",
        name: "Mensl Suit",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing.",
        price: 100,
        img: "/images/img-4.jpg",
    }
]




let shop = document.getElementById('shop')

let cretaeShop = () => (shop.innerHTML = shopIteamData.map(x => {
    return (`<div class="iteam">
    <img width="216" src=${x.img} alt="">
    <div class="details">
        <h3>${x.name}</h3>
        <p>${x.desc}</p>
        <div class="price-quantity">
            <h3>$ ${x.price}</h3>
            <div class="button">
                <i class="bi bi-dash-lg"></i>
                <div class="quantity">0</div>
                <i class="bi bi-plus-lg"></i>
            </div>
        </div>
    </div>
</div>`)
}).join("")
);

cretaeShop();


