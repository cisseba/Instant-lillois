

document.addEventListener("DOMContentLoaded", function() {
    var images = [

        // { src: "/Accueil/bande  (1).png", link: "/Accueil/bande  (1).png" }
        { src: "/Restaurant/PHOTO-RESTO/Afri call food 1.jpg" , alt: "Image 1", link: "/Restaurant/AFRICALL-FOOD.html" },
        { src: "/Restaurant/PHOTO-RESTO/Barbara-1.jpg", alt: "Image 2", link: "/Restaurant/BARBARA.html" },
        { src: "/Restaurant/PHOTO-RESTO/La bellazza 1.jpg", alt: "Image 3", link: "/Restaurant/LA-BELLAZZA.html" },
        { src: "/Restaurant/PHOTO-RESTO/Raptor shack 1.jpg", alt: "Image 4", link: "/Restaurant/RAPTOR.html" },
        { src: "/Restaurant/PHOTO-RESTO/Tu brilles 1.jpg", alt: "Image 5", link: "/Restaurant/TU-BRILLES.html",   }

    
        // Ajoutez d'autres objets d'image selon vos besoins
    ];

    var currentIndex = 0;
    var imageContainer = document.getElementById("imageContainer");
    var isRolling = false;

    imageContainer.style.backgroundImage = `url('${images[currentIndex].src}')`;

    window.changeImage = function() {
        if (!isRolling) {
            isRolling = true;

            // Commence le défilement des images
            rollImages();
            
            // Arrête le défilement après 3 secondes
            setTimeout(function() {
                stopRolling();
            }, 3000);
        }
    };

    function rollImages() {
        // Utilise une fonction récursive pour simuler le défilement
        setTimeout(function() {
            currentIndex = (currentIndex + 1) % images.length;
            imageContainer.style.backgroundImage = `url('${images[currentIndex].src}')`;

            rollImages();
        }, 200); // Ajustez la vitesse du défilement selon vos préférences
    }

    function stopRolling() {
        isRolling = false;

        // Redirige vers la page associée à l'image actuelle
        window.location.href = images[currentIndex].link;
    };
    
});