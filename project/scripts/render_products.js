(() => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const currency = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' });

  function render(products) {
    grid.textContent = '';
    products.forEach(p => {
      const card = document.createElement('article');
      card.className = 'product-card';
      card.setAttribute('role', 'listitem');

      const img = document.createElement('img');
      img.src = p.image;
      img.alt = p.name;
      img.width = 150;
      img.height = 150;
      img.loading = 'lazy';

      const title = document.createElement('h3');
      title.textContent = p.name;

      const meta = document.createElement('p');
      meta.textContent = `${p.category} • Rating: ${p.rating.toFixed(1)} ★`;

      const desc = document.createElement('p');
      desc.textContent = p.description;

      const price = document.createElement('p');
      price.style.fontWeight = 'bold';
      price.textContent = currency.format(p.price);

      const btn = document.createElement('button');
      btn.type = 'button';
      btn.textContent = p.inStock ? 'Add to Cart' : 'Out of Stock';
      btn.disabled = !p.inStock;
      btn.addEventListener('click', () => {
        alert(`${p.name} added to cart`);
      });

      card.append(img, title, meta, desc, price, btn);
      grid.appendChild(card);
    });
  }

  fetch('data/products.json')
    .then(r => r.ok ? r.json() : Promise.reject(new Error('Failed to load products')))
    .then(render)
    .catch(() => {
        grid.textContent = 'Failed to load products. Please try again later.';
      render([
        { id: 1, name: 'Whey Protein Isolate', category: 'Protein', price: 39.99, rating: 4.7, inStock: true, image: 'images/whey-protein.webp', description: 'High-purity whey isolate.' },
        { id: 2, name: 'Creatine Monohydrate', category: 'Creatine', price: 19.99, rating: 4.8, inStock: true, image: 'images/creatine.webp', description: 'Creatine for strength and power.' },
        { id: 3, name: 'Fish Oil 1000 mg', category: 'Omega-3', price: 14.99, rating: 4.4, inStock: true, image: 'images/fish-oil.webp', description: 'EPA/DHA for heart and joints.' }
      ]);
    });
})();