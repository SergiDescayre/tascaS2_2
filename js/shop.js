// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional

var products = [
    {
        id: 1,
        name: 'cooking oil',
        price: 10.5,
        type: 'grocery',
        image:"../images/oil.png",
        offer: {
            number: 3,
            percent: 20
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery',
        image:"../images/oil.png",
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        image:"../images/oil.png",
        offer: {
            number: 10,
            percent: 30
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        image:"../images/oil.png",
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        image:"../images/oil.png",
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        image:"../images/oil.png",
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        image:"../images/oil.png",
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        image:"../images/oil.png",
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        image:"../images/oil.png",
        type: 'clothes'
    }
]


// => Reminder, it's extremely important that you debug your code. 
// ** It will save you a lot of time and frustration!
// ** You'll understand the code better than with console.log(), and you'll also find errors faster. 
// ** Don't hesitate to seek help from your peers or your mentor if you still struggle with debugging.

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];
var total = 0;

const cleanTotalCart = () => {
    const totalPriceCart = document.getElementById("total_price")
    totalPriceCart.textContent = "0"
}

cleanTotalCart()

// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array
    const findOutCart = cart.some(prod => prod.id === id)
    if (!findOutCart) {
        const productToAdd = products.filter(prod => prod.id === id)
        const productWithQuantity = { ...productToAdd[0], quantity: 1, subtotalWithDiscount: 0 }
        cart.push(productWithQuantity)

    } else {
        cart.map(prod => {
            if (prod.id === id) {
                prod.quantity++
            }
        })
    }
    applyPromotionsCart()
    printCart()
    calculateTotal()
}

// Exercise 2
function cleanCart() {
    cart = []
    printCart()
    cleanTotalCart()
}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array
    let total = 0
    for (let i = 0; i < cart.length; i++) {
        if (cart[i].subtotalWithDiscount) {
            total += cart[i].subtotalWithDiscount
        } else {
            total += cart[i].price * cart[i].quantity
        }
    }
    return total
}

// Exercise 4
function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    cart.map(prod => {
        if (prod.offer && prod.offer.number === 3 && prod.quantity >= prod.offer.number) {
            prod.subtotalWithDiscount = (prod.price * prod.quantity) - (((prod.price * prod.quantity) * 20) / 100)
        }
        if (prod.offer && prod.offer.number === 10 && prod.quantity >= prod.offer.number) {
            prod.subtotalWithDiscount = (prod.price * prod.quantity) - (((prod.price * prod.quantity) * 30) / 100)
        }

    })

}

// Exercise 5
function printCart() {
    // Fill the shopping cart modal manipulating the shopping cart dom
    const mainCount = document.getElementById("count_product")
    const cartList = document.getElementById("cart_list")
    const totalPriceCart = document.getElementById("total_price")
    let totalPriceProduct = 0
    cartList.innerHTML = ''
    cart.map(prod => {
        if (prod.subtotalWithDiscount > 0) {
            totalPriceProduct = prod.subtotalWithDiscount
        } else {
            totalPriceProduct = prod.price * prod.quantity
        }
        cartList.innerHTML += `<tr>
        <th scope="row">${prod.name}</th>
        <td>${prod.price}</td>
        <td>${prod.quantity}</td>
        <td>${totalPriceProduct}</td>
        <td><button onClick="removeFromCart(${prod.id})" class="btn btn-outline-danger btn-sm"><i class="fa-solid fa-trash"></i></button></td>
        </tr>`

        totalPriceCart.textContent = calculateTotal()
    })

    mainCount.textContent = cart.length
}


// ** Nivell II **

// Exercise 7
function removeFromCart(id) {

    const removeProduct = (id) => {
        cart = cart.filter(prod => prod.id !== id)
    }
    cart.map(prod => {
        if (prod.quantity && prod.id === id && prod.quantity >= 1) {
            prod.quantity--
            if (prod.offer && prod.quantity <= prod.offer.number) {
                prod.subtotalWithDiscount = prod.quantity * prod.price
            }

            prod.subtotalWithDiscount = prod.quantity * prod.price

        }

        if (prod.quantity === 0) {
            removeProduct(id)
        }

        if (cart.length === 0) {
            cleanCart()
        }
    })
    printCart()
}
const images = [...document.querySelectorAll(".card-img-top")]

images.map(img => img.src="../images/oil.png")


//products.map(img => console.log(img.image))

function open_modal() {
    printCart();
}