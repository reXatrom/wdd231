// thankyou.js

// Grab the container where the latest review will be shown
const display = document.getElementById('latest-review');

if (display) {
  const reviews = JSON.parse(localStorage.getItem('reviews')) || [];
  const latest = reviews[reviews.length - 1];

  if (latest) {
    display.innerHTML = `
      <h2>Thank You for Your Review!</h2>
      <div class="card">
        <h3>${latest.title}</h3>
        <p><strong>Genre:</strong> ${latest.genre}</p>
        <p><strong>Rating:</strong> ${latest.rating} ⭐</p>
        <p><strong>Your Thoughts:</strong> ${latest.review}</p>
      </div>
    `;
  } else {
    display.innerHTML = '<p>No recent review found.</p>';
  }
}
