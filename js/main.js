
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

const books = {
    gatsby: {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        genre: "Fiction",
        summary: "A novel about the American dream, love, and social class in the Roaring Twenties.",
        review: "A literary masterpiece with deep symbolism and complex characters.",
        finalThoughts: "A must-read for anyone interested in wealth, love, and morality.",
        image: "img/book1.jpg",
    },

    1984: {
        title: "1984",
        author: "George Orwell",
        genre: " Dystopian Fiction",
        summary: "1984 is a political novel about totalitarianism, surveillance, and the loss of individual freedom.",
        review: "The novel presents a chilling dystopian future where the government controls every aspect of life, leaving readers questioning the balance of power and freedom.",
        finalThoughts: "A powerful and thought-provoking book that remains relevant today in discussions of privacy and government control.",
        image: "img/book2.jpg",
    },

    mockingbird: {
        title: "To Kill A Mockingbird",
        author: "Harper Lee",
        genre: " Fiction",
        summary: "Set in the Depression-era South, the book explores themes of racial injustice, the loss of innocence, and moral growth.",
        review: "The novel’s portrayal of the deep-seated prejudices in American society makes it an incredibly powerful read. The characters are compelling and real.",
        finalThoughts: "To Kill a Mockingbird is a moving and unforgettable story, with valuable lessons about courage and justice. A must-read for all ages.",
        image: "img/book3.jpg",
    },

    pride: {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: " Classic Fiction",
        summary: "Pride and Prejudice follows Elizabeth Bennet as she navigates societal expectations, romance, and her own prejudices.",
        review: "The wit and sharp dialogue make this a charming and insightful read. The evolving relationship between Elizabeth and Darcy is brilliant.",
        finalThoughts:"One of the most beloved works in English literature, offering timeless lessons on love, family, and societal expectations.",
        image: "img/book4.jpg",
    },

    moby: {
        title: "Moby-Dick",
        author: "Herman Melville",
        genre: "Adventure",
        summary: "A sailor named Ishmael recounts his voyage on the whaling ship Pequod, captained by the obsessed Ahab, who hunts the legendary white whale Moby-Dick.",
        review: "Melville's novel is a masterwork of symbolism and philosophical insight, though its length and detailed chapters can feel daunting to some readers.",
        finalThoughts:"A dense but rewarding novel that raises questions about fate, obsession, and the human spirit.",
        image: "img/book5.jpg",
    },

    rye: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger",
        genre: "Coming-of-Age FictionThe novel tells the story of Holden Caulfield, a disillusioned teenager who struggles with his place in the world after the death of his brother",
        summary: "Holden’s raw and honest voice captures the confusion of adolescence, but his alienation can make it a tough read for some.",
        review: "A seminal work on youth and rebellion, though not for everyone due to its heavy themes of mental illness and isolation.",
        finalThoughts: "A seminal work on youth and rebellion, though not for everyone due to its heavy themes of mental illness and isolation.",
        image: "img/book6.jpg",
    },

    world: {
        title: "Brave New World",
        author: "Aldous Huxley",
        genre: " Dystopian Fiction",
        summary: "Brave New World is set in a futuristic society where humans are bred and conditioned for specific roles, and free will is abolished.",
        review: "Huxley's novel raises important questions about technology, conformity, and individual freedom in a controlled society.",
        finalThoughts:"A chilling and thought-provoking dystopian novel that remains relevant to today's world.",
        image: "img/book7.jpg",
    },

    odyssey: {
        title: "The Odyssey",
        author: "Homer",
        genre: "Epic Poetry",
        summary: "The Odyssey tells the epic journey of Odysseus as he tries to return home after the Trojan War, facing numerous obstacles along the way.",
        review: "An unforgettable tale of adventure, heroism, and perseverance, with timeless themes of loyalty and cleverness.",
        finalThoughts:"A classic work of literature that has inspired countless other stories of epic journeys and trials.",
        image: "img/book8.jpg",
    },

    war: {
        title: "War and Peace",
        author: "Leo Tolstoy",
        genre: "Historical Fiction",
        summary: "War and Peace follows several noble families during the Napoleonic Wars, weaving together their personal and historical struggles.",
        review: "With a grand scale and deep philosophical exploration, Tolstoy’s masterpiece captures both the grandeur and the human aspects of war and peace.",
        finalThoughts: "A monumental work of historical fiction, combining political drama with profound insights into the human condition.",
        image: "img/book9.jpg",
    },

    
};

function openBookModal(bookId) {

    const book = books[bookId];
    if (!book) return;

    document.getElementById("modal-book-content").innerHTML = `
        <h2>${book.title}</h2>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Genre:</strong> ${book.genre}</p>
        <h3>Summary</h3>
        <p>${book.summary}</p>
        <h3>Review</h3>
        <p>${book.review}</p>
        <h3>Final Thoughts</h3>
        <p>${book.finalThoughts}</p>
    `;
    
    document.getElementById("book-modal").style.display = "block";
}

function closeBookModal() {
    document.getElementById("book-modal").style.display = "none";
}

