// Dark Mode Toggle Script (main.js)
const darkModeToggle = document.getElementById('dark-mode-toggle');

// Check if dark mode is already enabled (stored in localStorage)
if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}

// Toggle dark mode on checkbox change
darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); // Save to localStorage
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); // Save to localStorage
    }
});


function searchBooks() {
    const searchQuery = document.getElementById("search-bar").value.toLowerCase();
    const books = document.querySelectorAll(".book-item");

    books.forEach((book) => {
        const bookTitle = book.textContent.toLowerCase();
        if (bookTitle.includes(searchQuery)) {
            book.style.display = "block"; // Show the book if it matches the search
        } else {
            book.style.display = "none"; // Hide the book if it doesn't match the search
        }
    });
}



function searchBooks() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase().trim();
    const bookItems = document.querySelectorAll('.book-item');
    
    // First, show all books and reset their order
    bookItems.forEach(book => {
        book.style.display = 'block';
        book.style.order = '0';
    });
    
    // If search is empty, just show all books
    if (!searchTerm) return;
    
    // Find matching books
    bookItems.forEach(book => {
        const titleElement = book.querySelector('.book-header h2');
        if (titleElement) {
            const title = titleElement.textContent.toLowerCase();
            // Remove "Book Title: " prefix if present
            const cleanTitle = title.replace('book title: ', '');
            
            if (cleanTitle === searchTerm) {
                // Exact match - move to top
                book.style.order = '-1';
            } else if (cleanTitle.includes(searchTerm)) {
                // Partial match - move after exact matches
                book.style.order = '0';
            } else {
                // No match - hide
                book.style.display = 'none';
            }
        }
    });
}
