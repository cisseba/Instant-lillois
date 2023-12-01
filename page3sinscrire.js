window.onload = function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const pageContent = document.querySelector('.page-content');
    const title = document.querySelector('.title');

    // Cacher le contenu initial pendant 15 secondes
    setTimeout(function() {
        pageContent.style.display = 'none';

        // Afficher le titre avec l'effet de distortion après 15 secondes
        loadingScreen.style.display = 'flex';
        setTimeout(function() {
            loadingScreen.style.display = 'none';
            pageContent.style.display = 'block';
            title.classList.add('distortion');
        }, 3000); // Changez la durée d'attente (en millisecondes) selon vos besoins
    }, 15000); // Changez la durée d'attente (en millisecondes) selon vos besoins
};

