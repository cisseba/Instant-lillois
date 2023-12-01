 document.addEventListener('DOMContentLoaded', function() {
            const showContentButton = document.getElementById('showContentButton');
            const contentContainer = document.getElementById('contentContainer');
        
            // Exemple de bases de données simulées
            const databases = [
                [
                    { title: 'Palais des Beaus Arts', image: '/ALEATOIRE/palaisdesbeauxarts.jpg' },
                    { title: 'Barbara', image: '/Restaurant/PHOTO-RESTO/Barbara-1.jpg' },
                    { title: 'Kinépolis', image: '/ALEATOIRE/kinépolis.png' }
                ],
                [
                    { title: 'Musée de la Piscine', image: '/ALEATOIRE/muséepiscine.jpg' },
                    { title: 'Afri Call Food', image: '/Restaurant/PHOTO-RESTO/Afri call food 1.jpg' },
                    { title: 'Hall U Need', image: '/ALEATOIRE/halluneed.png' }
                ],
                [
                    { title: 'Parc du Héron', image: '/ALEATOIRE/parcduheron.png' },
                    { title: 'Raptor Shack', image: '/Restaurant/PHOTO-RESTO/Raptor shack 1.jpg' },
                    { title: 'Karafun', image: '/ALEATOIRE/karafun.png' }
                ],
                // Ajoutez autant de bases de données que nécessaire
            ];
        
showContentButton.addEventListener('click', function() {
                contentContainer.innerHTML = ''; // Efface le contenu précédent
        
                // Sélectionne une base de données aléatoire
                const randomDatabase = databases[Math.floor(Math.random() * databases.length)];
        
                // Affiche chaque élément de la base de données
                randomDatabase.forEach(item => {
                    const contentItem = document.createElement('div');
                    contentItem.className = 'content-item';
                    contentItem.innerHTML = `
                        <h3>${item.title}</h3>
                        <img src="${item.image}" alt="${item.title}">
                    `;
                    contentContainer.appendChild(contentItem);
                });
            });
        });
        