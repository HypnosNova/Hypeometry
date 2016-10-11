var container, stats;
var camera, scene, renderer, directionalLight;
var cameraAnger = -Math.PI / 4,
	targetAnger = -Math.PI / 4,
	targetPosition;
var changeAngering = false;
var ANGER_STEP = 0.035;
var SCENE_SIZE = 200, //场景尺寸
	MOVE_SPEED = 2, //移动速度
	STEP = 20; //每个路径格子的大小
var startPoint, endPoint, clickMove = false;
var raycaster;
var mouse;
//每个视角对应平面的邻接矩阵
var face1 = new MapFor2D();
var face2 = new MapFor2D();
var face3 = new MapFor2D();
var face4 = new MapFor2D();
//将二维地图与三维场景的路径绑定
var map2dBind3d1 = [];
var gameCurrentMap; //当前游戏的地图
var movePath = []; //移动的路径
var movePointer = 0;
//是否要将所有的一切都清掉
var isClearWorld = false;

var mapEmpty = [
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
];
var map2d1 = []
var map2d2 = [];
var map2d3 = [];
var map2d4 = [];
map2d1.bind3d = [];
map2d2.bind3d = [];
map2d3.bind3d = [];
map2d4.bind3d = [];

//将所有的地图数据清空
function emptyAllMaps() {
	mapEmpty = [];
	for (var i = 0; i < gameCurrentMap.rowN; i++) {
		mapEmpty[i] = [];
		for (var j = 0; j < gameCurrentMap.colN; j++) {
			mapEmpty[i][j] = 1;
		}
	}
	map2d1 = clone(mapEmpty);
	map2d2 = clone(mapEmpty);
	map2d3 = clone(mapEmpty);
	map2d4 = clone(mapEmpty);
	map2d1.bind3d = [];
	map2d2.bind3d = [];
	map2d3.bind3d = [];
	map2d4.bind3d = [];
}

var objects = [];

//开始游戏函数
function startGame(map) {
	gameCurrentMap = clone(map);
	var iframe = document.createElement("iframe");
	//iframe.classList="levelDiv";
	//iframe.src="info.html?"+gameCurrentMap.urlData;
	document.body.appendChild(iframe);
	$(iframe).addClass("levelDiv").attr("src", "info.html?" + gameCurrentMap.urlData).fadeIn(1000);
	emptyAllMaps();
	drawMap(gameCurrentMap);
}

function init(scaleC) {
	var scale = scaleC || 2.2
	container = document.createElement('div');
	document.getElementById("world").appendChild(container);

	camera = new THREE.OrthographicCamera(window.innerWidth / (-scale), window.innerWidth / scale, window.innerHeight / scale, window.innerHeight / (-scale), -1000, 3000);
	camera.position.x = 4000;
	camera.position.y = 2000 * Math.sqrt(2);
	camera.position.z = 4000;

	scene = new THREE.Scene();

	//	drawUI(UI);

	// Lights

	var ambientLight = new THREE.AmbientLight(0x888888);
	scene.add(ambientLight);

	directionalLight = new THREE.DirectionalLight(0xffffff);
	directionalLight.position.x = 3;
	directionalLight.position.y = 4;
	directionalLight.position.z = -1;
	directionalLight.position.normalize();
	scene.add(directionalLight);

	raycaster = new THREE.Raycaster();
	mouse = new THREE.Vector2();

	renderer = new THREE.WebGLRenderer({
		antialias: true, //是否开启反锯齿  
		precision: "highp", //着色精度选择  
		alpha: true, //是否可以设置背景色透明  
		preserveDrawingBuffer: true, //是否保存绘图缓冲  
	});
	renderer.setClearColor(0xf0f0f0);
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	container.appendChild(renderer.domElement);

	stats = new Stats();
	container.appendChild(stats.dom);
	//
	window.addEventListener('resize', onWindowResize, false);
	document.addEventListener('mousedown', onDocumentMouseDown, false);
	document.addEventListener('touchstart', onDocumentTouchStart, false);
	cameraAnger = -Math.PI / 4;
	targetAnger = -Math.PI / 4;
	$(container).animateCss("fadeIn");
}

function onDocumentTouchStart(event) {

	event.preventDefault();

	event.clientX = event.touches[0].clientX;
	event.clientY = event.touches[0].clientY;
	onDocumentMouseDown(event);

}

function objectToCanvasPoint(obj) {
	var world_vector = clone(obj.position);
	var vector = world_vector.project(camera);
	var halfWidth = window.innerWidth / 2;
	var halfHeight = window.innerHeight / 2;

	var result = {
		x: Math.round(vector.x * halfWidth + halfWidth),
		y: Math.round(-vector.y * halfHeight + halfHeight)
	};
	return result;
}

function onDocumentMouseDown(event) {

	event.preventDefault();

	mouse.x = (event.clientX / renderer.domElement.clientWidth) * 2 - 1;
	mouse.y = -(event.clientY / renderer.domElement.clientHeight) * 2 + 1;

	raycaster.setFromCamera(mouse, camera);

	var intersects = raycaster.intersectObjects(objects);

	if (intersects.length > 0) {
		selectObjectForDifferentActions(intersects[0].object);
	}

}
//将3D世界的坐标转为当前视角所对应的2D世界的坐标
function change3dTo2d(position) {
	var modRes = Math.round((targetAnger + Math.PI / 4) / Math.PI * 2) % 4;
	//alert(modRes)
	if (Math.abs(modRes) < 0.01) {
		return {
			x: position.x - position.y,
			z: position.z + position.y
		}
	} else if (Math.abs(modRes - 1) < 0.01) {
		return {
			x: position.x - position.y,
			z: position.z - position.y
		}
	} else if (Math.abs(modRes - 2) < 0.01) {
		return {
			x: position.x + position.y,
			z: position.z - position.y
		}
	} else if (Math.abs(modRes - 3) < 0.01) {
		return {
			x: position.x + position.y,
			z: position.z + position.y
		}
	} else if (Math.abs(modRes) < 0.01) {
		return {
			x: position.x - position.y,
			z: position.z + position.y
		}
	} else if (Math.abs(modRes + 1) < 0.01) {
		return {
			x: position.x + position.y,
			z: position.z + position.y
		}
	} else if (Math.abs(modRes + 2) < 0.01) {
		return {
			x: position.x + position.y,
			z: position.z - position.y
		}
	} else if (Math.abs(modRes + 3) < 0.01) {
		return {
			x: position.x - position.y,
			z: position.z - position.y
		}
	}
}
//根据当前视角获取对应的平面邻接矩阵
function getWhichMatrix() {
	var modRes = Math.round((targetAnger + Math.PI / 4) / Math.PI * 2) % 4;
	if (Math.abs(modRes) < 0.01) {
		return face1;
	} else if (Math.abs(modRes - 1) < 0.01) {
		return face2;
	} else if (Math.abs(modRes - 2) < 0.01) {
		return face3;
	} else if (Math.abs(modRes - 3) < 0.01) {
		return face4;
	} else if (Math.abs(modRes + 1) < 0.01) {
		return face4;
	} else if (Math.abs(modRes + 2) < 0.01) {
		return face3;
	} else if (Math.abs(modRes + 3) < 0.01) {
		return face2;
	}
}

//根据当前视角获取对应的平面地图
function getWhichMap() {
	var modRes = Math.round((targetAnger + Math.PI / 4) / Math.PI * 2) % 4;
	if (Math.abs(modRes) < 0.01) {
		return map2d1;
	} else if (Math.abs(modRes - 1) < 0.01) {
		return map2d2;
	} else if (Math.abs(modRes - 2) < 0.01) {
		return map2d3;
	} else if (Math.abs(modRes - 3) < 0.01) {
		return map2d4;
	} else if (Math.abs(modRes + 1) < 0.01) {
		return map2d4;
	} else if (Math.abs(modRes + 2) < 0.01) {
		return map2d3;
	} else if (Math.abs(modRes + 3) < 0.01) {
		return map2d2;
	}
}

function selectObjectForDifferentActions(obj) {
	if (cameraAnger != targetAnger) {
		return;
	}
	switch (obj.name) {
		case "mapRoad":
			{
				if (!clickMove) {
					var start2dPoint = change3dTo2d({
						x: startPoint.position.x / STEP,
						y: startPoint.position.y / STEP - 1,
						z: startPoint.position.z / STEP
					});
					var end2dPoint = change3dTo2d({
						x: obj.position.x / STEP,
						y: obj.position.y / STEP,
						z: obj.position.z / STEP
					});
					console.log((end2dPoint.x + (face1.matrixRow >> 1)) + "---" + (end2dPoint.z + (face1.matrixCol >> 1)) + "------" + JSON.stringify(obj.position))
					var path = search(start2dPoint.x + (face1.matrixRow >> 1), start2dPoint.z + (face1.matrixCol >> 1), end2dPoint.x + (face1.matrixRow >> 1), end2dPoint.z + (face1.matrixCol >> 1), getWhichMatrix())
					if (path) {
						movePath = [];
						clickMove = true;
						movePointer = 0;
						var thisMap = getWhichMap();
						for (var i = 0; i < path.length; i++) {
							movePath.push(thisMap.bind3d[path[i].x][path[i].y])
						}
					}
				} else {
					var index = movePointer;
					var thisPosition = movePath[index];
					var start2dPoint = change3dTo2d({
						x: thisPosition.x,
						y: thisPosition.y,
						z: thisPosition.z
					});
					var end2dPoint = change3dTo2d({
						x: obj.position.x / STEP,
						y: obj.position.y / STEP,
						z: obj.position.z / STEP
					});
					var path = search(start2dPoint.x + (face1.matrixRow >> 1), start2dPoint.z + (face1.matrixCol >> 1), end2dPoint.x + (face1.matrixRow >> 1), end2dPoint.z + (face1.matrixCol >> 1), getWhichMatrix())
					if (path) {
						movePath = [];
						clickMove = true;
						movePointer = 0;
						var thisMap = getWhichMap();
						for (var i = 0; i < path.length; i++) {
							movePath.push(thisMap.bind3d[path[i].x][path[i].y])
						}
					}
				}
				/*var geometry = new THREE.SphereGeometry(STEP / 4, 32, 32);
				var material = new THREE.MeshLambertMaterial({
					color: 0xff8800,
					overdraw: 0.2
				});
				var thisPoint = new THREE.Mesh(geometry, material);
				thisPoint.position.x = obj.position.x;
				thisPoint.position.y = obj.position.y + STEP;
				thisPoint.position.z = obj.position.z;
				thisPoint.rotation.x = Math.PI / 4;
				thisPoint.rotation.z = Math.PI / 4;
				scene.add(thisPoint);*/

				break;
			}
		case "endPoint":
			{
				break;
			}
	}
}

function drawMap(map) {
	if (map.hasRotateBtn) {
		createRotateBtn();
	}
	objects = [];
	for (var i = 0; i < map.box.length; i++) {
		var geometry = new THREE.BoxGeometry(STEP, STEP, STEP);
		var material;
		if (map.texture) {
			material = new THREE.MeshLambertMaterial({
				color: map.box[i][3] || map.boxColor,
				map: new THREE.TextureLoader().load("img/texture/1.jpg"),
				overdraw: 0.5
			});
		} else {
			material = new THREE.MeshLambertMaterial({
				color: map.box[i][3] || map.boxColor,
				overdraw: 0.5
			});
		}

		var cube = new THREE.Mesh(geometry, material);
		cube.position.x = map.box[i][0] * STEP;
		cube.position.y = map.box[i][1] * STEP;
		cube.position.z = map.box[i][2] * STEP;

		cube.name = "mapRoad";
		scene.add(cube);
		objects.push(cube);
		//将地图信息映射到二维数组，可能需要补丁地图
		map2d1[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)][map.box[i][2] + map.box[i][1] + (map.colN >> 1)] = 0;
		map2d2[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)][map.box[i][2] - map.box[i][1] + (map.colN >> 1)] = 0;
		map2d3[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)][map.box[i][2] - map.box[i][1] + (map.colN >> 1)] = 0;
		map2d4[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)][map.box[i][2] + map.box[i][1] + (map.colN >> 1)] = 0;

		if (map2d1.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)]) {
			map2d1.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)][map.box[i][2] + map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		} else {
			map2d1.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)] = [];
			map2d1.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)][map.box[i][2] + map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		}
		if (map2d2.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)]) {
			map2d2.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)][map.box[i][2] - map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		} else {
			map2d2.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)] = [];
			map2d2.bind3d[map.box[i][0] - map.box[i][1] + (map.rowN >> 1)][map.box[i][2] - map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		}
		if (map2d3.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)]) {
			map2d3.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)][map.box[i][2] - map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		} else {
			map2d3.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)] = [];
			map2d3.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)][map.box[i][2] - map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		}
		if (map2d4.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)]) {
			map2d4.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)][map.box[i][2] + map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		} else {
			map2d4.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)] = [];
			map2d4.bind3d[map.box[i][0] + map.box[i][1] + (map.rowN >> 1)][map.box[i][2] + map.box[i][1] + (map.colN >> 1)] = {
				x: map.box[i][0],
				y: map.box[i][1],
				z: map.box[i][2],
				stairs: map.box[i].stairs || false
			};
		}
	}
	//算是楼梯的路径
	if (map.stairs) {
		for (var i = 0; i < map.stairs.length; i++) {
			var geometry = new THREE.BoxGeometry(STEP, STEP, STEP);
			var material;
			if (map.texture) {
				material = new THREE.MeshLambertMaterial({
					color: map.box[i][3] || map.boxColor,
					map: new THREE.TextureLoader().load("img/texture/1.jpg"),
					overdraw: 0.5
				});
			} else {
				material = new THREE.MeshLambertMaterial({
					color: map.box[i][3] || map.boxColor,
					overdraw: 0.5
				});
			}
			var cube = new THREE.Mesh(geometry, material);
			cube.position.x = map.stairs[i][0] * STEP;
			cube.position.y = map.stairs[i][1] * STEP;
			cube.position.z = map.stairs[i][2] * STEP;

			cube.name = "mapRoad";
			scene.add(cube);
			objects.push(cube);
			//将地图信息映射到二维数组，可能需要补丁地图
			map2d1[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] + map.stairs[i][1] + (map.colN >> 1)] = 0;
			map2d2[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] - map.stairs[i][1] + (map.colN >> 1)] = 0;
			map2d3[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] - map.stairs[i][1] + (map.colN >> 1)] = 0;
			map2d4[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] + map.stairs[i][1] + (map.colN >> 1)] = 0;

			if (map2d1.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)]) {
				map2d1.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] + map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			} else {
				map2d1.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)] = [];
				map2d1.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] + map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			}
			if (map2d2.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)]) {
				map2d2.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] - map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			} else {
				map2d2.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)] = [];
				map2d2.bind3d[map.stairs[i][0] - map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] - map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			}
			if (map2d3.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)]) {
				map2d3.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] - map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			} else {
				map2d3.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)] = [];
				map2d3.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] - map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			}
			if (map2d4.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)]) {
				map2d4.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] + map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			} else {
				map2d4.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)] = [];
				map2d4.bind3d[map.stairs[i][0] + map.stairs[i][1] + (map.rowN >> 1)][map.stairs[i][2] + map.stairs[i][1] + (map.colN >> 1)] = {
					x: map.stairs[i][0],
					y: map.stairs[i][1],
					z: map.stairs[i][2],
					stairs: true
				};
			}
		}
	}

	//绘制特殊形状但是仍然是路径的东西
	if (map.box2) {
		for (var i = 0; i < map.box2.length; i++) {
			//console.log(map.box2[i].vertices)
			var geometry = new THREE.BoxGeometry(STEP, STEP, STEP);
			geometry.vertices = eval("(" + map.box2[i].vertices + ")");
			geometry.mergeVertices();
			var material;
			if (map.texture) {
				material = new THREE.MeshLambertMaterial({
					color: map.box2[i][3] || map.boxColor,
					map: new THREE.TextureLoader().load("img/texture/1.jpg"),
					overdraw: 0.5
				});
			} else {
				material = new THREE.MeshLambertMaterial({
					color: map.box2[i][3] || map.boxColor,
					overdraw: 0.5
				});
			}

			var cube = new THREE.Mesh(geometry, material);
			cube.position.x = map.box2[i].position[0] * STEP;
			cube.position.y = map.box2[i].position[1] * STEP;
			cube.position.z = map.box2[i].position[2] * STEP;
			cube.rotation.y = map.box2[i].rotation;
			cube.name = "mapRoad";
			scene.add(cube);
			objects.push(cube);
			//将地图信息映射到二维数组，可能需要补丁地图
			map2d1[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] + map.box2[i].position[1] + (map.colN >> 1)] = 0;
			map2d2[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] - map.box2[i].position[1] + (map.colN >> 1)] = 0;
			map2d3[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] - map.box2[i].position[1] + (map.colN >> 1)] = 0;
			map2d4[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] + map.box2[i].position[1] + (map.colN >> 1)] = 0;

			if (map2d1.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)]) {
				map2d1.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] + map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			} else {
				map2d1.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)] = [];
				map2d1.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] + map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			}
			if (map2d2.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)]) {
				map2d2.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] - map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			} else {
				map2d2.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)] = [];
				map2d2.bind3d[map.box2[i].position[0] - map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] - map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			}
			if (map2d3.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)]) {
				map2d3.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] - map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			} else {
				map2d3.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)] = [];
				map2d3.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] - map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			}
			if (map2d4.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)]) {
				map2d4.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] + map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			} else {
				map2d4.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)] = [];
				map2d4.bind3d[map.box2[i].position[0] + map.box2[i].position[1] + (map.rowN >> 1)][map.box2[i].position[2] + map.box2[i].position[1] + (map.colN >> 1)] = {
					x: map.box2[i].position[0],
					y: map.box2[i].position[1],
					z: map.box2[i].position[2],
					stairs: map.box2[i].stairs || false
				};
			}
		}
	}

	//console.log(JSON.stringify(map2d1))
	setMatrixData(map2d1, face1);
	setMatrixData(map2d2, face2);
	setMatrixData(map2d3, face3);
	setMatrixData(map2d4, face4);

	var geometry = new THREE.SphereGeometry(map.startPoint[0] * STEP, 32);
	var material = new THREE.MeshLambertMaterial({
		color: 0x349aff,
		overdraw: 0.2
	});
	startPoint = new THREE.Mesh(geometry, material);
	startPoint.position.x = map.startPoint[1] * STEP;
	startPoint.position.y = map.startPoint[2] * STEP;
	startPoint.position.z = map.startPoint[3] * STEP;
	startPoint.name = "startPoint";
	targetPosition = {
		x: startPoint.position.x,
		y: startPoint.position.y,
		z: startPoint.position.z
	};
	scene.add(startPoint);
	//objects.push(startPoint);
	material = new THREE.MeshLambertMaterial({
		color: 0x00ff00,
		overdraw: 0.2
	});
	geometry = new THREE.OctahedronGeometry(map.endPoint[0] * STEP);
	endPoint = new THREE.Mesh(geometry, material);
	endPoint.position.x = map.endPoint[1] * STEP;
	endPoint.position.y = map.endPoint[2] * STEP;
	endPoint.position.z = map.endPoint[3] * STEP;
	endPoint.name = "endPoint"
	scene.add(endPoint);
	//objects.push(endPoint);
	//添加地板
	//	geometry = new THREE.PlaneGeometry(800, 800, 20, 20);
	//	geometry.rotateX(-Math.PI / 2);
	//	for (var i = 0, l = geometry.vertices.length; i < l; i++) {
	//		var vertex = geometry.vertices[i];
	//		vertex.x += Math.random() * 20 - 10;
	//		vertex.y += Math.random() * 20;
	//		vertex.z += Math.random() * 20 - 10;
	//	}
	//	for (var i = 0, l = geometry.faces.length; i < l; i++) {
	//		var face = geometry.faces[i];
	//		face.vertexColors[0] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
	//		face.vertexColors[1] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
	//		face.vertexColors[2] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
	//	}
	//	material = new THREE.MeshLambertMaterial({
	//		vertexColors: THREE.VertexColors
	//	});
	//	mesh = new THREE.Mesh(geometry, material);
	//	mesh.position.y = -100;
	//	scene.add(mesh);

	for (var i = 0; i < map.building.length; i++) {
		var geometry = new THREE.BoxGeometry(map.building[i][0] * STEP, map.building[i][1] * STEP, map.building[i][2] * STEP);
		var material;
		if (map.texture) {
			material = new THREE.MeshLambertMaterial({
				map: new THREE.TextureLoader().load("img/texture/1.jpg"),
				color: map.building[i][6] || map.boxColor,
				overdraw: 0.5,
				transparent: true,
				opacity: map.building[i][7] || 1,
			});
		} else {
			material = new THREE.MeshLambertMaterial({
				color: map.building[i][6] || map.boxColor,
				overdraw: 0.5,
				transparent: true,
				opacity: map.building[i][7] || 1,
			});
		}

		var cube = new THREE.Mesh(geometry, material);
		cube.position.x = map.building[i][3] * STEP;
		cube.position.y = map.building[i][4] * STEP;
		cube.position.z = map.building[i][5] * STEP;
		scene.add(cube);
	}

	if (map.building2) {
		for (var i = 0; i < map.building2.length; i++) {
			var geometry = new THREE.BoxGeometry(STEP, STEP, STEP);
			geometry.vertices = eval("(" + map.building2[i].vertices + ")");
			geometry.mergeVertices();
			var material = new THREE.MeshLambertMaterial({
				color: map.building2[i].color || map.boxColor,
				overdraw: 0.5,
				transparent: true,
				opacity: map.building2[i][7] || 1,
			});
			var cube = new THREE.Mesh(geometry, material);
			cube.position.x = map.building2[i].position[0] * STEP;
			cube.position.y = map.building2[i].position[1] * STEP;
			cube.position.z = map.building2[i].position[2] * STEP;
			if (map.building2[i].rotationY) {
				cube.rotation.y = map.building2[i].rotationY;
			}
			if (map.building2[i].rotationZ) {
				cube.rotation.z = map.building2[i].rotationZ;
			}
			scene.add(cube);
		}
	}

	//如果需要补丁地图，补丁应当打在邻接表
	if (map.patch) {
		if (map.patch.vertMap1) {
			for (var i = 0; i < map.patch.vertMap1.length; i++) {
				face1.vertexArray[map.patch.vertMap1[i].index] = map.patch.vertMap1[i].touch;
				face1.vertexArray[map.patch.vertMap1[i].index].stairs = true;
			}
		}
		if (map.patch.vertMap2) {
			for (var i = 0; i < map.patch.vertMap2.length; i++) {
				face2.vertexArray[map.patch.vertMap2[i].index] = map.patch.vertMap2[i].touch;
				face2.vertexArray[map.patch.vertMap2[i].index].stairs = true;
			}
		}
		if (map.patch.vertMap3) {
			for (var i = 0; i < map.patch.vertMap3.length; i++) {
				face3.vertexArray[map.patch.vertMap3[i].index] = map.patch.vertMap3[i].touch;
				face3.vertexArray[map.patch.vertMap3[i].index].stairs = true;
			}
		}
		if (map.patch.vertMap4) {
			for (var i = 0; i < map.patch.vertMap4.length; i++) {
				face4.vertexArray[map.patch.vertMap4[i].index] = map.patch.vertMap4[i].touch;
				face4.vertexArray[map.patch.vertMap4[i].index].stairs = true;
			}
		}
	}

	if (map.gameNewSetting) {
		map.gameNewSetting(window, document);
	}
}

function drawUI(map) {
	clearScene()
	var STEP = 6;
	for (var i = 0; i < map.building.length; i++) {
		var geometry = new THREE.BoxGeometry(map.building[i][0] * STEP, map.building[i][1] * STEP, map.building[i][2] * STEP);
		var material = new THREE.MeshLambertMaterial({
			//			color: map.building[i][6] || map.boxColor,
			overdraw: 0.5,
			transparent: true,
			//			opacity:0.5
		});
		var cube = new THREE.Mesh(geometry, material);
		cube.position.x = map.building[i][3] * STEP + 60;
		cube.position.y = map.building[i][4] * STEP + 160;
		cube.position.z = map.building[i][5] * STEP + 60;
		scene.add(cube);
		camera.lookAt(scene.position);
	}

	geometry = new THREE.PlaneGeometry(1800, 1800, 20, 20);
	geometry.rotateX(-Math.PI / 2);
	for (var i = 0, l = geometry.vertices.length; i < l; i++) {
		var vertex = geometry.vertices[i];
		vertex.x += Math.random() * 20 - 10;
		vertex.y += Math.random() * 20;
		vertex.z += Math.random() * 20 - 10;
	}
	for (var i = 0, l = geometry.faces.length; i < l; i++) {
		var face = geometry.faces[i];
		face.vertexColors[0] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
		face.vertexColors[1] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
		face.vertexColors[2] = new THREE.Color().setHSL(Math.random() * 0.3 + 0.5, 0.75, Math.random() * 0.25 + 0.75);
	}
	material = new THREE.MeshLambertMaterial({
		vertexColors: THREE.VertexColors
	});
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.y = -100;
	scene.add(mesh);
}

function clearScene() {
	var allChildren = scene.children;
	for (var i = 0; i < allChildren.length; i++) {
		if (allChildren[i] instanceof THREE.Mesh) {
			scene.remove(allChildren[i]);
		}
	}
}

function onWindowResize() {
	camera.left = window.innerWidth / -2;
	camera.right = window.innerWidth / 2;
	camera.top = window.innerHeight / 2;
	camera.bottom = window.innerHeight / -2;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}

function hideIframe(str) {
	$("iframe").animateCss(str);
}

function clearWorld() {
	clickMove = false;
	movePath = null;
	$("#world").empty();
	isClearWorld = false;
}

function createWorld(map) {
	$("iframe").remove()
	init(map.mapScale);
	startGame(map);
	animate();

	$("canvas").bind("touchstart", function(e) {
		var touch = e.originalEvent.targetTouches[0];
		var oLeft = Math.floor(touch.clientX);
		var oTop = Math.floor(touch.clientY);
		addEffect(oLeft - 20, oTop - 20);
	}).bind("click", function(e) {
		var oEvent = e || event;
		var oLeft = oEvent.clientX;
		var oTop = oEvent.clientY;
		addEffect(oLeft - 20, oTop - 20);
	})
}

function animate() {
	//如果出现要毁灭世界的情况
	if (isClearWorld) {
		return;
	}
	//正常情况下执行以下函数
	requestAnimationFrame(animate);
	stats.begin();
	render();
	if (gameCurrentMap) {
		gameCurrentMap.gameEvent(startPoint.position, endPoint.position, window, document);
	}
	stats.end();
}

function changeCameraAnger() {
	if (cameraAnger > targetAnger) {
		if (cameraAnger - targetAnger < ANGER_STEP * 1.1) {
			cameraAnger = targetAnger;
		} else {
			cameraAnger -= ANGER_STEP;
		}
	} else if (cameraAnger < targetAnger) {
		if (targetAnger - cameraAnger < ANGER_STEP * 1.1) {
			cameraAnger = targetAnger;
		} else {
			cameraAnger += ANGER_STEP;
		}
	}
};

var tmpPosition = {};

function changePointMove() {
	if (clickMove) {
		if (movePointer < movePath.length) {
			targetPosition.x = movePath[movePointer].x * STEP;
			targetPosition.y = movePath[movePointer].y * STEP + STEP;
			targetPosition.z = movePath[movePointer].z * STEP;
			var movesp = 0;
			if (movePath[movePointer].stairs && movePointer > 0 && movePath[movePointer - 1].stairs) {
				movesp = -1;
			} else {
				movesp = 0;
			}
			if (Math.abs(targetPosition.x - startPoint.position.x) > (MOVE_SPEED + movesp)) {
				if (targetPosition.x > startPoint.position.x) {
					startPoint.position.x += MOVE_SPEED + movesp;
				} else if (targetPosition.x < startPoint.position.x) {
					startPoint.position.x -= MOVE_SPEED + movesp;
				}
			} else {
				startPoint.position.x = targetPosition.x;
			}
			if (Math.abs(targetPosition.y - startPoint.position.y) > (MOVE_SPEED + movesp)) {
				if (targetPosition.y > startPoint.position.y) {
					startPoint.position.y += MOVE_SPEED + movesp;
				} else if (targetPosition.y < startPoint.position.y) {
					startPoint.position.y -= MOVE_SPEED + movesp;
				}
			} else {
				startPoint.position.y = targetPosition.y;
			}
			if (Math.abs(targetPosition.z - startPoint.position.z) > (MOVE_SPEED + movesp)) {
				if (targetPosition.z > startPoint.position.z) {
					startPoint.position.z += MOVE_SPEED + movesp;
				} else if (targetPosition.z < startPoint.position.z) {
					startPoint.position.z -= MOVE_SPEED + movesp;
				}
			} else {
				startPoint.position.z = targetPosition.z;
			}
			checkIsAtSameY()
		} else {
			if (tmpPosition.x != null && tmpPosition.x != undefined) {
				console.log(JSON.stringify(tmpPosition))
				startPoint.position.x = tmpPosition.x * STEP;
				startPoint.position.y = tmpPosition.y * STEP + STEP;
				startPoint.position.z = tmpPosition.z * STEP;
				tmpPosition = {};
			}
			clickMove = false;
			movePointer = 0;
			movePath = [];
		}
	}
}

function checkIsAtSameY() {
	//	return;
	if (targetPosition.x == startPoint.position.x && targetPosition.y == startPoint.position.y && targetPosition.z == startPoint.position.z) {
		if (tmpPosition.x != null && tmpPosition.x != undefined) {
			startPoint.position.x = tmpPosition.x * STEP;
			startPoint.position.y = tmpPosition.y * STEP + STEP;
			startPoint.position.z = tmpPosition.z * STEP;
			movePath[movePointer].x = tmpPosition.x;
			movePath[movePointer].y = tmpPosition.y;
			movePath[movePointer].z = tmpPosition.z;
			tmpPosition = {};
		}
		movePointer++;
		if (movePointer >= movePath.length) {
			return;
		}
		if (movePath[movePointer].stairs && movePointer > 0 && movePath[movePointer - 1].stairs) {
			return;
		}
		if (movePointer < movePath.length && startPoint.position.y < movePath[movePointer].y * STEP + STEP) {
			var modRes = (targetAnger + Math.PI / 4) / Math.PI * 2 % 4;
			if (Math.abs(modRes) < 0.01) {
				startPoint.position.x += movePath[movePointer].y * STEP + STEP - startPoint.position.y;
				startPoint.position.z -= movePath[movePointer].y * STEP + STEP - startPoint.position.y;
			} else if (Math.abs(modRes - 1) < 0.01) {
				startPoint.position.x += movePath[movePointer].y * STEP + STEP - startPoint.position.y;
				startPoint.position.z += movePath[movePointer].y * STEP + STEP - startPoint.position.y;
			} else if (Math.abs(modRes - 2) < 0.01) {
				startPoint.position.x -= movePath[movePointer].y * STEP + STEP - startPoint.position.y;
				startPoint.position.z += movePath[movePointer].y * STEP + STEP - startPoint.position.y;
			} else if (Math.abs(modRes - 3) < 0.01) {
				startPoint.position.x -= movePath[movePointer].y * STEP + STEP - startPoint.position.y;
				startPoint.position.z -= movePath[movePointer].y * STEP + STEP - startPoint.position.y;
			} else if (Math.abs(modRes + 1) < 0.01) {
				startPoint.position.x -= movePath[movePointer].y * STEP + STEP - startPoint.position.y;
				startPoint.position.z -= movePath[movePointer].y * STEP + STEP - startPoint.position.y;
			} else if (Math.abs(modRes + 2) < 0.01) {
				startPoint.position.x -= movePath[movePointer].y * STEP + STEP - startPoint.position.y;
				startPoint.position.z += movePath[movePointer].y * STEP + STEP - startPoint.position.y;
			} else if (Math.abs(modRes + 3) < 0.01) {
				startPoint.position.x += movePath[movePointer].y * STEP + STEP - startPoint.position.y;
				startPoint.position.z += movePath[movePointer].y * STEP + STEP - startPoint.position.y;
			}
			startPoint.position.y = movePath[movePointer].y * STEP + STEP;
		} else if (movePointer < movePath.length && startPoint.position.y > movePath[movePointer].y * STEP + STEP) {
			tmpPosition = {};
			tmpPosition.x = movePath[movePointer].x;
			tmpPosition.y = movePath[movePointer].y;
			tmpPosition.z = movePath[movePointer].z;
			var modRes = (targetAnger + Math.PI / 4) / Math.PI * 2 % 4;
			if (Math.abs(modRes) < 0.01) {
				movePath[movePointer].x -= movePath[movePointer].y + 1 - startPoint.position.y / STEP;
				movePath[movePointer].z += movePath[movePointer].y + 1 - startPoint.position.y / STEP;
			} else if (Math.abs(modRes - 1) < 0.01) {
				movePath[movePointer].x -= movePath[movePointer].y + 1 - startPoint.position.y / STEP;
				movePath[movePointer].z -= movePath[movePointer].y + 1 - startPoint.position.y / STEP;
			} else if (Math.abs(modRes - 2) < 0.01) {
				movePath[movePointer].x += movePath[movePointer].y + 1 - startPoint.position.y / STEP;
				movePath[movePointer].z -= movePath[movePointer].y + 1 - startPoint.position.y / STEP;
			} else if (Math.abs(modRes - 3) < 0.01) {
				movePath[movePointer].x += movePath[movePointer].y + 1 - startPoint.position.y / STEP;
				movePath[movePointer].z += movePath[movePointer].y + 1 - startPoint.position.y / STEP;
			} else if (Math.abs(modRes + 1) < 0.01) {
				movePath[movePointer].x += movePath[movePointer].y + 1 - startPoint.position.y / STEP;
				movePath[movePointer].z += movePath[movePointer].y + 1 - startPoint.position.y / STEP;
			} else if (Math.abs(modRes + 2) < 0.01) {
				movePath[movePointer].x += movePath[movePointer].y + 1 - startPoint.position.y / STEP;
				movePath[movePointer].z -= movePath[movePointer].y + 1 - startPoint.position.y / STEP;
			} else if (Math.abs(modRes + 3) < 0.01) {
				movePath[movePointer].x -= movePath[movePointer].y + 1 - startPoint.position.y / STEP;
				movePath[movePointer].z -= movePath[movePointer].y + 1 - startPoint.position.y / STEP;
			}
			movePath[movePointer].y = startPoint.position.y / STEP - 1;
		}
	}
}

function render() {
	var timer = Date.now() * 0.0001;
	changeCameraAnger();
	changePointMove();
	if (gameCurrentMap && gameCurrentMap.cameraLook) {
		camera.position.x = gameCurrentMap.cameraLook.x + Math.cos(cameraAnger) * 400;
		camera.position.z = gameCurrentMap.cameraLook.z + Math.sin(cameraAnger) * 400;
		camera.position.y = gameCurrentMap.cameraLook.y + 200 * Math.sqrt(2);
		camera.lookAt(gameCurrentMap.cameraLook);
	} else {
		camera.position.x = startPoint.position.x + Math.cos(cameraAnger) * 400;
		camera.position.z = startPoint.position.z + Math.sin(cameraAnger) * 400;
		camera.position.y = startPoint.position.y + 200 * Math.sqrt(2);
		camera.lookAt(startPoint.position);
	}

	directionalLight.position.x = 2 * Math.cos(cameraAnger + Math.PI / 5);
	directionalLight.position.z = 2 * Math.sin(cameraAnger + Math.PI / 5);

	renderer.render(scene, camera);

}

//不知道为什么第二次调用动态脚本时，脚本的上下文环境不对了
function endGame(theWindow, theDocument) {
	isClearWorld = true;
	var iframe = theDocument.createElement("iframe");
	$(iframe).addClass("levelDiv").attr("src", "scoreboard.html").show().animateCss("fadeIn");
	theDocument.body.appendChild(iframe);
}

function openScoreBoard() {
	$('.scoreBoard').show().animateCss('flipInY');
	var arr = document.getElementsByClassName("row");
	setTimeout(function() {
		$(arr[0]).show().animateCss('flipInX');
	}, 1000);
	setTimeout(function() {
		$(arr[1]).show().animateCss('flipInX');
	}, 1500);
	setTimeout(function() {
		$(arr[2]).show().animateCss('flipInX');
	}, 2000);
	setTimeout(function() {
		$(arr[3]).show().animateCss('flipInX');
	}, 2500);
}
//openScoreBoard()