window.onload = function() {
    const loadingScreen = document.querySelector('.loading-screen');
    const pageContent = document.querySelector('.page-content');
    const title = document.querySelector('.title');

    // Cacher le contenu initial pendant 15 secondes
    
    setTimeout(function() {
        // pageContent.style.display = 'none';

        // Afficher le titre avec l'effet de distortion après 15 secondes
        loadingScreen.style.display = 'flex';
        title.classList.add('distortion');
        setTimeout(function() {
            // loadingScreen.style.display = 'none';
            location.assign('Accueil/TEST-ACCUEIL.html')
        }, 3000); // Changez la durée d'attente (en millisecondes) selon vos besoins
    }, 10000); // Changez la durée d'attente (en millisecondes) selon vos besoins
    
};

