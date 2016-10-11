const BOX_WIDTH = 120;
const BOX_PADDING = 40;
const BOX_HEIGHT = 240;
const MARGIN_LEFT = 1100;
const MARGIN_TOP = 450;

var dataList = [{
	name: "I",
	data: "惊奇",
	width: 2,
	pX: 8,
	pY: 0,
	map: 0,
	backcolor:"rgba(255,0,0,0.5)"
}, {
	name: "II",
	data: "迷失",
	width: 2,
	pX: 10,
	pY: 0,
	map: 0,
	backcolor:"rgba(255,32,0,0.5)"
}, {
	name: "III",
	data: "悬浮体",
	width: 2,
	pX: 12,
	pY: 0,
	map: 0,
	backcolor:"rgba(255,64,0,0.5)"
}, {
	name: "IV",
	data: "幻桥",
	width: 2,
	pX: 14,
	pY: 0,
	map: 0,
	backcolor:"rgba(255,96,0,0.5)"
}, {
	name: "V",
	data: "惊奇",
	width: 2,
	pX: 8,
	pY: 1,
	map: 0,
	backcolor:"rgba(255,128,0,0.5)"
}, {
	name: "VI",
	data: "惊奇",
	width: 2,
	pX: 10,
	pY: 1,
	map: 0,
	backcolor:"rgba(255,160,0,0.5)"
}, {
	name: "VII",
	data: "惊奇",
	width: 2,
	pX: 12,
	pY: 1,
	map: 0,
	backcolor:"rgba(255,192,0,0.5)"
}, {
	name: "VIII",
	data: "惊奇",
	width: 2,
	pX: 14,
	pY: 1,
	map: 0,
	backcolor:"rgba(255,224,0,0.5)"
}, {
	name: "IX",
	data: "惊奇",
	width: 2,
	pX: 8,
	pY: 2,
	map: 0,
	backcolor:"rgba(255,255,0,0.5)"
}, {
	name: "X",
	data: "惊奇",
	width: 2,
	pX: 10,
	pY: 2,
	map: 0,
	backcolor:"rgba(224,255,0,0.5)"
}, {
	name: "XI",
	data: "惊奇",
	width: 2,
	pX: 12,
	pY: 2,
	map: 0,
	backcolor:"rgba(192,255,0,0.5)"
}, {
	name: "XII",
	data: "惊奇",
	width: 2,
	pX: 14,
	pY: 2,
	map: 0,
	backcolor:"rgba(160,255,0,0.5)"
}];

var table = [];

function dataarrayToTable(arr) {
	table = [];
	for (var i = 0; i < arr.length; i++) {
		var datatmp = [];
		datatmp.push(arr[i].name);
		datatmp.push(arr[i].data);
		datatmp.push(arr[i].info);
		datatmp.push(arr[i].pX);
		datatmp.push(arr[i].pY);
		datatmp.push(arr[i].width);
		table.push(datatmp);
	}
}
dataarrayToTable(dataList);

var camera, scene, renderer;
var controls;
var objects = [];
var targets = {
	table: [],
	sphere: [],
	helix: [],
	grid: []
};
init();
animate();

function init() {
	camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 5000);
	camera.position.z = 1600;
	scene = new THREE.Scene();
	for (var i = 0; i < table.length; i++) {
		var thisData = table[i];
		var elementDiv = document.createElement("div");
		elementDiv.className = "element";
		elementDiv.style.width = (6 * BOX_WIDTH - BOX_PADDING) + "px";
		//		elementDiv.style.backgroundColor = "rgba(12,87,200," + (Math.random() * 0.5 + 0.25) + ")";

		var elementContain = document.createElement("div");
		elementContain.className = "elementContain";
		elementContain.style.width = (thisData[5] * BOX_WIDTH - BOX_PADDING) + "px";
		//console.log(elementContain.style.width)
		elementContain.style.backgroundColor =dataList[i].backcolor|| "rgba(12,87,255,0.5)";
		elementDiv.appendChild(elementContain);
		//		var numberDiv = document.createElement("div");
		//		numberDiv.className = "number";
		//		numberDiv.textContent = i + 1;
		//		elementContain.appendChild(numberDiv);
		var elementSymbolDiv = document.createElement("div");
		elementSymbolDiv.className = "symbol";
		elementSymbolDiv.textContent = thisData[0];
		elementSymbolDiv.style.width = (thisData[5] * BOX_WIDTH - BOX_PADDING) + "px";
		$(elementSymbolDiv).attr("mapIndex",i);
		elementContain.appendChild(elementSymbolDiv);
		var elementFullnameDiv = document.createElement("div");
		elementFullnameDiv.className = "details";
		elementFullnameDiv.innerHTML = thisData[1];
		elementFullnameDiv.style.width = (thisData[5] * BOX_WIDTH - BOX_PADDING) + "px";
		elementContain.appendChild(elementFullnameDiv);
		var threeElementObj = new THREE.CSS3DObject(elementDiv);
		threeElementObj.position.x = Math.random() * 4000 - 2000;
		threeElementObj.position.y = Math.random() * 4000 - 2000;
		threeElementObj.position.z = Math.random() * 4000 - 2000;
		$(threeElementObj).attr("mapIndex",i);
		scene.add(threeElementObj);
		objects.push(threeElementObj);
		$(elementContain).attr("mapIndex",i);
		$(elementContain).bind("click",function(e){
			localStorage.mapIndex=$(e.target).attr("mapIndex");
			window.parent.window.clearWorld();
			window.parent.window.hideIframe("fadeOut")
			setTimeout(function() {
				window.parent.window.createWorld(MAPS[parseInt(localStorage.mapIndex)]);
			}, 1000)
		})
	};
	var _0xc78bx10 = new THREE.Vector3();
	for (var i = 0, _0xc78bx11 = objects.length; i < _0xc78bx11; i++) {
		var _0xc78bx12 = i * 0.45; //+ Math.PI;
		var _0xc78bxf = new THREE.Object3D();
		_0xc78bxf.position.x = 550 * Math.sin(_0xc78bx12);
		_0xc78bxf.position.y = -(i * 36) + objects.length * 15;
		_0xc78bxf.position.z =550 * Math.cos(_0xc78bx12);
		_0xc78bx10.copy(_0xc78bxf.position);
		_0xc78bx10.x = _0xc78bx10.x*2;
		_0xc78bx10.z = _0xc78bx10.z*2;
//		console.log(JSON.stringify(_0xc78bxf.position));
		_0xc78bxf.lookAt(_0xc78bx10);
		targets.helix.push(_0xc78bxf);
	};

	renderer = new THREE.CSS3DRenderer();
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.domElement.style.position = "absolute";
	document.getElementById("container").appendChild(renderer.domElement);
	controls = new THREE.TrackballControls(camera, renderer.domElement);
	controls.rotateSpeed = 0.5;
	controls.addEventListener("change", render);
	var _0xc78bx14 = document.getElementById("table");
//	_0xc78bx14.addEventListener("click", function(_0xc78bx15) {
//		transform(targets.table, 2000);
//	}, false);
//	var _0xc78bx14 = document.getElementById("sphere");
//	_0xc78bx14.addEventListener("click", function(_0xc78bx15) {
//		transform(targets.sphere, 2000);
//	}, false);
//	var _0xc78bx14 = document.getElementById("helix");
//	_0xc78bx14.addEventListener("click", function(_0xc78bx15) {
//		transform(targets.helix, 2000);
//	}, false);
//	var _0xc78bx14 = document.getElementById("grid");
//	_0xc78bx14.addEventListener("click", function(_0xc78bx15) {
//		transform(targets.grid, 2000);
//	}, false);
	transform(targets.helix, 2000);
	window.addEventListener("resize", onWindowResize, false);
};

function transform(targets, _0xc78bx17) {
	TWEEN.removeAll();
	for (var i = 0; i < objects.length; i++) {
		var _0xc78bxf = objects[i];
		var _0xc78bx18 = targets[i];
		new TWEEN.Tween(_0xc78bxf.position).to({
			x: _0xc78bx18.position.x,
			y: _0xc78bx18.position.y,
			z: _0xc78bx18.position.z
		}, Math.random() * _0xc78bx17 + _0xc78bx17).easing(TWEEN.Easing.Exponential.InOut).start();
		new TWEEN.Tween(_0xc78bxf.rotation).to({
			x: _0xc78bx18.rotation.x,
			y: _0xc78bx18.rotation.y,
			z: _0xc78bx18.rotation.z
		}, Math.random() * _0xc78bx17 + _0xc78bx17).easing(TWEEN.Easing.Exponential.InOut).start();
	};
	new TWEEN.Tween(this).to({}, _0xc78bx17 * 2).onUpdate(render).start();
};

function onWindowResize() {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
};

function animate() {
	requestAnimationFrame(animate);
	TWEEN.update();
	controls.update();
};

function render() {
	renderer.render(scene, camera);
};