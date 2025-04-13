// scripts/reviews.js
document.getElementById("year").textContent = new Date().getFullYear();

fetch("data/reviews.json")
  .then(res => res.json())
  .then(data => {
    const container = document.getElementById("all-reviews");
    const yearFilter = document.getElementById("year-filter");

    // Populate years
    const years = [...new Set(data.map(r => r.year))].sort((a, b) => b - a);
    years.forEach(year => {
      const option = document.createElement("option");
      option.value = option.textContent = year;
      yearFilter.appendChild(option);
    });

    function display(filtered) {
      container.innerHTML = "";
      filtered.forEach(review => {
        const div = document.createElement("div");
        div.className = "review-card";
        div.innerHTML = `
          <h3>${review.title}</h3>
          <p>By ${review.author}</p>
          <p>⭐ ${review.rating} | ${review.genre} | ${review.year}</p>
          <p>"${review.snippet}"</p>
        `;
        container.appendChild(div);
      });
    }

    // Initial display
    display(data);

    // Filtering
    document.querySelectorAll("select").forEach(select => {
      select.addEventListener("change", () => {
        const genre = document.getElementById("genre-filter").value;
        const year = document.getElementById("year-filter").value;
        const rating = document.getElementById("rating-filter").value;

        const filtered = data.filter(r =>
          (!genre || r.genre === genre) &&
          (!year || r.year == year) &&
          (!rating || r.rating >= parseFloat(rating))
        );

        display(filtered);
      });
    });
  });
