import { fetchProducts } from './products.js';
import { addToCart } from './cart.js';
import { showModal, closeModal } from './modal.js';

document.addEventListener('DOMContentLoaded', async () => {
    const productList = document.querySelector('.product-list');
    const products = await fetchProducts();

    // Display at least 15 products
    productList.innerHTML = products.map(product => `
        <div class="product-card">
            <img src="${product.image}" alt="${product.name}">
            <h4>${product.name}</h4>
            <p>${product.description}</p>
            <p><strong>$${product.price.toFixed(2)}</strong></p>
            <button class="details-btn" data-id="${product.id}">Details</button>
            <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
        </div>
    `).join('');

    // Event delegation for buttons
    productList.addEventListener('click', e => {
        if (e.target.classList.contains('add-to-cart')) {
            const id = e.target.dataset.id;
            const product = products.find(p => p.id === id);
            addToCart(product);
            alert(`${product.name} added to cart!`);
        }
        if (e.target.classList.contains('details-btn')) {
            const id = e.target.dataset.id;
            const product = products.find(p => p.id === id);
            showModal(product);
        }
    });

    // Modal close
    document.getElementById('modal-close').addEventListener('click', closeModal);
});