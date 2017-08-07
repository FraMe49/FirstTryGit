bananas = [
    {
        'id': 1,
        'name': 'anana',
        'price': '10',
        'picture': 'http://freepngimg.com/download/banana/15-banana-png-image.png',
    },
    {
        'id': 2,
        'name': 'cnana',
        'price': '15',
        'picture': 'http://freepngimg.com/download/banana/15-banana-png-image.png',
    },
    {
        'id': 3,
        'name': 'dnana',
        'price': '30',
        'picture': 'http://freepngimg.com/download/banana/15-banana-png-image.png',
    },
]

function render_products(products) {
    for (var i = 0;i < products.length;i++) {
        var id = products[i].id;
        var name = products[i].name;
        var price = products[i].price;
        var picture = products[i].picture;

        var product = '<div>';
        product += '<img src=' + picture + '>';
        product += '<p>' + name + '</p>';
        product += '<p>' + price + '</p>';

        var rack = document.getElementById('rack');
        rack.innerHTML += product;
    }
}

var shoppingCart = {
    products: [],
    total: 0,
    sumTotal: function() {
        this.total = 0;
        for (var i = 0; i < this.products.length;i++) {
            this.total += Number(this.products[i].price);
        }
    },
    addProduct: function(product) {
        this.products.push(product);
    },
    addProducts: function(products) {
        for (var i = 0;i < products.length;i++) {
            this.addProduct(products[i]);
        }
    }
}

console.log(shoppingCart.products);
shoppingCart.addProducts(bananas);
console.log(shoppingCart.products);

console.log(shoppingCart.total);
shoppingCart.sumTotal();
console.log(shoppingCart.total);

render_products(bananas);
