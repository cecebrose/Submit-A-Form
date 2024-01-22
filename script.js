document.getElementById('myButton').addEventListener('click', function() {
    document.getElementById('output').innerText = 'Welcome!';
var query = '"Apps Script" stars:">=100"';
var url = 'https://api.github.com/search/repositories'
  + '?sort=stars'
  + '&q=' + encodeURIComponent(query);
var response = UrlFetchApp.fetch(url, {'muteHttpExceptions': true});
Logger.log(response);
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json());

// Sample data for products
const products = [
    { id: 1, name: 'Product 1', price: 19.99 },
    { id: 2, name: 'Product 2', price: 29.99 },
    // Add more products as needed
];

// Endpoint to get the list of products
app.get('/products', (req, res) => {
    res.json(products);
});

// Endpoint to process checkout
app.post('/checkout', (req, res) => {
    const { cart } = req.body;

    // Validate the cart
    if (!Array.isArray(cart) || cart.length === 0) {
        return res.status(400).json({ error: 'Invalid cart' });
    }

    // Calculate total amount
    const totalAmount = cart.reduce((total, item) => {
        const product = products.find(p => p.id === item.productId);
        if (product) {
            total += product.price * item.quantity;
        }
        return total;
    }, 0);

    // In a real-world scenario, you would integrate with a payment gateway here

    res.json({ success: true, totalAmount });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

});
