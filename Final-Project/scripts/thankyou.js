const reviewContainer = document.getElementById('latest-review');
const storedReview = localStorage.getItem('latestReview');

  if (storedReview) {
    const review = JSON.parse(storedReview);
    reviewContainer.innerHTML = `
      <h3>What you submitted:</h3>
      <p><strong>Title:</strong> ${review.title}</p>
      <p><strong>Type:</strong> ${review.type}</p>
      <p><strong>Genre:</strong> ${review.genre}</p>
      <p><strong>Year:</strong> ${review.year}</p>
      <p><strong>Rating:</strong> ${review.rating}/5</p>
      <p><strong>Review:</strong><br>${review.review}</p>
    `;

    // Optional: clear it afterwards
    localStorage.removeItem('latestReview');
}