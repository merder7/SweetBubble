// 1. Navbar'a kaydırma anında arka plan ekleme
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) { // 50px aşağı kaydırıldığında
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// 2. Menü linklerine tıklayınca yumuşak kaydırma (Smooth Scroll)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault(); // Varsayılan tıklama davranışını engelle

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth' // Yumuşak kaydırma efekti
        });
    });
});
