// Update Footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = ` ${document.lastModified}`;
});

document.addEventListener("DOMContentLoaded", () => {
    // Set timestamp when form loads
    const timestampField = document.getElementById("timestamp");
    if (timestampField) {
        timestampField.value = new Date().toISOString();
    }

    // Membership level modal functionality
    const modalButtons = document.querySelectorAll(".modal-btn");
    const modals = document.querySelectorAll(".modal");
    const closeButtons = document.querySelectorAll(".close-modal");

    modalButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            modals[index].style.display = "flex";
        });
    });

    closeButtons.forEach((btn, index) => {
        btn.addEventListener("click", () => {
            modals[index].style.display = "none";
        });
    });

    window.addEventListener("click", (event) => {
        modals.forEach((modal) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });

    // Form validation (basic)
    const form = document.querySelector("#join-form");
    if (form) {
        form.addEventListener("submit", (event) => {
            const title = document.querySelector("#organization-title").value;
            const titlePattern = /^[A-Za-z\s-]{7,}$/;

            if (!titlePattern.test(title)) {
                alert("Organization title must be at least 7 characters and contain only letters, spaces, or hyphens.");
                event.preventDefault();
            }
        });
    }

    // Display submitted form data on thankyou.html
    if (window.location.pathname.includes("thankyou.html")) {
        const urlParams = new URLSearchParams(window.location.search);
        
        // Debugging: Log URL parameters to check if they are being passed correctly
        console.log("URL Parameters:", Array.from(urlParams.entries()));

        // Update elements only if they exist
        document.getElementById("display-name").textContent = urlParams.get("first-name") || "N/A";
        document.getElementById("display-lastname").textContent = urlParams.get("last-name") || "N/A";
        document.getElementById("display-email").textContent = urlParams.get("email") || "N/A";
        document.getElementById("display-phone").textContent = urlParams.get("phone") || "N/A";
        document.getElementById("display-business").textContent = urlParams.get("business-name") || "N/A";
        document.getElementById("display-date").textContent = urlParams.get("timestamp") || "N/A";
    }
});


