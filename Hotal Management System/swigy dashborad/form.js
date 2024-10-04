// Get query parameters
const urlParams = new URLSearchParams(window.location.search);
const foodItem = urlParams.get('foodItem');
const foodPrice = urlParams.get('foodPrice');
const name = urlParams.get('name') || '';
const mobile = urlParams.get('mobile') || '';
const address = urlParams.get('address') || '';

// Display order summary
document.getElementById('order-summary').innerText = `You ordered: ${foodItem} - Price: $${foodPrice}`;

// Populate form fields if editing
document.getElementById('name').value = name;
document.getElementById('mobile').value = mobile;
document.getElementById('address').value = address;

// Show the order summary section (if you want to display it initially)
document.getElementById('order-summary').style.display = 'block'; 

document.getElementById('details-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Gather form data
    const updatedName = document.getElementById('name').value;
    const updatedMobile = document.getElementById('mobile').value;
    const updatedAddress = document.getElementById('address').value;

    // Create order object
    const order = { name: updatedName, mobile: updatedMobile, address: updatedAddress, foodItem, foodPrice };

    // Save order to local storage
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    if (name) {
        // Update existing order
        const orderIndex = orders.findIndex(o => o.foodItem === foodItem && o.mobile === mobile);
        if (orderIndex > -1) {
            orders[orderIndex] = order; // Update existing order
        }
    } else {
        // Add new order
        orders.push(order);
    }
    
    localStorage.setItem('orders', JSON.stringify(orders));

    // Show success alert
    alert('Order successful!');

    // Clear form fields
    document.getElementById('name').value = '';
    document.getElementById('mobile').value = '';
    document.getElementById('address').value = '';

    // Optionally, hide the order summary
    document.getElementById('order-summary').style.display = 'none'; 

    // Redirect to display.html after a short delay
    // setTimeout(() => {
    //     window.location.href = 'display.html';
    // }, 500); // Redirects after 500 milliseconds
});
