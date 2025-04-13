// scripts/form.js
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

  // Save to localStorage
  const saved = JSON.parse(localStorage.getItem("userReviews")) || [];
  saved.push(review);
  localStorage.setItem("userReviews", JSON.stringify(saved));

  alert("Review submitted! It will appear next time you visit.");

  this.reset();
});

// Save form data before redirecting
const reviewData = {
  title: document.getElementById('title').value,
  type: document.getElementById('type').value,
  genre: document.getElementById('genre').value,
  year: document.getElementById('year').value,
  rating: document.getElementById('rating').value,
  review: document.getElementById('review').value
};

localStorage.setItem('latestReview', JSON.stringify(reviewData));

// Redirect to thank you page
window.location.href = "thankyou.html";

