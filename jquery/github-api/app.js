$(function() {

    const githubBaseUrl = 'https://api.github.com';

    /* User clicks on get repos button */
    $('#getUserReposBtn').on('click', function(evt) {
        const userId = $('#githubUser').val();
        console.log('userId', userId);

        // fetch(githubBaseUrl + 'users/' + userId)
        fetch('https://randomuser.me/api/?results=10')
            .then(function(response) {
                console.log('response', response);
            })
            .catch(function(err) {
                console.log('err', err);
            })
    })
});
