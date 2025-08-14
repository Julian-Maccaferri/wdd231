export function getCart() {
    return JSON.parse(localStorage.getItem('cart') || '[]');
}

export function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function addToCart(product) {
    let cart = getCart();
    const found = cart.find(item => item.id === product.id);
    if (found) {
        found.qty += 1;
    } else {
        cart.push({ ...product, qty: 1 });
    }
    saveCart(cart);
}

export function removeFromCart(id) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== id);
    saveCart(cart);
}

export function getCartTotal() {
    return getCart().reduce((sum, item) => sum + item.price * item.qty, 0);
}