//your JS code here. If required.
// script.js
// Get all the square elements
const squares = document.querySelectorAll('.square');

// Add event listeners to each square
squares.forEach(square => {
    square.addEventListener('mouseenter', () => {
        // When one square is hovered, change the colors of the other two to Coffee
        squares.forEach(sq => {
            if (sq !== square) {
                sq.style.backgroundColor = '#6F4E37'; // Coffee color
            }
        });
    });

    square.addEventListener('mouseleave', () => {
        // When the mouse leaves the square, reset all squares to Lavender
        squares.forEach(sq => {
            sq.style.backgroundColor = '#E6E6FA'; // Lavender color
        });
    });
});
