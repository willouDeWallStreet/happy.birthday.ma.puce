
// Initialisation de la scène, de la caméra et du rendu
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('canvas-container').appendChild(renderer.domElement);

// Chargement des textures
const textureLoader = new THREE.TextureLoader();

// Images de Nancy
const textureLogement1 = textureLoader.load('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/13/0c/da/ef/photo2jpg.jpg?w=500&h=400&s=1');
const textureLogement2 = textureLoader.load('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/f6/ef/73/default-avatar-2020-13.jpg?w=500&h=400&s=1');
const textureParc = textureLoader.load('https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/06/0f/75/dominique-alexandre-godron.jpg?w=500&h=400&s=1');
const textureVille = textureLoader.load('https://www.nancy.fr/fileadmin/_processed_/0/2/csm_2024-ici-on-respire_d0a2b8c408.png');

// Création des plans pour afficher les images
const geometry = new THREE.PlaneGeometry(5, 5);
const materialLogement1 = new THREE.MeshBasicMaterial({ map: textureLogement1 });
const materialLogement2 = new THREE.MeshBasicMaterial({ map: textureLogement2 });
const materialParc = new THREE.MeshBasicMaterial({ map: textureParc });
const materialVille = new THREE.MeshBasicMaterial({ map: textureVille });

const logement1 = new THREE.Mesh(geometry, materialLogement1);
const logement2 = new THREE.Mesh(geometry, materialLogement2);
const parc = new THREE.Mesh(geometry, materialParc);
const ville = new THREE.Mesh(geometry, materialVille);

// Positionnement des plans dans la scène
logement1.position.x = -10;
logement2.position.x = -5;
parc.position.x = 5;
ville.position.x = 10;

scene.add(logement1);
scene.add(logement2);
scene.add(parc);
scene.add(ville);

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
