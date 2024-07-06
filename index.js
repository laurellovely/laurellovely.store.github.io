document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { label: 'main.webp', price: 35,500, qtyElement: document.getElementById('qty1') },
        { label: 'main-2.jpg', price: 20,000, qtyElement: document.getElementById('qty2') },
        { label: 'design.jpg', price: 30,500, qtyElement: document.getElementById('qty3') },
        { label: 'brands2.jpg', price: 30,900, qtyElement: document.getElementById('qty4') },
        { label: 'top.jpg', price: 50,00, qtyElement: document.getElementById('qty5') },
        { label: '3.jpg', price:25,000, qtyElement: document.getElementById('qty6') },
    ];

    const carts = document.getElementById("carts");
    const total = document.getElementById("total");
    const cash = document.getElementById("cash");
    const change = document.getElementById("change");

    function addOrder() {
        carts.textContent = "";
        let totalPrice = 0;

        products.forEach(product => {
            const qty = parseFloat(product.qtyElement.value);
            if (qty > 0) {
                const order = ${qty} pc/s x ${product.price}------${product.label}------ Php${(qty * product.price).toFixed(2)}\n;
                carts.textContent += order;
                totalPrice += qty * product.price;
            }
        });

        total.value = '₱ ' + totalPrice.toFixed(2);
    }

    function calculateChange() {
        const totalPrice = parseFloat(total.value.replace('₱ ', ''));
        const cashTendered = parseFloat(cash.value);
        if (!isNaN(totalPrice) && !isNaN(cashTendered) && cashTendered >= totalPrice) {
            const changeAmount = cashTendered - totalPrice;
            change.value = '₱ ' + changeAmount.toFixed(2);
        } else {
            change.value = '';
        }
    }

    products.forEach(product => {
        product.qtyElement.addEventListener("keyup", addOrder);
        product.qtyElement.addEventListener("change", addOrder);
    });

    cash.addEventListener("keyup", calculateChange);
    cash.addEventListener("change", calculateChange);
});
