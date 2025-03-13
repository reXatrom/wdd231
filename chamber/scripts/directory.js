document.addEventListener("DOMContentLoaded", function () {
    const directory = document.getElementById("directory");
    const gridBtn = document.getElementById("gridview");
    const listBtn = document.getElementById("listview");


    directory.classList.add("grid");


    gridBtn.addEventListener("click", function () {
        directory.classList.remove("list");
        directory.classList.add("grid");
    });


    listBtn.addEventListener("click", function () {
        directory.classList.remove("grid");
        directory.classList.add("list");
    });


    fetch("data/members.json")
        .then((response) => response.json())
        .then((data) => {
            displayMembers(data);
        })
        .catch((error) => console.error("Error loading members:", error));

    function displayMembers(members) {
        directory.innerHTML = "";
        members.forEach((member) => {
            const card = document.createElement("div");
            card.classList.add("member-card");

            let badge = "";
            if (member.membership === 3) {
                badge = `<span class="gold-badge">Gold Member ⭐</span>`;
                card.classList.add("gold-member");
            } else if (member.membership === 2) {
                badge = `<span class="silver-badge">Silver Member ✨</span>`;
                card.classList.add("silver-member");
            }

            card.innerHTML = `
                <img src="images/${member.image}" alt="${member.name}">
                <div class="member-info">
                    <h3>${member.name}</h3>
                    <p>${member.address}</p>
                    <p>${member.phone}</p>
                    <a href="${member.website}" target="_blank">Visit Website</a>
                </div>
            `;
            directory.appendChild(card);
        });
    }
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("year").textContent = new Date().getFullYear();

    document.getElementById("lastModified").textContent = ` ${document.lastModified}`;
});

