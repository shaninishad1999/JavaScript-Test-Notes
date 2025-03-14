let orderList = [];

function orderFood(foodItem, price) {
    const order = { item: foodItem, price: price };
    orderList.push(order);
    updateOrderList();

    document.getElementById('food-section').classList.add('hidden');
    document.getElementById('order-page').classList.remove('hidden');
}

function updateOrderList() {
    const orderListElement = document.getElementById('order-list');
    orderListElement.innerHTML = ''; // Clear existing items
    orderList.forEach(order => {
        orderListElement.innerHTML += `<li>${order.item} - Price: $${order.price}</li>`;
    });
}

function placeOrder() {
    const foodItems = orderList.map(order => `${order.item} - $${order.price}`).join(', ');
    const totalPrice = orderList.reduce((total, order) => total + order.price, 0);

    window.location.href = `form.html?foodItems=${encodeURIComponent(foodItems)}&totalPrice=${totalPrice}`;
}

function cancelOrder() {
    resetOrder();
}

function resetOrder() {
    orderList = [];
    document.getElementById('order-list').innerHTML = '';
    document.getElementById('order-page').classList.add('hidden');
    document.getElementById('food-section').classList.remove('hidden');
}
