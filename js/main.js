var element = document.getElementById('works-screen');

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, element.offsetWidth / element.offsetHeight, 0.1, 1000);
var renderer = new THREE.WebGLRenderer();

renderer.setSize(element.offsetWidth, element.offsetHeight);
element.appendChild(renderer.domElement);

var h = 800;
var w = 2241;
var r = w / (2 * 3.14);

r = r / 10;
h = h / 10;

console.log(r);
console.log(h);

var geometry = new THREE.CylinderGeometry(r, r, h, 32, 1, true);

//var material = new THREE.MeshBasicMaterial({color: 0x00ff00});

geometry.applyMatrix( new THREE.Matrix4().makeScale( -1, 1, 1 ) );
var material = new THREE.MeshBasicMaterial({
   map: THREE.ImageUtils.loadTexture('/images/screen25.png')
});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 10;

function render() {
   requestAnimationFrame(render);

   //cube.rotation.x += 0.01;
   //cube.rotation.y += 0.01;

   renderer.render(scene, camera);
}

render();

//document.addEventListener( 'mousewheel', onDocumentMouseWheel, false );
//document.addEventListener( 'DOMMouseScroll', onDocumentMouseWheel, false);


/*
window.onscroll = onDocumentMouseWheel;

var y = window.pageYOffset;

function onDocumentMouseWheel(event) {
   var value = window.pageYOffset - y;

   console.log(value);

   cube.position.y += value * 0.007;

   y = window.pageYOffset;

				//camera.updateProjectionMatrix();
}

*/
