import * as THREE from 'three';

let scene, camera, renderer

const setup = () => {
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio)
  camera.position.z = 5;
}

const fitCanvas = () => {
  renderer.setSize( window.innerWidth, window.innerHeight );
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
}

const initScene = () => {
  const geometry = new THREE.BoxGeometry( 1, 1, 1 );
  const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
  const cube = new THREE.Mesh( geometry, material );
  scene.add( cube );
}

const animate = () => {
	renderer.render( scene, camera );
}

window.addEventListener("resize", () => {
  fitCanvas()
})

setup()
initScene()
fitCanvas()
renderer.setAnimationLoop( animate );

document.body.appendChild( renderer.domElement );