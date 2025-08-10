document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('email-link');
    if(emailLink) {
        emailLink.addEventListener('click', function(event) {
            event.preventDefault();
            const email = 'facetka@odmatmy.pl';
            navigator.clipboard.writeText(email).then(function() {
                alert('Adres skopiowany do schowka!');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        });
    }

    // Handle navigation menu links for smooth scrolling
    document.querySelectorAll('.dropdown-content a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});