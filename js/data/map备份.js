var demoMap = {
	box: [
		[5.5, 0.5, 0.5, 6, 8, 5]
	],
	building: [
		[5.5, 0.5, 0.5, 6, 8, 5]
	],
	startPoint: [0.4, 0, 0, 2],
	endPoint: [0.4, 6, 3, 0],
	map45: [],
	boxColor: 0xff00ff,
	colN: 40,
	rowN: 40,
	gameNewSetting: function() {
		//一些关卡的特殊设置
	},
	gameEvent: function(startPoint, endPoint) {
		//游戏循环所要调用的脚本
	}
}

var map3 = {
	hasRotateBtn:true,
	urlData: "chapter=第三章&name=阶梯",
	box: [
		[6, -2, -6],
		[5, -3, -4],
		[5, -3, -3],
		[5, -3, -2],
		[5, -3, -1],
		[5, -2, 4],
		[5, -2, 3],
		[5, -2, 2],
		[5, -2, 1],

		[4, -3, 6],
		[3, -3, 6],
		[2, -3, 6],
		[1, -3, 6],
		[0, -3, 6],
		[-2, -2, 6],
		[-3, -2, 6],
		[-4, -2, 6],
		[-5, -2, 6],
		[-7, -3, 7],
		[-7, -3, 6],
		[-7, -3, 5],
		[-7, -3, 4],
		[-7, -3, 3],
		[-7, -2, 1],
		[-7, -2, 0],
		[-7, -2, -1],
		[-7, -2, -2],
		[-7, -2, -3],
		[-7, -2, -4],
		[-8, -3, -5],
		[-7, -3, -5],
		[-6, -3, -5],
		[-5, -3, -5],
		[-4, -3, -5],
		[-3, -3, -5],
		[-1, -2, -5],
		[0, -2, -5],
		[1, -2, -5],
		[2, -2, -5],
		[3, -2, -5],
		[4, -2, -5],
	],
	box2: [{
		rotation: Math.PI / 2,
		color: 0xffffff,
		position: [-7, -2, -5],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	},{
		rotation: 0,//Math.PI / 2,
		color: 0xff8800,
		position: [5, -2, -5],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}],
	building: [
		[1, 1, 1, 5, -3, 0],
		[1, 0.2, 1, 5, -2.4, 0.2],
		[1, 0.2, 1, 5, -2.2, 0.4],
		[1, 0.2, 1, 5, -2.0, 0.6],
		[1, 0.2, 1, 5, -1.8, 0.8],
		[1, 1, 1, -1, -3, 6],
		[1, 0.2, 1, -1.2, -2.4, 6],
		[1, 0.2, 1, -1.4, -2.2, 6],
		[1, 0.2, 1, -1.6, -2.0, 6],
		[1, 0.2, 1, -1.8, -1.8, 6],
		[1, 1, 1, -7, -3, 2],
		[1, 0.2, 1, -7, -2.4, 1.8],
		[1, 0.2, 1, -7, -2.2, 1.6],
		[1, 0.2, 1, -7, -2.0, 1.4],
		[1, 0.2, 1, -7, -1.8, 1.2],
//		[0.0000001, 1, 1, -6.50000005, -2, -2],
//		[1, 0.0000001, 1, -7, -1.50000005, -2],
		[1, 1, 1, -2, -3, -5],
		[1, 0.2, 1, -1.8, -2.4, -5],
		[1, 0.2, 1, -1.6, -2.2, -5],
		[1, 0.2, 1, -1.4, -2.0, -5],
		[1, 0.2, 1, -1.2, -1.8, -5],
//		[1, 1, 0.0000001, 3, -2, -4.50000005],
//		[1, 0.0000001, 1, 3, -1.50000005, -4],
	],
	patch: {
		vertMap1: [{
			index: 1136,
			touch: [1135, 1099]
		}, {
			index: 1099,
			touch: [1136, 1100]
		}],
		vertMap2: [{
			index: 1103,
			touch: [1104, 1142]
		}, {
			index: 1142,
			touch: [1103, 1141]
		}],
		vertMap3: [{
			index: 943,
			touch: [944, 902]
		}, {
			index: 902,
			touch: [943, 901]
		}],
		vertMap4: [{
			index: 896,
			touch: [895, 939]
		}, {
			index: 939,
			touch: [896, 940]
		}],
		//		vertMap3: [{
		//			index: 1136,
		//			touch: [1135, 1099]
		//		}, {
		//			index: 1099,
		//			touch: [1136,1100]
		//		}],
		//		vertMap4: [{
		//			index: 1136,
		//			touch: [1135, 1099]
		//		}, {
		//			index: 1099,
		//			touch: [1136,1100]
		//		}],
	},
	startPoint: [0.4, 6, -1, -6],
	endPoint: [0.4, 5, -3, -5],
	map45: [],
	boxColor: 0xff8800,
	colN: 40,
	rowN: 40,
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		//游戏循环所要调用的脚本
		//console.log(startPoint.x+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
		if (startPoint.x && startPoint.x == endPoint.x && startPoint.y == endPoint.y && startPoint.z == endPoint.z) {
			//console.log(startPoint[1]+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
			theWindow.endGame(theWindow, theDocument);
			theWindow.gameCurrentMap = null;
		}
	}
}
map3.box[8].stairs = true;
map3.box[4].stairs = true;

var map4 = {
	hasRotateBtn:true,
	urlData: "chapter=第三章&name=待定",
	box: [
		[5, -3, -5],
		[5, -3, -4],
		[5, -3, -3],
		[5, -3, -2],
		[5, -3, -1],
		[5, -3, 0],
		[5, -3, 1],
		[5, -3, 2],
		[5, -3, 3],
		[5, -3, 4],
		[5, -3, 5],
		[4, -3, -5],
		[3, -3, -5],
		[2, -3, -5],
		[1, -3, -5],
		[0, -3, -5],
		[-1, -3, -5],
		[-2, -3, -5],
		[-3, -3, -5],
		[-4, -3, -5],
		[-5, -3, -5],
		[-5, -3, -4],
		[-5, -3, -3],
		[-5, -3, -2],
		[-5, -3, -1],
		[-5, -3, 0],
		[-5, -3, 1],
		[-5, -3, 2],
		[-5, -3, 3],
		[-5, -3, 4],
		[-5, -3, 5],
		[-4, -3, 5],
		[-3, -3, 5],
		[-2, -3, 5],
		[-1, -3, 5],
		[0, -3, 5],
		[1, -3, 5],
		[2, -3, 5],
		[3, -3, 5],
		[4, -3, 5],
		[-5, 6, -5],
		[5, 6, 5],

	],
	building: [
		[0.1, 8, 0.1, 5.45, 1.5, 5.45],
		[0.1, 8, 0.1, 4.55, 1.5, 5.45],
		[0.1, 8, 0.1, 5.45, 1.5, 4.55],
		[0.1, 8, 0.1, 4.55, 1.5, 4.55],
		[0.1, 8, 0.1, -5.45, 1.5, -5.45],
		[0.1, 8, 0.1, -4.55, 1.5, -5.45],
		[0.1, 8, 0.1, -5.45, 1.5, -4.55],
		[0.1, 8, 0.1, -4.55, 1.5, -4.55],

		[6, 6, 6, 0, 1, 0, 0xcc6600],
	],
	patch: {
		vertMap1: [{
			index: 1132,
			touch: [1092, 1133, 791]
		}, {
			index: 791,
			touch: [1132]
		}]
	},
	startPoint: [0.4, 5, -2, -5],
	endPoint: [0.4, 5, -3, -5],
	map45: [],
	boxColor: 0xff8800,
	colN: 40,
	rowN: 40,
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		//游戏循环所要调用的脚本
		//console.log(startPoint.x+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
		if (startPoint.x && startPoint.x == endPoint.x && startPoint.y == endPoint.y && startPoint.z == endPoint.z) {
			//console.log(startPoint[1]+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
			theWindow.endGame(theWindow, theDocument);
			theWindow.gameCurrentMap = null;
		}
	}
}
