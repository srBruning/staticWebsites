// Arquivo principal do frontend — scripts movidos do HTML para aqui

// Minimal inline error handler para evitar layout shift
window.addEventListener('error', (e) => {
  console.error('Runtime Error:', e.message);
});

// Preload críticas
if ('requestIdleCallback' in window) {
  requestIdleCallback(() => {
    // Preload images quando browser estiver livre
    const images = ['./files/diego_bruning_02.webp', './files/diego_bruning_01.webp'];
    images.forEach(src => {
      const link = document.createElement('link');
      link.rel = 'prefetch';
      link.href = src;
      document.head.appendChild(link);
    });
  });
}

// Navbar scroll effect - Otimizado com requestAnimationFrame
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('nav');
  let lastScrollY = 0;
  let ticking = false;

  // Throttle scroll events para melhor performance
  window.addEventListener('scroll', () => {
    lastScrollY = window.scrollY;
    if (!ticking) {
      window.requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }, { passive: true });

  function updateNavbar() {
    if (!navbar) {
      ticking = false;
      return;
    }

    const shouldBeLight = lastScrollY > 50;
    const isLight = navbar.classList.contains('bg-white/90');

    if (shouldBeLight !== isLight) {
      if (shouldBeLight) {
        navbar.classList.add('bg-white/90', 'backdrop-blur-md', 'shadow-md');
        const links = navbar.querySelectorAll('a:not([target])');
        links.forEach(link => {
          link.classList.remove('text-white', 'hover:text-gray-300');
          link.classList.add('text-gray-700', 'hover:text-gray-900');
        });
      } else {
        navbar.classList.remove('bg-white/90', 'backdrop-blur-md', 'shadow-md');
        const links = navbar.querySelectorAll('a:not([target])');
        links.forEach(link => {
          link.classList.remove('text-gray-700', 'hover:text-gray-900');
          link.classList.add('text-white', 'hover:text-gray-300');
        });
      }
    }
    ticking = false;
  }

  // Smooth scroll para links internos
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      if (href !== '#' && document.querySelector(href)) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });
});
