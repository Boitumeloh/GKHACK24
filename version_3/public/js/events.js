document.addEventListener('DOMContentLoaded', () => {
    // Example events data (you can fetch this from your backend)
    const eventsData = [
        {
            title: 'Amapiano & Experience',
            description: 'Join the latest Amapiano experience, featuring top DJs and artists.',
        },
        {
            title: 'Sites',
            description: 'Explore beautiful sites around the township and learn the history.',
        },
        {
            title: 'Kids Experience',
            description: 'Fun-filled activities for children in a safe and enjoyable environment.',
        },
        {
            title: 'Culture',
            description: 'Discover local cultural and heritage of the community.',
        },
    ];

    // Function to dynamically load events into the page
    function loadEvents() {
        const eventsContainer = document.querySelector('.events-container');

        if (eventsContainer) {
            // Clear existing events
            eventsContainer.innerHTML = '';

            // Loop through events data and create event cards
            eventsData.forEach((event) => {
                const eventCard = document.createElement('div');
                eventCard.classList.add('event-card');

                const eventTitle = document.createElement('h3');
                eventTitle.textContent = event.title;

                const eventDescription = document.createElement('p');
                eventDescription.textContent = event.description;

                const exploreButton = document.createElement('button');
                exploreButton.textContent = 'Explore';
                exploreButton.classList.add('btn');
                exploreButton.addEventListener('click', () => {
                    // Placeholder action for exploring event
                    alert(`You are exploring the event: ${event.title}`);
                });

                eventCard.appendChild(eventTitle);
                eventCard.appendChild(eventDescription);
                eventCard.appendChild(exploreButton);

                eventsContainer.appendChild(eventCard);
            });
        }
    }

    // Load events when the page is ready
    loadEvents();
});
