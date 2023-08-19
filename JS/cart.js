const closeCart = document.querySelector('.bx-window-close')
const cart = document.querySelector('.container-cart')
const openCart = document.querySelector('.cart-icon')

openCart.addEventListener('click', () => {
    cart.classList.toggle('open-cart')
})

closeCart.addEventListener('click', () => {
    cart.classList.toggle('open-cart')
})