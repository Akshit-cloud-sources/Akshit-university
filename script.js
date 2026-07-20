// Akshit University Website Scripts

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Button click animations
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
  button.addEventListener('click', function() {
    this.style.transform = 'scale(0.98)';
    setTimeout(() => {
      this.style.transform = 'scale(1)';
    }, 100);
  });
});

console.log('Akshit University Website Loaded Successfully!');