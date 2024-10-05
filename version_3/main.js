// Wait for the DOM to be fully loaded before executing any JavaScript
document.addEventListener('DOMContentLoaded', () => {
    console.log('JavaScript loaded successfully!');

    // Event listener for the Buy Ticket button
    const buyTicketButton = document.querySelector('.buy-ticket-btn');
    if (buyTicketButton) {
        buyTicketButton.addEventListener('click', () => {
            alert('Ticket purchased successfully!');
            // You can add more functionality here (e.g., redirect to payment page)
        });
    }

    // Event listener for category cards (You can add this for interactivity in the category section)
    const categoryCards = document.querySelectorAll('.category-card');
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.textContent;
            alert(`You selected the ${category} category.`);
            // Logic to handle category selection could go here, like navigating to a category page.
        });
    });

    // Example of handling back button (You can use it to navigate to a previous page or section)
    const backButton = document.querySelector('.back-button');
    if (backButton) {
        backButton.addEventListener('click', () => {
            alert('Going back to the previous screen!');
            // Logic to navigate back (e.g., window.history.back())
        });
    }

    // Placeholder for notification icon event (optional)
    const notificationIcon = document.querySelector('.notification-icon');
    if (notificationIcon) {
        notificationIcon.addEventListener('click', () => {
            alert('You have no new notifications.');
        });
    }

    // Placeholder for cart icon event (optional)
    const cartIcon = document.querySelector('.cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            alert('Your cart is empty.');
        });
    }
});



