const productsContainer = document.querySelector(".products")

const buttonAddProducts = document.querySelector(".more-products")

let page = [0]
buttonAddProducts.onclick = function(){
    page.name = 2
}

console.log(page)
const url = `https://frontend-intern-challenge-api.iurykrieger.vercel.app/products?page=${page}`

fetch(url).then(function(res){
    res.json().then(function(data){
        let products = data.products

        const list_products = products.map((item) => `
            <div class="${item.id} list-products">
                <img src="${item.image}" width="100px">
                <div class="text-container">
                    <h1>${item.name}</h2>
                    <p>${item.description}</p>
                    <h3>De ${item.oldPrice}R$ </h3>
                    <h4>Para ${item.price}R$ </h4>
                    <h5>ou ${item.installments.count} Vezes de ${item.installments.value}R$ </h5>
                </div>    
                <button>Comprar</button>
            </div>
        `
        ).join('')
        productsContainer.innerHTML += list_products
    })
    
})


