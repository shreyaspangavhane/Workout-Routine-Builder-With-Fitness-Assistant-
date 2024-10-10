const searchBar = document.getElementById('search-bar');
const exerciseList = document.getElementById('exercise-list');
const exercises = document.querySelectorAll('.exercise-item');

searchBar.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();

    exercises.forEach((exercise) => {
        const exerciseName = exercise.getAttribute('data-name').toLowerCase();

        if (exerciseName.includes(searchTerm)) {
            exercise.style.display = 'block';
        } else {
            exercise.style.display = 'none';
        }
    });
});