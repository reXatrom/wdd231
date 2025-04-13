// // main.js
// import { fetchReviews, renderCards } from './reviews.js';
// import { trendingItems } from './trending.js';

// // DOM elements
// const reviewContainer = document.getElementById('review-cards');
// const trendingContainer = document.getElementById('trending-items');
// const searchBar = document.getElementById('searchBar');
// const yearSpan = document.getElementById('year');
// const menuToggle = document.getElementById('menu-toggle');
// const navLinks = document.getElementById('nav-links');

// // Set current year in footer
// yearSpan.textContent = new Date().getFullYear();

// // main.js (if not already present)
// // const menuToggle = document.getElementById('menu-toggle');
// // const navLinks = document.getElementById('nav-links');

// menuToggle.addEventListener('click', () => {
//   navLinks.classList.toggle('hidden');
// });


// // Toggle mobile menu
// menuToggle?.addEventListener('click', () => {
//   navLinks.classList.toggle('hidden');
// });

// // Fetch and display featured reviews (homepage)
// if (reviewContainer) {
//   try {
//     const reviews = await fetchReviews();
//     const featured = reviews.slice(0, 6);
//     renderCards(featured, reviewContainer);
//   } catch (error) {
//     console.error('Error fetching reviews:', error);
//   }
// }

// // Display trending items (mock or real API)
// if (trendingContainer) {
//   trendingItems.forEach(item => {
//     const div = document.createElement('div');
//     div.classList.add('card');
//     div.innerHTML = `
//       <h3>${item.title}</h3>
//       <p>${item.description}</p>
//     `;
//     trendingContainer.appendChild(div);
//   });
// }

// // Filter reviews with search
// searchBar?.addEventListener('input', async (e) => {
//   const query = e.target.value.toLowerCase();
//   const reviews = await fetchReviews();
//   const filtered = reviews.filter(r => r.title.toLowerCase().includes(query) || r.genre.toLowerCase().includes(query));
//   renderCards(filtered, reviewContainer);
// });

// scripts/main.js
document.getElementById("year").textContent = new Date().getFullYear();

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("hidden");
});

// Load featured reviews
fetch("data/reviews.json")
  .then((res) => res.json())
  .then((data) => {
    const featured = data.slice(0, 3); // First 3 as featured
    const container = document.getElementById("review-cards");
    featured.forEach((review) => {
      const card = document.createElement("div");
      card.classList.add("review-card");
      card.innerHTML = `
        <h3>${review.title}</h3>
        <p>By ${review.author}</p>
        <p>⭐ ${review.rating} | ${review.genre} | ${review.year}</p>
        <p>"${review.snippet}"</p>
      `;
      container.appendChild(card);
    });
});