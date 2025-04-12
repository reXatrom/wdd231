// reviews.js

// Sample reviews.json structure:
// [
//   { "id": 1, "title": "Inception", "genre": "Sci-Fi", "rating": 4.5, "review": "Mind-bending!", "year": 2010 },
//   ...
// ]

export async function fetchReviews() {
    try {
      const response = await fetch('data/reviews.json');
      if (!response.ok) throw new Error('Failed to load reviews');
      return await response.json();
    } catch (err) {
      console.error(err);
      return [];
    }
  }
  
  export function renderCards(reviews, container) {
    container.innerHTML = '';
    reviews.forEach(review => {
      const card = document.createElement('div');
      card.classList.add('card');
      card.innerHTML = `
        <h3>${review.title}</h3>
        <p><strong>Genre:</strong> ${review.genre}</p>
        <p><strong>Year:</strong> ${review.year}</p>
        <p><strong>Rating:</strong> ${review.rating} ⭐</p>
        <p>${review.review}</p>
      `;
      container.appendChild(card);
    });
  }
  