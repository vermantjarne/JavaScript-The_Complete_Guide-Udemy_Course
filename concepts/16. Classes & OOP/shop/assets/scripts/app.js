// const productList = {
//     products: [
//         new Product(
//             "Pillow",
//             "https://imperialrooms.co.uk/cdn/shop/files/Navy_bb053f48-86a8-43b8-a742-1bde9e1e9e00_1024x.png?v=1703315465",
//             "A soft pillow",
//             19.99
//         ),
//         new Product(
//             "Carpet",
//             "https://carpetcentre.com/cdn/shop/files/AR109247copy.webp?v=1752215062",
//             "A carpet you may or may not like",
//             89.99
//         )
//         // {
//         //     title: "Pillow",
//         //     imageUrl: "https://imperialrooms.co.uk/cdn/shop/files/Navy_bb053f48-86a8-43b8-a742-1bde9e1e9e00_1024x.png?v=1703315465",
//         //     description: "A soft pillow",
//         //     price: 19.99
//         // }
//     ],
//     render() {
//         const renderHook = document.getElementById("app");
//         const prodList = document.createElement("ul");
//         prodList.className = "product-list";
//         for (const prod of this.products) {
//             const prodEl = document.createElement("li");
//             prodEl.className = "product-item";
//             prodEl.innerHTML = `
//                 <div>
//                     <img src="${prod.imageUrl}" alt="${prod.title}" />
//                     <div className="product-item__content">
//                         <h2>${prod.title}</h2>
//                         <h3>\$${prod.price}</h3>
//                         <p>${prod.description}</p>
//                         <button>Add to cart</button>
//                     </div>
//                 </div>
//             `;
//             prodList.append(prodEl);
//         }
//         renderHook.append(prodList);
//     }
// };

// productList.render();

class Product {
    title = "DEFAULT";
    imageUrl;
    description;
    price;

    constructor(title, imageUrl, desc, price) {
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = desc;
        this.price = price;
    }
}

Array()

class ElementAttribute {
    constructor(name, value) {
        this.name = name;
        this.value = value;
    }
}

class Component {
    constructor(renderHookId, shouldRender = true) {
        this.hookId = renderHookId;
        if (shouldRender) {
            this.render();
        }
    }

    render() {

    }

    createRootElement(tag, cssClasses, attributes) {
        const rootElement = document.createElement(tag);
        if (cssClasses) {
            rootElement.className = cssClasses;
        }
        if (attributes && attributes.length > 0) {
            attributes.forEach((attribute) => {
                rootElement.setAttribute(attribute.name, attribute.value);
            });
        }
        document.getElementById(this.hookId).append(rootElement);
        return rootElement;
    }
}

class ShoppingCart extends Component {
    items = [];

    set cartItems(value) {
        this.items = value;
        this.totalOutput.innerHTML = `<h2>Total: \$${this.totalAmount.toFixed(2)}</h2>`;
    }

    get totalAmount() {
        const sum = this.items.reduce((previousValue, currentItem) => previousValue + currentItem.price, 0);
        return sum;
    }

    constructor(renderHookId) {
        super(renderHookId, false);
        this.orderProducts = () => {
            console.log("Ordering...");
            console.log(this.items);
        };
        this.render();
    }

    addProduct(product) {
        const updatedItems = [...this.items];
        updatedItems.push(product);
        this.cartItems = updatedItems;
    }
    
    // orderProducts() {
    //     console.log("Ordering...");
    //     console.log(this.items);
    // }
    
    orderProducts = () => {
        console.log("Ordering...");
        console.log(this.items);
    }

    render() {
        // const cartEl = document.createElement("section");
        // cartEl.className = "cart";

        const cartEl = this.createRootElement("section", "cart");
        cartEl.innerHTML = `
            <h2>Total: \$${0}</h2>
            <button>Order Now!</button>
        `;
        const orderButton = cartEl.querySelector("button");
        // orderButton.addEventListener("click", () => this.orderProducts());
        orderButton.addEventListener("click", this.orderProducts);
        this.totalOutput = cartEl.querySelector("h2");
    }
}

class ProductItem extends Component {
    constructor(product, renderHookId) {
        super(renderHookId, false);
        this.product = product;
        this.render();
    }

    addToCart() {
        // console.log("Adding product to cart...");
        // console.log(this.product);
        App.addProductToCart(this.product);
    }

    render() {
        const prodEl = this.createRootElement("li", "product-item");
        prodEl.innerHTML = `
            <div>
                <img src="${this.product.imageUrl}" alt="${this.product.title}" />
                <div className="product-item__content">
                    <h2>${this.product.title}</h2>
                    <h3>\$${this.product.price}</h3>
                    <p>${this.product.description}</p>
                    <button>Add to cart</button>
                </div>
            </div>
        `;
        const addCartButton = prodEl.querySelector("button");
        addCartButton.addEventListener("click", this.addToCart.bind(this));
    }
}

class ProductList extends Component {
    #products = [];

    constructor(renderHookId) {
        super(renderHookId, false);
        this.render();
        this.fetchProducts();
    }

    fetchProducts() {
        this.#products = [
            new Product(
                "Pillow",
                "https://imperialrooms.co.uk/cdn/shop/files/Navy_bb053f48-86a8-43b8-a742-1bde9e1e9e00_1024x.png?v=1703315465",
                "A soft pillow",
                19.99
            ),
            new Product(
                "Carpet",
                "https://carpetcentre.com/cdn/shop/files/AR109247copy.webp?v=1752215062",
                "A carpet you may or may not like",
                89.99
            )
        ];
        this.renderProducts();
    }

    renderProducts() {
        for (const prod of this.#products) {
            // const productItem = new ProductItem(prod, prodList.id);
            // productItem.render();
            new ProductItem(prod, "prod-list");
        }
    }

    render() {
        // const prodList = document.createElement("ul");
        // prodList.className = "product-list";
        // for (const prod of this.products) {
        //     const productItem = new ProductItem(prod);
        //     const prodEl = productItem.render();
        //     prodList.append(prodEl);
        // }
        // return prodList;
        this.createRootElement("ul", "product-list", [new ElementAttribute("id", "prod-list")]);
        if (this.#products && this.#products.length > 0) {
            this.renderProducts();
        }
    }
}

class Shop extends Component {
    constructor() {
        super();
    }

    render() {
        const renderHookId = "app";

        this.cart = new ShoppingCart(renderHookId);
        // this.cart.render();

        new ProductList(renderHookId);
        // const productList = new ProductList(renderHookId);
        // productList.render();

        // renderHook.append(cartEl);
        // renderHook.append(prodListEl);
    }
}

class App {
    static cart;

    static init() {
        const shop = new Shop();
        // shop.render();
        this.cart = shop.cart;
    }

    static addProductToCart(product) {
        this.cart.addProduct(product);
    }
}

App.init();