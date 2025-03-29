// Update Footer
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = ` ${document.lastModified}`;
});

// document.addEventListener("DOMContentLoaded", () => {
//     // Set the timestamp field value
//     document.getElementById("timestamp").value = new Date().toISOString();

//     // Form Validation
//     document.getElementById("membershipForm").addEventListener("submit", function(event) {
//         const orgTitle = document.querySelector('input[name="orgTitle"]');
//         const orgPattern = /^[A-Za-z\s\-]{7,}$/;

//         if (!orgPattern.test(orgTitle.value)) {
//             alert("Organization title must be at least 7 characters and only contain letters, spaces, or hyphens.");
//             event.preventDefault();
//         }
//     });

//     // Modal handling
//     document.querySelectorAll('.modal-btn').forEach(button => {
//         button.addEventListener('click', () => {
//             document.getElementById(button.dataset.modal).style.display = 'block';
//         });
//     });

//     document.querySelectorAll('.close-modal').forEach(close => {
//         close.addEventListener('click', () => {
//             close.closest('.modal').style.display = 'none';
//         });
//     });

//     window.addEventListener('click', (event) => {
//         if (event.target.classList.contains('modal')) {
//             event.target.style.display = 'none';
//         }
//     });



// document.addEventListener("DOMContentLoaded", () => {
//     // Set timestamp when form loads
//     document.getElementById("timestamp").value = new Date().toISOString();

//     // Membership level modal functionality
//     const modalButtons = document.querySelectorAll(".modal-btn");
//     const modals = document.querySelectorAll(".modal");
//     const closeButtons = document.querySelectorAll(".close-modal");

//     modalButtons.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             modals[index].style.display = "flex";
//         });
//     });

//     closeButtons.forEach((btn, index) => {
//         btn.addEventListener("click", () => {
//             modals[index].style.display = "none";
//         });
//     });

//     window.addEventListener("click", (event) => {
//         modals.forEach((modal) => {
//             if (event.target === modal) {
//                 modal.style.display = "none";
//             }
//         });
//     });

//     // Form validation (basic)
//     const form = document.querySelector("#join-form");
//     form.addEventListener("submit", (event) => {
//         const title = document.querySelector("#organization-title").value;
//         const titlePattern = /^[A-Za-z\s-]{7,}$/;

//         if (!titlePattern.test(title)) {
//             alert("Organization title must be at least 7 characters and contain only letters, spaces, or hyphens.");
//             event.preventDefault();
//         }
//     });

//     // Display submitted form data on thankyou.html
//     if (window.location.pathname.includes("thankyou.html")) {
//         const urlParams = new URLSearchParams(window.location.search);
//         document.getElementById("display-name").textContent = urlParams.get("first-name");
//         document.getElementById("display-lastname").textContent = urlParams.get("last-name");
//         document.getElementById("display-email").textContent = urlParams.get("email");
//         document.getElementById("display-phone").textContent = urlParams.get("phone");
//         document.getElementById("display-business").textContent = urlParams.get("business-name");
//         document.getElementById("display-date").textContent = urlParams.get("timestamp");
//     }
// });

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


