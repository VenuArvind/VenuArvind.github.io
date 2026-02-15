document.addEventListener('DOMContentLoaded', function () {
    // Footer year
    var yearEl = document.getElementById('current-year');
    if (yearEl) yearEl.textContent = new Date().getFullYear();

    // Update active nav link on scroll
    var sections = document.querySelectorAll('main section');
    var navLinks = document.querySelectorAll('.nav a');

    function updateActive() {
        var current = '';
        var scrollY = window.pageYOffset;

        sections.forEach(function (section) {
            var top = section.offsetTop - 120;
            var height = section.offsetHeight;
            if (scrollY >= top && scrollY < top + height) current = section.id;
        });

        navLinks.forEach(function (link) {
            var href = link.getAttribute('href');
            if (href === '#' + current) link.classList.add('active');
            else link.classList.remove('active');
        });
    }

    window.addEventListener('scroll', updateActive);
    updateActive();
});
