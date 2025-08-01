// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Ajout d'un texte descriptif
const textContent = document.createElement('div');
textContent.className = 'text-content';
textContent.innerHTML = '<h1>Voyage à Nancy</h1><p>Découvrez nos logements et parcs d\'attractions.</p>';
document.body.appendChild(textContent);

// Chargement des textures
const textureLoader = new THREE.TextureLoader();

// Remplacez les URLs par les chemins de vos images
const textureLogement1 = textureLoader.load('https://example.com/path-to-logement1.jpg');
const textureLogement2 = textureLoader.load('https://example.com/path-to-logement2.jpg');
const textureParc = textureLoader.load('https://example.com/path-to-parc.jpg');

// Création des plans pour afficher les images
const geometry = new THREE.PlaneGeometry(5, 5);
const materialLogement1 = new THREE.MeshBasicMaterial({ map: textureLogement1 });
const materialLogement2 = new THREE.MeshBasicMaterial({ map: textureLogement2 });
const materialParc = new THREE.MeshBasicMaterial({ map: textureParc });

const logement1 = new THREE.Mesh(geometry, materialLogement1);
const logement2 = new THREE.Mesh(geometry, materialLogement2);
const parc = new THREE.Mesh(geometry, materialParc);

// Positionnement des plans dans la scène
logement1.position.x = -10;
logement2.position.x = 0;
parc.position.x = 10;

scene.add(logement1);
scene.add(logement2);
scene.add(parc);

camera.position.z = 15;

// Animation
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

animate();

// Gestion du redimensionnement de la fenêtre
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
