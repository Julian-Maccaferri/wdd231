export async function fetchProducts() {
    try {
        const response = await fetch('data/products.json');
        if (!response.ok) throw new Error('Network response was not ok');
        const products = await response.json();
        return products;
    } catch (error) {
        console.error('Fetch error:', error);
        return [];
    }
}