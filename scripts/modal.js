export function showModal(product) {
    const modal = document.getElementById('product-modal');
    modal.querySelector('.modal-title').textContent = product.name;
    modal.querySelector('.modal-body').innerHTML = `
        <img src="${product.image}" alt="${product.name}" style="max-width:100%">
        <p>${product.description}</p>
        <p><strong>Brand:</strong> ${product.brand}</p>
        <p><strong>Category:</strong> ${product.category}</p>
        <p><strong>Price:</strong> $${product.price.toFixed(2)}</p>
    `;
    modal.classList.add('open');
}

export function closeModal() {
    document.getElementById('product-modal').classList.remove('open');
}