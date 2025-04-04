// Fonction pour charger le panier et l'afficher
function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    let grandTotal = 0;

    // Réinitialiser l'affichage
    cartItemsContainer.innerHTML = '';

    // Ajouter chaque produit au tableau
    cart.forEach(item => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${item.name}</td>
            <td>${item.price.toFixed(2)} €</td>
        `;
        cartItemsContainer.appendChild(row);
        grandTotal += item.price;
    });

    // Mettre à jour le total
    document.getElementById('grand-total').textContent = `Total : ${grandTotal.toFixed(2)} €`;
}

// Fonction pour ajouter un produit au panier
function addToCart(name, price) {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: name, price: price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${name} a été ajouté au panier pour ${price.toFixed(2)} € !`);
    loadCart(); // Met à jour le panier affiché
}

// Fonction pour passer la commande
function checkout() {
    if (confirm("Êtes-vous sûr de vouloir passer la commande ?")) {
        alert("Merci pour votre commande !");
        localStorage.clear();
        window.location.href = 'index.html'; // Redirection après la commande
    }
}

// Charger le panier lorsque la page est chargée
window.onload = loadCart;
function addToCartWithQuantity() {
    // Récupérer la quantité sélectionnée
    const quantity = parseInt(document.getElementById('quantity').value);
    const productName = 'Perceuse Électrique';
    const productPrice = 49.99;
    const totalPrice = productPrice * quantity;

    // Ajouter au panier
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: `${productName} x${quantity}`, price: totalPrice });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${quantity} unité(s) de ${productName} ont été ajoutées au panier pour ${totalPrice.toFixed(2)} € !`);
}

function addToCartWithQuantity() {
    console.log("La fonction addToCartWithQuantity a été appelée."); // Vérification
    const quantity = parseInt(document.getElementById('quantity').value);
    if (!quantity) {
        console.error("La quantité n'a pas pu être récupérée.");
        return;
    }
    console.log("Quantité sélectionnée :", quantity);

    const productName = 'Perceuse Électrique';
    const productPrice = 49.99;
    const totalPrice = productPrice * quantity;

    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ name: `${productName} x${quantity}`, price: totalPrice });
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${quantity} unité(s) de ${productName} ont été ajoutées au panier pour ${totalPrice.toFixed(2)} € !`);
}