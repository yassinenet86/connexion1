// Fonction pour charger le panier et l'afficher
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let grandTotal = 0;

    // Réinitialisation de l'affichage
    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} €</td>
        `;
        cartItemsContainer.appendChild(row);
        grandTotal += item.price;
    });

    document.getElementById('grand-total').textContent = `Total : ${grandTotal.toFixed(2)} €`;
}

// Fonction pour ajouter un produit au panier
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} a été ajouté au panier pour ${price.toFixed(2)} € !`);
    loadCart(); // Recharge le panier pour afficher les nouvelles données
}

// Fonction pour finaliser la commande
function checkout() {
    if (confirm("Êtes-vous sûr de vouloir passer la commande ?")) {
        alert("Merci pour votre commande !");
        localStorage.clear();
        window.location.href = 'index.html'; // Redirection après commande
    }
}

// Chargement initial du panier lorsque la page se charge
window.onload = loadCart;