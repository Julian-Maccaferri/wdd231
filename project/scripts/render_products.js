(() => {
  const grid = document.getElementById('productGrid');
  if (!grid) return;

  const money = new Intl.NumberFormat(undefined, { style: 'currency', currency: 'USD' });

  function render(products) {
    grid.innerHTML = '';
    if (!Array.isArray(products) || products.length === 0) {
      grid.innerHTML = '<p role="status">No products available.</p>';
      return;
    }

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
      const rating = typeof p.rating === 'number' ? p.rating.toFixed(1) : 'N/A';
      meta.textContent = `${p.category} • Rating: ${rating} ★`;

      const desc = document.createElement('p');
      desc.textContent = p.description || '';

      const price = document.createElement('p');
      price.style.fontWeight = '600';
      price.textContent = money.format(p.price || 0);

      const btn = document.createElement('button');
      const inStock = p.inStock !== false; // default true
      btn.type = 'button';
      btn.textContent = inStock ? 'Add to Cart' : 'Out of Stock';
      btn.disabled = !inStock;
      btn.addEventListener('click', () => {
        if (window.CartAPI?.addItem) {
          window.CartAPI.addItem({ id: p.id, name: p.name, price: p.price, image: p.image });
          btn.textContent = 'Added!';
          setTimeout(() => (btn.textContent = 'Add to Cart'), 800);
        } else {
          alert(`${p.name} added to cart`);
        }
      });

      card.append(img, title, meta, desc, price, btn);
      grid.appendChild(card);
    });
  }

  async function loadProducts(url) {
    grid.dataset.state = 'loading';
    grid.innerHTML = '<p>Loading products…</p>';

    try {
      const res = await fetch(url, { headers: { Accept: 'application/json' } });
      if (!res.ok) {
        throw new Error(`HTTP ${res.status} ${res.statusText}`);
      }

      let data;
      try {
        data = await res.json();
      } catch (parseErr) {
        throw new Error('Failed to parse JSON response');
      }

      if (!Array.isArray(data)) {
        throw new Error('Unexpected data shape (expected an array)');
      }

      render(data);
      grid.dataset.state = 'loaded';
    } catch (err) {
      console.error('Failed to load products:', err);
      grid.dataset.state = 'error';
      grid.innerHTML = '<p role="alert">Sorry, products could not be loaded. Showing a limited list.</p>';

      // Fallback minimal dataset to keep the page functional
      render([
        { id: 1, name: 'Whey Protein Isolate', category: 'Protein', price: 39.99, rating: 4.7, inStock: true, image: 'images/whey-protein.webp', description: 'High-purity whey isolate.' },
        { id: 2, name: 'Creatine Monohydrate', category: 'Creatine', price: 19.99, rating: 4.8, inStock: true, image: 'images/creatine.webp', description: 'Strength and power support.' },
        { id: 3, name: 'Fish Oil 1000 mg', category: 'Omega-3', price: 14.99, rating: 4.4, inStock: true, image: 'images/fish-oil.webp', description: 'EPA/DHA for heart and joints.' }
      ]);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    loadProducts('data/products.json');
  });
})();