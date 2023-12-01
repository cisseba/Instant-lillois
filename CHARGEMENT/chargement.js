document.addEventListener("DOMContentLoaded", function() {
    // Simuler une tâche de chargement
    setTimeout(function() {
        // Cacher la page de chargement
        document.getElementById("loader").style.display = "none";

        // Afficher le contenu de la page d'accueil
        document.getElementById("content").style.display = "block";
    }, 5000); // 5000 millisecondes (5 secondes)
});
