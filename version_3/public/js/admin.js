// admin.js
let items = [];

// Load existing items from local storage (if any)
window.onload = () => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    items = storedItems;
    renderItems();
};

// Create and render items on the page
function renderItems() {
    const itemsContainer = document.getElementById('itemsContainer');
    itemsContainer.innerHTML = '';
    items.forEach((item, index) => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('item');

        itemDiv.innerHTML = `
            <h3>${item.name}</h3>
            <img src="${item.image}" alt="${item.name}" class="item-image">
            <p>${item.description}</p>
            <p><strong>Type:</strong> ${item.type}</p>
            <p><strong>Category:</strong> ${item.category}</p>
            <button onclick="editItem(${index})" class="btn">Edit</button>
            <button onclick="deleteItem(${index})" class="btn">Delete</button>
        `;
        itemsContainer.appendChild(itemDiv);
    });
}

// Add new service/event
document.getElementById('createForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const image = document.getElementById('image').value;
    const type = document.getElementById('type').value;
    const category = document.getElementById('category').value;

    const newItem = { name, description, image, type, category };
    items.push(newItem);
    localStorage.setItem('items', JSON.stringify(items));
    renderItems();
    this.reset(); // Reset form fields
});

// Edit an existing service/event
function editItem(index) {
    const item = items[index];
    document.getElementById('name').value = item.name;
    document.getElementById('description').value = item.description;
    document.getElementById('image').value = item.image;
    document.getElementById('type').value = item.type;
    document.getElementById('category').value = item.category;

    deleteItem(index); // Remove the item before adding it again
}

// Delete an existing service/event
function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(items));
    renderItems();
}
