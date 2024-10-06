document.addEventListener('DOMContentLoaded', () => {
    // Example services data (can be fetched from a backend)
    const servicesData = [
        {
            title: 'Catering Services',
            description: 'Find top catering services for your event, from food to beverages.',
        },
        {
            title: 'Entertainment',
            description: 'Book the best local DJs, live bands, and performers for your event.',
        },
        {
            title: 'Transport Services',
            description: 'Secure reliable transportation services for your event guests.',
        },
        {
            title: 'Artisan Services',
            description: 'Ensure the safety of your house with trusted maintanace services.',
        },
    ];

    // Function to dynamically load services into the page
    function loadServices() {
        const servicesContainer = document.querySelector('.services-container');

        if (servicesContainer) {
            // Clear existing services
            servicesContainer.innerHTML = '';

            // Loop through services data and create service cards
            servicesData.forEach((service) => {
                const serviceCard = document.createElement('div');
                serviceCard.classList.add('service-card');

                const serviceTitle = document.createElement('h3');
                serviceTitle.textContent = service.title;

                const serviceDescription = document.createElement('p');
                serviceDescription.textContent = service.description;

                const exploreButton = document.createElement('button');
                exploreButton.textContent = 'Explore';
                exploreButton.classList.add('btn');
                exploreButton.addEventListener('click', () => {
                    // Placeholder action for exploring service
                    if(service.title == 'Catering Services'){
                        window.location.href = 'catering-services.html';
                    }else if(service.title == 'Entertainment'){
                        window.location.href = 'entertainment-services.html';
                    }else if(service.title == 'Transport Services'){
                        window.location.href = 'transport-services.html';
                    }else if(service.title == 'Artisan Services'){
                        window.location.href = 'artisan-services.html';
                    }else{
                        window.location.href = 'explore.html';
                    }
                    //alert(`You are exploring the service: ${service.title}`);
                });

                serviceCard.appendChild(serviceTitle);
                serviceCard.appendChild(serviceDescription);
                serviceCard.appendChild(exploreButton);

                servicesContainer.appendChild(serviceCard);
            });
        }
    }

    // Load services when the page is ready
    loadServices();
});
