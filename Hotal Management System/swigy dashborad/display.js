function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const orderBody = document.getElementById('order-body');

    orders.forEach((order, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${order.name}</td>
            <td>${order.mobile}</td>
            <td>${order.address}</td>
            <td>${order.foodItem}</td>
            <td>$${order.foodPrice}</td>
            <td>
                <button onclick="editOrder(${index})">Edit</button>
                <button onclick="deleteOrder(${index})">Delete</button>
            </td>
        `;
        orderBody.appendChild(row);
    });
}

function editOrder(index) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const order = orders[index];

    // Redirect to form with existing order details
    const queryParams = new URLSearchParams({
        foodItem: order.foodItem,
        foodPrice: order.foodPrice,
        name: order.name,
        mobile: order.mobile,
        address: order.address
    });
    window.location.href = `form.html?${queryParams.toString()}`;
}

function deleteOrder(index) {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.splice(index, 1);
    localStorage.setItem('orders', JSON.stringify(orders));
    window.location.reload();
}

function clearOrders() {
    localStorage.removeItem('orders');
    window.location.reload();
}

document.addEventListener('DOMContentLoaded', loadOrders);
document.getElementById('clear-orders').onclick = clearOrders;
