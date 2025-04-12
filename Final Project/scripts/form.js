// form.js

const form = document.querySelector('form');
const titleInput = document.getElementById('title');
const genreInput = document.getElementById('genre');
const ratingInput = document.getElementById('rating');
const reviewInput = document.getElementById('review');

// Check if form elements exist before adding listeners
if (form) {
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const title = titleInput.value.trim();
    const genre = genreInput.value.trim();
    const rating = ratingInput.value.trim();
    const review = reviewInput.value.trim();

    if (title && genre && rating && review) {
      const reviewData = { title, genre, rating, review, id: Date.now() };

      // Save to localStorage
      let reviews = JSON.parse(localStorage.getItem('reviews')) || [];
      reviews.push(reviewData);
      localStorage.setItem('reviews', JSON.stringify(reviews));

      // Redirect to thank you page
      window.location.href = 'thankyou.html';
    } else {
      alert('Please fill in all fields.');
    }
  });
}
