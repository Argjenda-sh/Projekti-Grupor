
const darkModeToggle = document.getElementById('dark-mode-toggle');


if (localStorage.getItem('darkMode') === 'enabled') {
    document.body.classList.add('dark-mode');
    darkModeToggle.checked = true;
}


darkModeToggle.addEventListener('change', () => {
    if (darkModeToggle.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled'); 
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', 'disabled'); 
    }
});

document.querySelectorAll('.rating-stars').forEach(starContainer => {
    const stars = starContainer.querySelectorAll('.star');
    const ratingDisplay = starContainer.nextElementSibling.querySelector('.rating-display');

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const rating = star.getAttribute('data-value');
            ratingDisplay.textContent = '★'.repeat(rating) + '☆'.repeat(5 - rating);
            stars.forEach(s => s.classList.remove('selected')); 
            stars.forEach(s => {
                if (s.getAttribute('data-value') <= rating) {
                    s.classList.add('selected');
                }
            });
        });
    });
});


function expandBook(bookElement) {
    if (!bookElement.classList.contains('fullscreen')) {
      bookElement.classList.add('fullscreen');
      document.body.style.overflow = 'hidden';
    }
  }
  
  function closeBook(event, bookElement) {
    event.stopPropagation(); 
    bookElement.classList.remove('fullscreen');
    document.body.style.overflow = '';
  }


  function searchBooks() {
    const searchTerm = document.getElementById('search-bar').value.toLowerCase().trim();
    const bookItems = document.querySelectorAll('.book-item');
    
    
    bookItems.forEach(book => {
        book.style.display = 'block';
        book.style.order = '0';
    });
    
    
    if (!searchTerm) return;
    

    bookItems.forEach(book => {
        const titleElement = book.querySelector('.book-header h2');
        if (titleElement) {
            const title = titleElement.textContent.toLowerCase();
            
            const cleanTitle = title.replace('book title: ', '');
            
            if (cleanTitle === searchTerm) {
            
                book.style.order = '-1';
            } else if (cleanTitle.includes(searchTerm)) {
    
                book.style.order = '0';
            } else {
                
                book.style.display = 'none';
            }
        }
    });
}