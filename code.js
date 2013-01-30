function firstWork(){
  var scene = new THREE.Scene();
	var camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,100);
	var renderer = new THREE.WebGLRenderer();
	renderer.setSize(window.innerWidth,window.innerHeight);
	document.body.appendChild(renderer.domElement);
	var geometry = new THREE.CubeGeometry(1,1,1);
	var material = new THREE.MeshLambertMaterial({color:0x00ff00}); // Specify Hexa Decimal Colors
	var cube = new THREE.Mesh(geometry,material);
	
	// Red Ambient Light.  
	//var light = new THREE.AmbientLight( 0xff0000 ); 
	//scene.add(light);
	
	// set a directional light
	var directionalLight = new THREE.DirectionalLight( 0xffffff, 5 );
	directionalLight.position.z = 3;
	//directionalLight.castShadow = true;
	//directionalLight.onlyShadow = true;
	//directionalLight.shadowDarkness = 1;
	directionalLight.shadowCameraVisible = true;
	//directionalLight.shadowCameraLeft = 1000;
	//directionalLight.shadowCameraRight = 1000;
	//directionalLight.shadowCameraBottom = 1000;
	//directionalLight.shadowCameraTop = 1000;
	scene.add( directionalLight );
	
	scene.add(cube);
	camera.position.z = 3;
	document.addEventListener("mousemove",function (e){
		var mouseX = ( e.clientX - 50 );
		var mouseY = ( e.clientY  - 50 );
		cube.rotation.x = mouseY * 0.005;
		cube.rotation.y = mouseX * 0.005;
		
		renderer.render( scene, camera );
	});
}



document.addEventListener("DOMContentLoaded",function (){
	new firstWork();
});
