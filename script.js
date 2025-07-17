document.addEventListener('DOMContentLoaded', () => {
    const emailLink = document.getElementById('email-link');
    if(emailLink) {
        emailLink.addEventListener('click', function(event) {
            event.preventDefault();
            const email = 'facetkaodmatmy@example.com';
            navigator.clipboard.writeText(email).then(function() {
                alert('Email address copied to clipboard!');
            }, function(err) {
                console.error('Could not copy text: ', err);
            });
        });
    }

    document.querySelectorAll('.dropdown-content a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});