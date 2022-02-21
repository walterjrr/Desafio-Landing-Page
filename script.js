const productsContainer = document.querySelector(".products")

const buttonAddProducts = document.querySelectorAll(".more-products")

let hasError = false

function showToast() {
    if(hasError = false){
        let x = document.getElementById("snackbar");
        x.className = "show";
        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
    }else{
        return ''
    }
}

let page = 2
buttonAddProducts.onclick = function(){
    page++
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
                    <button>Comprar</button>
                </div>    
            </div>
        `
        ).join('')
        productsContainer.innerHTML += list_products
    })
    
})

let formulario = document.querySelector("#form-cadastro")

formulario.onsubmit = function(event){
    event.preventDefault()

    let inputNome = document.forms['form-cadastro']['name']
    let inputEmail = document.forms['form-cadastro']['email']
    let inputCpf = document.forms['form-cadastro']['cpf']

    if(!inputNome.value){
        inputNome.classList.add('inputError')
        !hasError
    }else{
        inputNome.classList.remove('inputError')
        hasError = false
    }
    
    if(!inputEmail.value){
        inputEmail.classList.add('inputError')
        !hasError
    }else{
        inputEmail.classList.remove('inputError')
        !hasError
    }

    if(!inputCpf.value){
        inputCpf.classList.add('inputError')
        !hasError
    }else{
        inputCpf.classList.remove('inputError')
        !hasError
    }
}







