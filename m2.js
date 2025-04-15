const counters = document.querySelectorAll('.counter');
let hasAnimated = false;

const animateCounter = (counter) => {
  const target = +counter.getAttribute('data-target');
  const speed = 200; // Lower is faster
  const increment = target / speed;
  
  const updateCount = () => {
    const current = +counter.innerText;
    if (current < target) {
      counter.innerText = Math.ceil(current + increment);
      requestAnimationFrame(updateCount);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
};

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !hasAnimated) {
      counters.forEach(counter => animateCounter(counter));
      hasAnimated = true; // Prevent it from animating again
    }
  });
}, { threshold: 0.5 });

counters.forEach(counter => observer.observe(counter));
