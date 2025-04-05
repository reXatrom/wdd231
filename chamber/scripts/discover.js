// Update Footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = ` ${document.lastModified}`;
});

document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display members data
    fetch('data/members.json')
        .then(response => response.json())
        .then(members => {
            displayMembers(members);
        })
        .catch(error => {
            console.error('Error fetching members data:', error);
        });

    // Function to display members in card format
    function displayMembers(members) {
        const container = document.querySelector('.discover-container');

        members.forEach(member => {
            const card = document.createElement('div');
            card.classList.add('member-card');

            const title = document.createElement('h2');
            title.textContent = member.name;

            const figure = document.createElement('figure');
            const img = document.createElement('img');
            img.src = member.image;
            img.alt = `${member.name} logo`;
            figure.appendChild(img);

            const address = document.createElement('address');
            address.textContent = member.address;

            const phone = document.createElement('p');
            phone.textContent = `Phone: ${member.phone}`;

            const websiteButton = document.createElement('a');
            websiteButton.href = member.website;
            websiteButton.textContent = 'Learn More';
            websiteButton.target = '_blank';

            card.appendChild(title);
            card.appendChild(figure);
            card.appendChild(address);
            card.appendChild(phone);
            card.appendChild(websiteButton);

            container.appendChild(card);
        });
    }

    // Function to display last visited message
    function displayLastVisitedMessage() {
        const sidebar = document.querySelector('.sidebar');
        const lastVisitDate = localStorage.getItem('lastVisitDate');
        const currentDate = Date.now(); // Current time in milliseconds

        if (!lastVisitDate) {
            // If it's the user's first visit
            sidebar.innerHTML = 'Welcome! Let us know if you have any questions.';
        } else {
            const lastVisitTime = new Date(parseInt(lastVisitDate)); // Convert stored date back to a Date object
            const diffTime = currentDate - lastVisitTime;
            const diffDays = Math.floor(diffTime / (1000 * 3600 * 24)); // Calculate days difference

            if (diffDays < 1) {
                // If the user visited less than a day ago
                sidebar.innerHTML = 'Back so soon! Awesome!';
            } else {
                // Display how many days ago the user last visited
                sidebar.innerHTML = `You last visited ${diffDays} ${diffDays === 1 ? 'day' : 'days'} ago.`;
            }
        }

        // Update the localStorage with the current visit time
        localStorage.setItem('lastVisitDate', currentDate.toString());
    }

    // Display the last visit message when the page loads
    displayLastVisitedMessage();
});

