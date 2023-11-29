// Assurez-vous d'inclure la clé API Google Maps
// Remplacez 'VOTRE_CLE_API' par votre propre clé
const apiKey = 'VOTRE_CLE_API';

// Fonction d'initialisation de la carte
function initMap() {
    // Coordonnées du centre de la carte
    const myLatLng = { lat: 48.858844, lng: 2.294350 };

    // Créez une nouvelle carte Google Maps
    const map = new google.maps.Map(document.getElementById('map'), {
        center: myLatLng,
        zoom: 13, // Ajustez le niveau de zoom selon vos besoins
    });

    // Ajoutez un marqueur à l'emplacement spécifié
    const marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'Mon Marqueur'
    });
}

// Chargez l'API Google Maps avec la clé API
function loadGoogleMapsScript() {
    const script = document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=${apiKey}&callback=initMap`;
    script.defer = true;
    script.async = true;
    document.head.appendChild(script);
}

// Chargez la carte lors du chargement de la page
window.onload = loadGoogleMapsScript;
