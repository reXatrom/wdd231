// scripts/form.js

// Update footer year
document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("reviewForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const review = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    genre: document.getElementById("genre").value,
    year: parseInt(document.getElementById("yearInput").value),
    rating: parseFloat(document.getElementById("rating").value),
    snippet: document.getElementById("snippet").value,
  };

  // Save to review history
  const saved = JSON.parse(localStorage.getItem("userReviews")) || [];
  saved.push(review);
  localStorage.setItem("userReviews", JSON.stringify(saved));

  // Save latest review for thankyou page
  localStorage.setItem("latestReview", JSON.stringify(review));

  // Redirect to thankyou.html
  window.location.href = "thankyou.html";
});