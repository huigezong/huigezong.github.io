var renderer = new THREE.WebGLRenderer({
    canvas: document.getElementById('mainCanvas')
});
var scene = new THREE.Scene();
// var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);
var camera = new THREE.OrthographicCamera(-6, 6, 6, -6, 0.1, 100);

var cubes = Array();
var cubeNum = 3;

function init() {
    renderer.setClearColor(0xbbbbbb);
    //renderer.setClearColor(0xffffff);
   
    camera.position.set(25, 25, 25);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    scene.add(camera);
    
    // light
    var light = new THREE.PointLight(0xffffff, 1, 200);
    light.position.set(10, 15, 25);
    scene.add(light);


    /*
    var texture = new THREE.TextureLoader().load("images/jay.jpg");
    var Sphere = new THREE.Mesh(new THREE.SphereGeometry(2, 25, 25),
        new THREE.MeshPhongMaterial({
            color: 0xff0000,
            specular: 0xffff00,
            shininess: 1000,
            map : texture
        })
    );
    scene.add(Sphere);
    */


    /*
    var geometry = new THREE.PlaneGeometry( 500, 300, 1, 1 );
    geometry.vertices[0].uv = new THREE.Vector2(0,0);
    geometry.vertices[1].uv = new THREE.Vector2(2,0);
    geometry.vertices[2].uv = new THREE.Vector2(2,2);
    geometry.vertices[3].uv = new THREE.Vector2(0,2);
    // 纹理坐标怎么弄
    texture = THREE.ImageUtils.loadTexture("../img/a.jpg",null,function(t)
    {
    });
    var material = new THREE.MeshBasicMaterial({map:texture});
    var mesh = new THREE.Mesh( geometry,material );
    scene.add( mesh );
    */
    /*
    */

    var texture = new THREE.TextureLoader().load("images/jay.jpg");
    for (var i = 0; i < cubeNum; i++) {
        var cube = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 3),
            new THREE.MeshLambertMaterial({
                map: texture
            })
        );
        cubes[i] = cube;
        cube.position.set(3.5*i - 5, 0, 0);
        scene.add(cube);
    }
    // var cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2),
    //     new THREE.MeshLambertMaterial({
    //         map: texture
    //     })
    // );
    // cubes[0] = cube;
    // scene.add(cube);
    loop();


    /*
    var loader = new THREE.TextureLoader();
    loader.load("images/jay.jpg",  function ( texture ) {
        var material = new THREE.MeshLambertMaterial({ map:texture });
        //var material = new THREE.MeshBasicMaterial({map: texture,overdraw:true} ); 
        var cube = new THREE.Mesh(new THREE.CubeGeometry(2, 2, 2), material);
        cubes[0] = cube;
        scene.add(cubes[0]);
        loop();
    })
    */
    
    //texture.needsUpdate = true;
    renderer.render( scene, camera );
}

function animate() {
    renderer.clear();
    renderer.render( scene, camera );
    requestAnimationFrame( animate );
}

var t=0;
function loop(){
    t++;

    // var index = t % cubeNum
    // var rx = cubes[index].rotation.x
    // var ry = cubes[index].rotation.y
    // var rz = cubes[index].rotation.z

    // rx += 0.01
    // rz += 0.01
    // cubes[index].rotation.set(rx, ry, rz);

    for (var i = 0; i < cubeNum; i++) {
        var rx = cubes[i].rotation.x
        var ry = cubes[i].rotation.y
        var rz = cubes[i].rotation.z

        rx += 0.01
        rz += 0.01

        cubes[i].rotation.set(rx, ry, rz);
    }


    //cubes[0].rotation.set(t/100, 0,t/100);
    //camera.lookAt( {x:0, y:0, z:0 } );
    requestAnimationFrame(loop);
}

init();
animate();
