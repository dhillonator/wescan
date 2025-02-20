document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Load navigation
    const navResponse = await fetch('/nav.html');
    const navHtml = await navResponse.text();
    document.querySelector('#nav-placeholder').innerHTML = navHtml;

    // Load footer
    const footerResponse = await fetch('/footer.html');
    const footerHtml = await footerResponse.text();
    document.querySelector('#footer-placeholder').innerHTML = footerHtml;

    // Initialize mobile menu after nav is loaded
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!mobileMenuButton.contains(e.target) && !mobileMenu.contains(e.target)) {
                mobileMenu.classList.add('hidden');
            }
        });
    }

    // Scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.fade-in-section').forEach((section) => {
        observer.observe(section);
    });
  } catch (error) {
    console.error('Error loading components:', error);
  }
});