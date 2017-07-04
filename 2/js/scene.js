var renderer, scene, camera, myCanvas = document.getElementById('myCanvas');

// RENDERER
renderer = new THREE.WebGLRenderer({canvas: document.getElementById('myCanvas'), antialias: true});
renderer.setClearColor(00000000);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);


// CAMERA
camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 3000);
camera.position.set(0,0,0);

// SCENE
scene = new THREE.Scene();

// LIGHTS
var light1 = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(light1);

var light2 = new THREE.PointLight(0xffffff, 0.5);
scene.add(light2);

var geometry = new THREE.TorusGeometry( 100, 50, 15, 250 );

var material = new THREE.MeshLambertMaterial({color: 0xF3FFE2});
var mesh = new THREE.Mesh(geometry, material);
mesh.position.set(0, 0, -1000);

scene.add(mesh);

requestAnimationFrame(render);

function render() {
        mesh.rotation.x += 0.01;
        mesh.rotation.y += 0.01;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
}
