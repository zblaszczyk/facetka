document.getElementById('email-link').addEventListener('click', function(event) {
    event.preventDefault();
    const email = 'facetkaodmatmy@example.com';
    navigator.clipboard.writeText(email).then(function() {
        alert('Email address copied to clipboard!');
    }, function(err) {
        console.error('Could not copy text: ', err);
    });
});