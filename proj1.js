var skills = document.querySelector('.skills');
var but = document.getElementById('but');
but.addEventListener('click', function () {
    if (skills.style.display === 'block') {
        skills.style.display = 'none';
    }
    else {
        skills.style.display = 'block';
    }
});
