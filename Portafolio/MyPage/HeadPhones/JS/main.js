const btnCart = document.querySelector('.conteiner-cart-icon')
const containerCartProducts = document.querySelector('.container-cart-products')

btnCart.addEventListener('click', () => {
    containerCartProducts.classList.toggle('hidden-cart')
})

/* VARIABLES */

const cartInfo = document.querySelector('.cart-product')
const rowProduct = document.querySelector('.row-product')

const productList = document.querySelector('.produccion')

let allProducts = [];

const valorTotal = document.querySelector('.total-pagar')

const countProducts = document.querySelector('#contador-productos')


/* Another element */


productList.addEventListener('click', e => {

    if (e.target.classList.contains('add-cart')) {
        const product = e.target.parentElement;

        const infoProducts = {
            quatity: 1,
            title: product.querySelector('h2').textContent,
            price: product.querySelector('p').textContent,
        };

        const existe = allProducts.some(product => product.title === infoProducts.title)

        if (existe) {
            const products = allProducts.map(product =>{
                if(product.title === infoProducts.title){
                    product.quatity++;
                    return product
                }else{
                    return product
                }
            })
            allProducts = [...products]
        }else{
            allProducts = [...allProducts, infoProducts] 
        }

        

        showHTML();
    }
        
});

rowProduct.addEventListener('click', e => {
    if(e.target.classList.contains('icon-close')){
        const product = e.target.parentElement;
        const title = product.querySelector('p').textContent;

        allProducts = allProducts.filter ( product => product.title != title)
    }
    showHTML();
});

const showHTML = () => {
    /* LIMPIAR HTML */

    rowProduct.innerHTML = '';

    let total = 0;
    let totalOfProducts = 0;

    allProducts.forEach(product =>{
        const containerProduct = document.createElement('div')
        containerProduct.classList.add('cart-product')

        containerProduct.innerHTML = `
                            <div class="info-cart-product">
                                <span class="cantidad-producto-carrito">${product.quatity}</span>
                                <p class="titulo-producto-carrito">${product.title}</p>
                                <span class="precio-producto-carrito">${product.price}</span>
                            </div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="icon-close">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>`;


                        rowProduct.append(containerProduct);

        total = total + parseInt(product.quatity * product.price.slice(1))
                        totalOfProducts = totalOfProducts + product.quatity;

    });

    valorTotal.innerText = `$${total}`;
    countProducts.innerText = totalOfProducts;
    
}