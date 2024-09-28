document.addEventListener('DOMContentLoaded', function () {
    document.getElementById("bookingForm").addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission
        saveBookingData(); // Call the function to save booking data
    });
});

// Function to handle booking data submission
async function saveBookingData() {
    try {
        // Collecting form data
        const formData = {
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            mobile: document.getElementById("mobile").value,
            roomType: document.getElementById("roomType").value,
            checkIn: document.getElementById("checkIn").value,
            checkOut: document.getElementById("checkOut").value,
            paidAmount: document.getElementById("paidAmount").value,
            dueAmount: document.getElementById("dueAmount").value,
            paymentStatus: document.getElementById("paymentStatus").value,
            message: document.getElementById("message").value
        };

        // Define the URL where the data will be sent
        const url = 'http://localhost:3000/bookings'; // Update this URL accordingly

        // Send the data to the server
        let response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(formData), // Send the form data as JSON
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        });

        // Handle the server response
        if (response.ok) {
            let data = await response.json();
            console.log(data); // Log the response for debugging

            // Show success message
            alert("Booking successfully submitted!");
            document.getElementById("bookingForm").reset(); // Reset the form after submission
        } else {
            throw new Error('Failed to submit booking data');
        }

    } catch (error) {
        console.error("Error:", error);
        alert("Error while submitting booking data: " + error.message); // Show error message
    }
}

// Function to toggle sidebar visibility
function fun() {
    let sidebar = document.getElementById("sidebar");
    sidebar.style.display = sidebar.style.display === "none" || sidebar.style.display === "" ? "block" : "none";
}
