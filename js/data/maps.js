var MAP_INDEX = 0;

var UI = {
	building: [
		//梦的两横
		[5.5, 0.5, 0.5, 6, 8, 5],
		[5.5, 0.5, 0.5, -1, 8, 5],
		//梦的两竖
		[0.5, 7.5, 0.5, 6, 7, 5],
		[0.5, 7.5, 0.5, -1, 7, 5],
		//梦的两撇
		[0.5, 0.5, 0.5, 6.5, 7.5, 5],
		[0.5, 0.5, 0.5, 7, 7, 5],
		[0.5, 0.5, 0.5, 7, 6.5, 5],
		[0.5, 0.5, 0.5, 7.5, 6, 5],
		[0.5, 0.5, 0.5, 7.5, 5.5, 5],
		[0.5, 0.5, 0.5, 8, 5, 5],
		[0.5, 0.5, 0.5, 8, 4.5, 5],
		//-----------------------------------
		[0.5, 0.5, 0.5, -0.5, 7.5, 5],
		[0.5, 0.5, 0.5, 0, 7, 5],
		[0.5, 0.5, 0.5, 0, 6.5, 5],
		[0.5, 0.5, 0.5, 0.5, 6, 5],
		[0.5, 0.5, 0.5, 0.5, 5.5, 5],
		[0.5, 0.5, 0.5, 1, 5, 5],
		[0.5, 0.5, 0.5, 1, 4.5, 5],

		//梦的两捺
		[0.5, 0.5, 0.5, 5.5, 7.5, 5],
		[0.5, 0.5, 0.5, 5, 7, 5],
		[0.5, 0.5, 0.5, 5, 6.5, 5],
		[0.5, 0.5, 0.5, 4.5, 6, 5],
		[0.5, 0.5, 0.5, 4.5, 5.5, 5],
		[0.5, 0.5, 0.5, 4, 5, 5],
		[0.5, 0.5, 0.5, 4, 4.5, 5],
		//-----------------------------------
		[0.5, 0.5, 0.5, -1.5, 7.5, 5],
		[0.5, 0.5, 0.5, -2, 7, 5],
		[0.5, 0.5, 0.5, -2, 6.5, 5],
		[0.5, 0.5, 0.5, -2.5, 6, 5],
		[0.5, 0.5, 0.5, -2.5, 5.5, 5],
		[0.5, 0.5, 0.5, -3, 5, 5],
		[0.5, 0.5, 0.5, -3, 4.5, 5],

		//梦的一撇
		[0.5, 0.5, 0.5, 2, 3, 5],
		[0.5, 0.5, 0.5, 2.5, 2.5, 5],
		[0.5, 0.5, 0.5, 3, 2.5, 5],
		[0.5, 0.5, 0.5, 3.5, 2, 5],
		[0.5, 0.5, 0.5, 4, 2, 5],
		[0.5, 0.5, 0.5, 4.5, 1.5, 5],
		[0.5, 0.5, 0.5, 5, 1.5, 5],
		[0.5, 0.5, 0.5, 5.5, 1.5, 5],

		//梦的一横撇
		[1.5, 0.5, 0.5, 1.5, 2, 5],
		[1.5, 0.5, 0.5, 0, 1.5, 5],
		[0.5, 1.5, 0.5, -1, 0.5, 5],
		[0.5, 1, 0.5, -0.5, -0.5, 5],
		[0.5, 1, 0.5, 0, -1.5, 5],
		[0.5, 0.5, 0.5, 0.5, -2.25, 5],
		[0.5, 0.5, 0.5, 1, -2.75, 5],
		[1, 0.5, 0.5, 1.75, -3.25, 5],
		[1, 0.5, 0.5, 2.75, -3.75, 5],
		[1, 0.5, 0.5, 3.75, -4.25, 5],
		[1, 0.5, 0.5, 4.75, -4.75, 5],

		//梦的一点
		[0.5, 1, 0.5, 3.5, 1.25, 5],
		[0.5, 1, 0.5, 3, 0.25, 5],
		[0.5, 0.5, 0.5, 2.5, -0.5, 5],
		[0.5, 0.5, 0.5, 2, -1, 5],
		[0.5, 0.5, 0.5, 1.5, -1.5, 5],
		[0.5, 0.5, 0.5, 1, -2, 5],

		//境的横
		[5.5, 0.5, 0.5, -2, 7.5, -4],
		//境的竖
		[0.5, 11.5, 0.5, -2, 6, -4],
		//境的提
		[1.5, 0.5, 0.5, -0, -0.5, -4],
		[2, 0.5, 0.5, -2, 0, -4],
		[2, 0.5, 0.5, -4, 0.5, -4],
	],
	boxColor: 0xff8800,
}

var map1 = {
	cameraLook:{x:0,y:0,z:0},
	mapScale:2.2,
	hasRotateBtn: false,
	urlData: "chapter=第一章&name=惊奇",
	box: [
		[-6, -1, -4],
		[-5, -1, -4],
		[-4, -1, -4],
		[-3, -1, -4],
		[-2, -1, -4],
		[-1, -1, -4],
		[0, -1, -4],
		[0, -1, -3],
		[0, -1, -2],
		[0, -1, -1],
		[0, -1, -0],
		[0, -1, 1],
		[0, -1, 2],
		[0, 5, 3],
		[6, 2, 0],
		[6, 2, 1],
		[6, 2, 2],
		[6, 2, 3],
		[6, 2, 4],
		[6, 2, 5],
		[6, 2, 6],
		[5, 2, 6],
		[4, 2, 6]
	],
	building: [
		[0.1, 5, 0.1, 0.45, 2, 3.45],
		[0.1, 5, 0.1, -0.45, 2, 3.45],
		[0.1, 5, 0.1, -0.45, 2, 2.55],
		[0.1, 5, 0.1, 0.45, 2, 2.55],
		[1, 2, 1, 0, -0.5, 3],
		[0.1, 2, 0.1, 6.45, 3.5, 0.45],
		[0.1, 2, 0.1, 6.45, 3.5, -0.45],
		[0.1, 2, 0.1, 5.55, 3.5, -0.45],
		[0.1, 2, 0.1, 5.55, 3.5, 0.45],
		[1, 1, 1, 6, 5, 0],
		[0.8, 0.2, 0.8, 6, 5.6, 0],
		[0.6, 0.2, 0.6, 6, 5.8, 0],
		[0.4, 0.2, 0.4, 6, 6, 0],
		[0.2, 0.2, 0.2, 6, 6.2, 0],
	],
	startPoint: [0.4, 0, 0, 2],
	endPoint: [0.4, 6, 3, 0],
	map45: [],
	boxColor: 0xff00ff,
	colN: 40,
	rowN: 40,
	gameNewSetting:function(theWindow, theDocument){
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0x0099ff,
			overdraw: 0.2
		});
		theWindow.gArray=[];
		for(var i=0;i<12;i++){
			var geo=new theWindow.THREE.CylinderGeometry( 4, 4, 200, 32 );
			var mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
			mes.position.x=0;
			mes.position.y=-60;
			mes.position.z=0;
			mes.rotation.x=Math.PI/2;
			mes.rotation.z=Math.PI/12*i;
			theWindow.gArray.push(mes);
			theWindow.scene.add( mes );
		}
		
		theWindow.aGeometry=new theWindow.THREE.CylinderGeometry( 95, 95, 10, 32 );
		theWindow.targetBridgeAngle=-Math.PI/4;
		theWindow.cylinder = new theWindow.THREE.Mesh( theWindow.aGeometry, theWindow.aMaterial ); 
		theWindow.cylinder.position.x=0;
		theWindow.cylinder.position.y=-60;
		theWindow.cylinder.position.z=0;
		theWindow.circle1Click=false;
		theWindow.canvasXY;
		theWindow.scene.add( theWindow.cylinder );
		theWindow.circleControl=[theWindow.cylinder];
		bridgeCube=theWindow.camera;
		theDocument.addEventListener('mousedown', function(event){
			if(theWindow.clickMove){
				return;
			}
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.targetAnger;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('mousemove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle;
						theWindow.cameraAnger=theWindow.targetAnger;
					}
					else{
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
						theWindow.cameraAnger=theWindow.targetAnger;
					}
					theWindow.targetBridgeAngle=theWindow.targetAnger;
				}
			}
		}, false);
		theDocument.addEventListener('mouseup', function(event){
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.targetAnger/Math.PI*2+0.5)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg-Math.PI/4;
		}, false);
		theDocument.addEventListener('touchstart', function(event){
			if(theWindow.clickMove){
				return;
			}
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.targetAnger;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('touchmove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.touches[0].clientX-theWindow.canvasXY.x)*(event.touches[0].clientX-theWindow.canvasXY.x)+(event.touches[0].clientY-theWindow.canvasXY.y)*(event.touches[0].clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.touches[0].clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle;
					}
					else{
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
					}
					theWindow.targetBridgeAngle=theWindow.targetAnger;
				}
			}
		}, false);
		theDocument.addEventListener('touchend', function(event){
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.targetAnger/Math.PI*2+0.5)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg-Math.PI/4;
		}, false);
	},
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		if(theWindow.targetAnger-theWindow.targetBridgeAngle>Math.PI){
			theWindow.targetAnger-=2*Math.PI;
			theWindow.cameraAnger=theWindow.targetAnger;
		}else if(theWindow.targetBridgeAngle-theWindow.targetAnger>Math.PI){
			theWindow.targetAnger+=2*Math.PI;
			theWindow.cameraAnger=theWindow.targetAnger;
		}
		if(Math.abs(theWindow.targetBridgeAngle-theWindow.targetAnger)<0.1){
			theWindow.targetAnger=theWindow.targetBridgeAngle;
			theWindow.cameraAnger=theWindow.targetAnger;
		}else if(theWindow.targetBridgeAngle>theWindow.targetAnger){
			theWindow.targetAnger+=0.1;
			theWindow.cameraAnger=theWindow.targetAnger;
		}else{
			theWindow.targetAnger-=0.1;
			theWindow.cameraAnger=theWindow.targetAnger;
		}
		//游戏循环所要调用的脚本
		//console.log(startPoint.x+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
		if (startPoint.x && startPoint.x == endPoint.x && startPoint.y == endPoint.y && startPoint.z == endPoint.z) {
			//console.log(startPoint[1]+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
			theWindow.endGame(theWindow, theDocument);
			theWindow.gameCurrentMap = null;
		}
	}
}

var map2 = {
	mapScale:2.2,
	cameraLook:{x:0,y:0,z:0},
	hasRotateBtn: false,
	urlData: "chapter=第二章&name=迷失",
	box: [
		[0, -2, 6],
		[0, -2, 5],
		[0, -2, 4],
		[0, -2, 3],
		[0, -2, 2],
		[0, -2, 1],
		[0, -2, -1],
		[0, -2, -2],
		[0, -2, -3],
		[0, -2, -4],
		[0, -2, -5],
		[0, -2, -6],
		[5, -1, 0],
		[4, -1, 0],
		[3, -1, 0],
		[2, -1, 0],
		[1, -1, 0],
		[0, -1, 0],
		[-1, -1, 0],
		[-2, -1, 0],
		[-3, -1, 0],
		[-4, -1, 0],
		[-5, -1, 0],
		[4, -2, -2],
		[3, -3, -4],
		[4, -2, -6],
		[4, 4, -6],
		[4, 10, -6],
		[-1, 5, 2],
		[-1, 5, 1],
		[-1, 5, 0],
		[-1, -2, 6],
		[-2, -2, 6],
		[-3, -2, 6],
		[-3, 3, 6],
		[-3, 3, 5],
	],
	building: [
		[1, 1, 1, 0, -2, 0],
		[0.1, 11, 0.1, 4.45, 4, -6.45],
		[0.1, 11, 0.1, 4.45, 4, -5.55],
		[0.1, 11, 0.1, 3.55, 4, -6.45],
		[0.1, 11, 0.1, 3.55, 4, -5.55],
		[0.1, 5, 0.1, -3.45, 1, 6.45],
		[0.1, 5, 0.1, -3.45, 1, 5.55],
		[0.1, 5, 0.1, -2.55, 1, 6.45],
		[0.1, 5, 0.1, -2.55, 1, 5.55],
		//		[13,1,1,0,-3, 6],
		//		[13,1,1,0,-3, -6],
		//		[1,1,13,6,-3, 0],
		//		[1,1,13,-6,-3, 0]
	],
	patch: {

	},
	startPoint: [0.4, 0, -1, -6],
	endPoint: [0.4, 4, 10, -6],
	map45: [],
	boxColor: 0x5566ff,
	colN: 40,
	rowN: 40,
	gameNewSetting: function(theWindow, theDocument) {
		theWindow.collectGems = [];
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0x00ff00,
			overdraw: 0.2
		});
		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = 4 * theWindow.STEP;
		theWindow.collectGem.position.y = 5 * theWindow.STEP;
		theWindow.collectGem.position.z = -6 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);

		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = 4 * theWindow.STEP;
		theWindow.collectGem.position.y = -1 * theWindow.STEP;
		theWindow.collectGem.position.z = -6 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);

		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = -3 * theWindow.STEP;
		theWindow.collectGem.position.y = -1 * theWindow.STEP;
		theWindow.collectGem.position.z = 6 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);

		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = 4 * theWindow.STEP;
		theWindow.collectGem.position.y = 11 * theWindow.STEP;
		theWindow.collectGem.position.z = -6 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);
		
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0x0099ff,
			overdraw: 0.2
		});
		theWindow.gArray=[];
		for(var i=0;i<12;i++){
			var geo=new theWindow.THREE.CylinderGeometry( 4, 4, 200, 32 );
			var mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
			mes.position.x=0;
			mes.position.y=-60;
			mes.position.z=0;
			mes.rotation.x=Math.PI/2;
			mes.rotation.z=Math.PI/12*i;
			theWindow.gArray.push(mes);
			theWindow.scene.add( mes );
		}
		
		theWindow.aGeometry=new theWindow.THREE.CylinderGeometry( 95, 95, 10, 32 );
		theWindow.targetBridgeAngle=-Math.PI/4;
		theWindow.cylinder = new theWindow.THREE.Mesh( theWindow.aGeometry, theWindow.aMaterial ); 
		theWindow.cylinder.position.x=0;
		theWindow.cylinder.position.y=-60;
		theWindow.cylinder.position.z=0;
		theWindow.circle1Click=false;
		theWindow.canvasXY;
		theWindow.scene.add( theWindow.cylinder );
		theWindow.circleControl=[theWindow.cylinder];
		bridgeCube=theWindow.camera;
		theDocument.addEventListener('mousedown', function(event){
			if(theWindow.clickMove){
				return;
			}
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.targetAnger;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('mousemove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle;
						theWindow.cameraAnger=theWindow.targetAnger;
					}
					else{
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
						theWindow.cameraAnger=theWindow.targetAnger;
					}
					theWindow.targetBridgeAngle=theWindow.targetAnger;
				}
			}
		}, false);
		theDocument.addEventListener('mouseup', function(event){
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.targetAnger/Math.PI*2+0.5)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg-Math.PI/4;
		}, false);
		theDocument.addEventListener('touchstart', function(event){
			if(theWindow.clickMove){
				return;
			}
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.targetAnger;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('touchmove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.touches[0].clientX-theWindow.canvasXY.x)*(event.touches[0].clientX-theWindow.canvasXY.x)+(event.touches[0].clientY-theWindow.canvasXY.y)*(event.touches[0].clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.touches[0].clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle;
					}
					else{
						theWindow.targetAnger=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
					}
					theWindow.targetBridgeAngle=theWindow.targetAnger;
				}
			}
		}, false);
		theDocument.addEventListener('touchend', function(event){
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.targetAnger/Math.PI*2+0.5)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg-Math.PI/4;
		}, false);
	},
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		if(theWindow.targetAnger-theWindow.targetBridgeAngle>Math.PI){
			theWindow.targetAnger-=2*Math.PI;
			theWindow.cameraAnger=theWindow.targetAnger;
		}else if(theWindow.targetBridgeAngle-theWindow.targetAnger>Math.PI){
			theWindow.targetAnger+=2*Math.PI;
			theWindow.cameraAnger=theWindow.targetAnger;
		}
		if(Math.abs(theWindow.targetBridgeAngle-theWindow.targetAnger)<0.1){
			theWindow.targetAnger=theWindow.targetBridgeAngle;
			theWindow.cameraAnger=theWindow.targetAnger;
		}else if(theWindow.targetBridgeAngle>theWindow.targetAnger){
			theWindow.targetAnger+=0.1;
			theWindow.cameraAnger=theWindow.targetAnger;
		}else{
			theWindow.targetAnger-=0.1;
			theWindow.cameraAnger=theWindow.targetAnger;
		}
		//游戏循环所要调用的脚本
		//收集到4个宝石则过关
		if (theWindow.collectGems.length < 1) {
			//console.log(startPoint[1]+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
			theWindow.endGame(theWindow, theDocument);
			theWindow.gameCurrentMap = null;

			//释放内存
			theWindow.collectGems = undefined;
			return;
		}

		for (var i = 0; i < theWindow.collectGems.length; i++) {
			if (startPoint.x == theWindow.collectGems[i].position.x && startPoint.y == theWindow.collectGems[i].position.y && startPoint.z == theWindow.collectGems[i].position.z) {
				theWindow.scene.remove(theWindow.collectGems[i]);
				theWindow.collectGems.remove(theWindow.collectGems[i]);
			}
		}
	}
}

var map3 = {
	mapScale:2.2,
	hasRotateBtn: true,
	urlData: "chapter=第三章&name=悬浮体",
	box: [
		[-5, 11, -5],
		[5, 11, 5],
		[0, -2, -0],
		[0, -3, -2],
		[0, 0, 14],
		[7, -3, -7],
		[7, -3, -6],
		[7, -3, -5],
		[7, -3, -4],
		[7, -3, -3],
		[7, -3, -2],
		[7, -3, -1],
		[6, -3, -7],
		[5, -3, -7],
		[4, -3, -7],
		[3, -3, -7],
		[2, -3, -7],
		[1, -3, -7],
		[-7, -3, 1],
		[-7, -3, 2],
		[-7, -3, 3],
		[-7, -3, 4],
		[-7, -3, 5],
		[-7, -3, 6],
		[-7, -3, 7],
		[-6, -3, 7],
		[-5, -3, 7],
		[-4, -3, 7],
		[-3, -3, 7],
		[-2, -3, 7],
		[-1, -3, 7],
		[0, -3, -7],
		[-7, -3, 0],

		[7, -3, 0],
		[0, -3, 7],
		[4, -3, -4],
		[4, -3, -3],
		[4, -3, -2],
		[4, -3, -1],
		[4, -3, -0],
		[4, -3, 1],
		[4, -3, 2],
		[3, -2, 4],
		[2, -2, 4],
		[1, -2, 4],
		[0, -2, 4],
		[-2, -3, 3],
		[-3, -3, 3],
		[-3, -3, 2],
		[-3, -3, 1],
		[-3, -3, 0],
		[-3, -3, -1],
		[-3, -3, -2],
		[-3, -3, -3],
		[-2, -3, -3],
		[-1, -3, -3],
		[0, -3, -3],
		[7, -3, 1],
		[7, -3, 2],
		[7, -3, 3],
		[1, -3, 7],
		[2, -3, 7],
		[3, -3, 7],
		[-7, -3, -1],
		[-7, -3, -2],
		[-7, -3, -3],
		[-1, -3, -7],
		[-2, -3, -7],
		[-3, -3, -7],

		[1, 0, 14],
		[2, 0, 14],
		[5, 1, 14],
		[6, 1, 14],
		[7, 1, 14],
		[5, 1, 15],
		[6, 1, 15],
		[7, 1, 15],
		[5, 1, 16],
		[6, 1, 16],
		[7, 1, 16],
		[12, 2, 16],
		[12, 2, 17],
		[12, 2, 18],
		[12, 2, 19],
		[11, 2, 17],
		[11, 2, 18],
		[11, 2, 19],
		[13, 2, 17],
		[13, 2, 18],
		[13, 2, 19],
		[-11, 2, -16],
		[-11, 2, -17],
		[-11, 2, -18],
		[-12, 2, -16],
		[-12, 2, -17],
		[-12, 2, -18],
		[-13, 2, -16],
		[-13, 2, -17],
		[-13, 2, -18],
		[-1, 0, -14],
		[-0, 0, -14],
		[-5, 3, -17],
		[-5, 3, -18],
		[-5, 3, -19],
		[-5, 3, -20],
		[-5, 3, -21],
		[-5, 3, -22],
		[-4, 3, -20],
		[-4, 3, -21],
		[-4, 3, -22],
		[-6, 3, -20],
		[-6, 3, -21],
		[-6, 3, -22],
	],
	box2: [],
	building: [
		[1, 1, 2, 0, -3, -0.5],
		//		[1, 3, 1, 3, -2, -4, 0xff0000],
		[1, 1, 1, 6, 10, 5],
		[1, 1, 1, 5, 10, 6],
		[2, 1, 1, 6.5, 9, 5],
		[1, 1, 2, 5, 9, 6.5],
		[1, 1, 1, -6, 10, -5],
		[1, 1, 1, -5, 10, -6],
		[2, 1, 1, -6.5, 9, -5],
		[1, 1, 2, -5, 9, -6.5],

		[1, 0.2, 1, 5.2, 11.2, 5],
		[1, 0.2, 1, 5.4, 11, 5],
		[1, 0.2, 1, 5.6, 10.8, 5],
		[1, 0.2, 1, 5.8, 10.6, 5],

		[1, 0.2, 1, 6.2, 10.2, 5],
		[1, 0.2, 1, 6.4, 10, 5],
		[1, 0.2, 1, 6.6, 9.8, 5],
		[1, 0.2, 1, 6.8, 9.6, 5],

		[1, 0.2, 1, 5, 11.2, 5.2],
		[1, 0.2, 1, 5, 11, 5.4],
		[1, 0.2, 1, 5, 10.8, 5.6],
		[1, 0.2, 1, 5, 10.6, 5.8],

		[1, 0.2, 1, 5, 10.2, 6.2],
		[1, 0.2, 1, 5, 10, 6.4],
		[1, 0.2, 1, 5, 9.8, 6.6],
		[1, 0.2, 1, 5, 9.6, 6.8],

		[1, 0.2, 1, -5.2, 11.2, -5],
		[1, 0.2, 1, -5.4, 11, -5],
		[1, 0.2, 1, -5.6, 10.8, -5],
		[1, 0.2, 1, -5.8, 10.6, -5],

		[1, 0.2, 1, -6.2, 10.2, -5],
		[1, 0.2, 1, -6.4, 10, -5],
		[1, 0.2, 1, -6.6, 9.8, -5],
		[1, 0.2, 1, -6.8, 9.6, -5],

		[1, 0.2, 1, -5, 11.2, -5.2],
		[1, 0.2, 1, -5, 11, -5.4],
		[1, 0.2, 1, -5, 10.8, -5.6],
		[1, 0.2, 1, -5, 10.6, -5.8],

		[1, 0.2, 1, -5, 10.2, -6.2],
		[1, 0.2, 1, -5, 10, -6.4],
		[1, 0.2, 1, -5, 9.8, -6.6],
		[1, 0.2, 1, -5, 9.6, -6.8],

		[1, 0.2, 1, -0, -2.4, -0.8],
		[1, 0.2, 1, -0, -2.2, -0.6],
		[1, 0.2, 1, -0, -2, -0.4],
		[1, 0.2, 1, -0, -1.8, -0.2],
		//		[1, 1, 1, 0, -2, 0, 0x0088ff],
		//		[5, 1, 5, 0, -3, 0, 0x0088ff],
	],
	box2: [{
		rotation: 0,
		color: 0xff8800,
		position: [8, 9, 5],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}, {
		rotation: -Math.PI / 2,
		color: 0xff8800,
		position: [5, 9, 8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}, {
		rotation: Math.PI,
		color: 0xff8800,
		position: [-8, 9, -5],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}, {
		rotation: Math.PI / 2,
		color: 0xff8800,
		position: [-5, 9, -8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}, {
		rotation: 0,
		color: 0xff8800,
		position: [3, 0, 14],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}],
	patch: {
		vertMap1: [{
			index: 481,
			touch: [576, 429]
		}, {
			index: 576,
			touch: [481]
		}, {
			index: 429,
			touch: [481]
		}, {
			index: 991,
			touch: [1092, 1239]
		}, {
			index: 1092,
			touch: [991]
		}, {
			index: 1239,
			touch: [991, 1289]
		}, {
			index: 1420,
			touch: [1373, 1419]
		}, {
			index: 1373,
			touch: [1420]
		}],
		vertMap2: [{
			index: 969,
			touch: [1221, 1074]
		}, {
			index: 1221,
			touch: [969, 1271]
		}, {
			index: 1074,
			touch: [969, 1075]
		}, {
			index: 459,
			touch: [558, 411]
		}, {
			index: 558,
			touch: [459, 557]
		}, {
			index: 411,
			touch: [459]
		}, {
			index: 1426,
			touch: [1377, 1425]
		}, {
			index: 1377,
			touch: [1426]
		}],
		vertMap3: [{
			index: 2069,
			touch: [2121, 1974]
		}, {
			index: 2121,
			touch: [2069]
		}, {
			index: 1974,
			touch: [2069]
		}, {
			index: 1559,
			touch: [1311, 1458]
		}, {
			index: 1311,
			touch: [1559, 1261]
		}, {
			index: 1458,
			touch: [1559]
		}, {
			index: 1126,
			touch: [1177, 1125]
		}, {
			index: 1177,
			touch: [1126]
		}],
		vertMap4: [{
			index: 1581,
			touch: [1476, 1329]
		}, {
			index: 1476,
			touch: [1581, 1475]
		}, {
			index: 1329,
			touch: [1581, 1279]
		}, {
			index: 2091,
			touch: [2139, 1992]
		}, {
			index: 2139,
			touch: [2091]
		}, {
			index: 1992,
			touch: [2091, 1993]
		}, {
			index: 1120,
			touch: [1173, 1119]
		}, {
			index: 1173,
			touch: [1120]
		}]
	},
	startPoint: [0.4, 7, -2, -7],
	endPoint: [0.6, 0, -1, 0],
	map45: [],
	boxColor: 0xff8800,
	colN: 50,
	rowN: 50,
	gameNewSetting: function(theWindow, theDocument) {
		theWindow.collectGems = [];
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0x00ff00,
			overdraw: 0.2
		});
		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = 6 * theWindow.STEP;
		theWindow.collectGem.position.y = 2 * theWindow.STEP;
		theWindow.collectGem.position.z = 15 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);
		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = 12 * theWindow.STEP;
		theWindow.collectGem.position.y = 3 * theWindow.STEP;
		theWindow.collectGem.position.z = 18 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);
		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = -12 * theWindow.STEP;
		theWindow.collectGem.position.y = 3 * theWindow.STEP;
		theWindow.collectGem.position.z = -17 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);
		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = -5 * theWindow.STEP;
		theWindow.collectGem.position.y = 4 * theWindow.STEP;
		theWindow.collectGem.position.z = -21 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);
	},
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		if (startPoint.x == endPoint.x && startPoint.y == endPoint.y && startPoint.z == endPoint.z) {
			//console.log(startPoint[1]+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
			theWindow.endGame(theWindow, theDocument);
			theWindow.gameCurrentMap = null;
		}
		console.log(startPoint.x+"+"+endPoint.x+"==="+startPoint.y+"+"+endPoint.y+"==="+startPoint.z+"+"+endPoint.z);
		//游戏循环所要调用的脚本
		//收集到4个宝石则过关

		if (theWindow.collectGems) {
			if (theWindow.collectGems.length < 1) {
				theWindow.startPoint.position.x = 4 * theWindow.STEP;
				theWindow.startPoint.position.y = -2 * theWindow.STEP;
				theWindow.startPoint.position.z = -4 * theWindow.STEP;
				//释放内存
				theWindow.collectGems = undefined;
				return;
			}
			for (var i = 0; i < theWindow.collectGems.length; i++) {
				if (startPoint.x == theWindow.collectGems[i].position.x && startPoint.y == theWindow.collectGems[i].position.y && startPoint.z == theWindow.collectGems[i].position.z) {
					theWindow.scene.remove(theWindow.collectGems[i]);
					theWindow.collectGems.remove(theWindow.collectGems[i]);
				}
			}
		}
	}
}

map3.box[0].stairs = true;
map3.box[1].stairs = true;
map3.box[2].stairs = true;
map3.box[3].stairs = true;
//map3.box[4].stairs = true;
map3.box2[0].stairs = true;
map3.box2[1].stairs = true;
map3.box2[2].stairs = true;
map3.box2[3].stairs = true;

var map4 = {
	cameraLook:{x:80,y:0,z:0},
	mapScale:1.5,
	hasRotateBtn: true,
	urlData: "chapter=第四章&name=幻桥",
	box: [
		[12,-4,-7],[12,-4,-6],[12,-4,-5],[12,-4,-4],[12,-4,-3],[11,-4,-2],[12,-4,-2],[13,-4,-2],
	],
	building: [
		[30,1,30,4.5,-5,0,0x68acff],
		[4.5,1,15,15.25,-4,0,0x00ff00],
		[4.5,1,15,8.75,-4,0,0x00ff00],
		[3,1,10,12,-4,2.5,0x00ff00],
		[9,1,15,-4,-4,0,0x00ff00],
		[2,1,5,12,-4,-5],
		[5.2,0.1,5.2,12,6,0,0xaa9933],
		[5.2,0.1,5.2,12,5,0,0xaa9933],
		[5.2,0.1,5.2,12,9.5,0,0xaa9933],
		[5.2,0.1,5.2,12,10.5,0,0xaa9933],
		[5.2,0.1,5.2,12,14,0,0xaa9933],
		[5.2,0.1,5.2,12,15,0,0xaa9933],
		[5.2,0.1,5.2,12,18.5,0,0xaa9933],
		[5.2,0.1,5.2,12,19.5,0,0xaa9933],
		[5,19,5,12,10,0,0xaa9933],
		[2,5,6,12,-2,0.5,0xaa9933],
		
		[2.5,5,7,14.25,-2,0,0xaa9933],
		[2.5,5,7,9.75,-2,0,0xaa9933],
		[2,1,1,12,0,-3,0xaa9933],
		[0.5,5,1,13,-3,-3.25,0xaa9933],
		[0.5,5,1,11,-3,-3.25,0xaa9933],
		[2,0.5,1,12,-0.5,-3.25,0xaa9933],
		[5.2,0.1,5.2,-4,6,0,0xaa9933],
		[5.2,0.1,5.2,-4,5,0,0xaa9933],
		[5.2,0.1,5.2,-4,9.5,0,0xaa9933],
		[5.2,0.1,5.2,-4,10.5,0,0xaa9933],
		[5,12,5,-4,5.5,0,0xaa9933],
		[7,5,7,-4,-2,0,0xaa9933],
		
		[12,1,3,4,1,0,0xaa9933],
		[12,1,0.5,4,1.5,-1.5,0xaa9933],
		[12,1,0.5,4,1.5,1.5,0xaa9933],
		[3,1,5,-4,1,5,0xaa9933],
		[3,1,6,12,17,-4.5,0xaa9933],
	],
	building2:[{
		rotationY: Math.PI/2,
		color: 0xaa9933,
		position: [11, 17, -8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	},{
		rotationY: Math.PI/2,
		color: 0xaa9933,
		position: [12, 17, -8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	},{
		rotationY: Math.PI/2,
		color: 0xaa9933,
		position: [13, 17, -8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	},{
		rotationY: Math.PI/2,
		rotationZ: Math.PI,
		color: 0xaa9933,
		position: [-3, 1, 8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	},{
		rotationY: Math.PI/2,
		rotationZ: Math.PI,
		color: 0xaa9933,
		position: [-4, 1, 8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	},{
		rotationY: Math.PI/2,
		rotationZ: Math.PI,
		color: 0xaa9933,
		position: [-5, 1, 8],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}],
	patch: {

	},
	startPoint: [0.4, 12, -3, -6],
	endPoint: [0.4, 4, 10, -6],
	map45: [],
	boxColor: 0xff9900,
	colN: 40,
	rowN: 40,
	gameNewSetting: function(theWindow, theDocument) {
		theWindow.collectGems = [];
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0x00ff00,
			overdraw: 0.2
		});
		theWindow.aGeometry = new theWindow.THREE.OctahedronGeometry(0.4 * theWindow.STEP);
		theWindow.collectGem = new theWindow.THREE.Mesh(theWindow.aGeometry, theWindow.aMaterial);
		theWindow.collectGem.position.x = 12 * theWindow.STEP;
		theWindow.collectGem.position.y = -3 * theWindow.STEP;
		theWindow.collectGem.position.z = -3 * theWindow.STEP;
		theWindow.collectGem.name = "collectGem";
		theWindow.scene.add(theWindow.collectGem);
		theWindow.collectGems.push(theWindow.collectGem);
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0xaa9933,
			overdraw: 0.2
		});
		var geo=new theWindow.THREE.CylinderGeometry( 10, 10, 500, 32 );
		var mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
		mes.position.x=190;
		mes.position.y=170;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		//huan
		geo=new theWindow.THREE.CylinderGeometry( 11, 11, 0.1, 32 );
		mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
		mes.position.x=190;
		mes.position.y=120;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.y=100;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.y=210;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.y=190;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.y=300;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.y=280;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.y=390;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.y=370;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.y=120;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.y=100;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.y=210;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.y=190;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.z=50;
		theWindow.scene.add( mes );
		
		geo=new theWindow.THREE.CylinderGeometry( 1, 10, 60, 32 );
		mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
		mes.position.x=190;
		mes.position.y=450;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=190;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=290;
		mes.position.z=50;
		theWindow.scene.add( mes );
		geo=new theWindow.THREE.CylinderGeometry( 1, 45, 130, 32 );
		mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
		mes.position.x=240;
		mes.position.y=450;
		mes.position.z=0;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-80;
		mes.position.y=300;
		mes.position.z=0;
		theWindow.scene.add( mes );
		
		geo=new theWindow.THREE.CylinderGeometry( 10, 10, 260, 32 );
		mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
		mes.position.x=-130;
		mes.position.y=130;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		geo=new theWindow.THREE.CylinderGeometry( 1, 10, 60, 32 );
		mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
		mes.position.x=-130;
		mes.position.y=290;
		mes.position.z=-50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-130;
		mes.position.z=50;
		theWindow.scene.add( mes );
		mes=mes.clone();
		mes.position.x=-30;
		mes.position.z=-50;
		theWindow.scene.add( mes );
	},
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		//游戏循环所要调用的脚本
		//收集到4个宝石则过关
		if (theWindow.collectGems.length < 1) {
//			theWindow.endGame(theWindow, theDocument);
			theWindow.isClearWorld = true;
			theWindow.gameCurrentMap = null;
			theWindow.collectGems = undefined;
			theWindow.addMaskDiv();
			theWindowA=theWindow;
			theDocumentA=theDocument;
			theWindow.setTimeout(function() {
				theWindowA.isClearWorld = false;
				theDocumentA.getElementById("world").innerHTML="";
				theWindowA.parent.window.createWorld(map4_1);
			}, 1000)
			return;
		}

		for (var i = 0; i < theWindow.collectGems.length; i++) {
			if (startPoint.x == theWindow.collectGems[i].position.x && startPoint.y == theWindow.collectGems[i].position.y && startPoint.z == theWindow.collectGems[i].position.z) {
				theWindow.scene.remove(theWindow.collectGems[i]);
				theWindow.collectGems.remove(theWindow.collectGems[i]);
			}
		}
	}
}
var theWindowA,theDocumentA;
var map4_1 = {
	cameraLook:{x:60,y:-50,z:0},
	mapScale:2.2,
//	hasRotateBtn: true,
	urlData: "chapter=第四章&name=幻桥",
	stairs:[
		[3,-4,-2],[-1,-1,-2],[-1,1,1],[7,-4,-7],[4,-2,-7],
	],
	box: [
		[12,-4,-7],[12,-4,-6],[12,-4,-5],[12,-4,-4],[12,-4,-3],[11,-4,-2],[12,-4,-2],[10,-4,-2],[4,-4,-2],
		[-1,1,2],[-1,1,3],[-1,1,4],[0,1,4],[6,1,4],[6,1,3],[6,1,2],[6,1,1],[6,1,0],
		[7,-4,1],[7,-4,2],[7,-4,3],[6,-4,3],[5,-4,3],[4,-4,3],[3,-4,3],[2,-4,3],[1,-4,3],
		[7,-4,-5],[7,-4,-6],[3,-2,-7],
	],
	box2: [{
		rotation: Math.PI/2,
		color: 0xff8800,
		position: [6, 1, -1],
		vertices: "[new THREE.Vector3(STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1, -STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, -STEP>>1),new THREE.Vector3(-STEP>>1, STEP>>1, STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,-STEP>>1),new THREE.Vector3(-STEP>>1,-STEP>>1,STEP>>1)]",
	}],
	building: [
		[0.2,3,3,2.4,-1,-7],
		[1,1,1,2,-4,-2],
		[1,1,1,-1,-1,-1],
		[1,0.2,1,1.8,-3.4,-2],
		[1,0.2,1,1.6,-3.2,-2],
		[1,0.2,1,1.4,-3.0,-2],
		[1,0.2,1,1.2,-2.8,-2],
		[1,0.2,1,1,-2.6,-2],
		[1,0.2,1,0.8,-2.4,-2],
		[1,0.2,1,0.6,-2.2,-2],
		[1,0.2,1,0.4,-2,-2],
		[1,0.2,1,0.2,-1.8,-2],
		[1,0.2,1,0,-1.6,-2],
		[1,0.2,1,-0.2,-1.4,-2],
		[1,0.2,1,-0.4,-1.2,-2],
		[1,0.2,1,-0.6,-1,-2],
		[1,0.2,1,-0.8,-0.8,-2],
		[1,0.2,1,-1,-0.4,-0.8],
		[1,0.2,1,-1,-0.2,-0.6],
		[1,0.2,1,-1,0,-0.4],
		[1,0.2,1,-1,0.2,-0.2],
		[1,0.2,1,-1,0.4,0],
		[1,0.2,1,-1,0.6,0.2],
		[1,0.2,1,-1,0.8,0.4],
		[1,0.2,1,-1,1,0.6],
		[1,0.2,1,-1,1.2,0.8],
		
		[1,1,1,6,-4,-7],
		[1,0.2,1,5.8,-3.4,-7],
		[1,0.2,1,5.6,-3.2,-7],
		[1,0.2,1,5.4,-3,-7],
		[1,0.2,1,5.2,-2.8,-7],
		[1,0.2,1,5,-2.6,-7],
		[1,0.2,1,4.8,-2.4,-7],
		[1,0.2,1,4.6,-2.2,-7],
		[1,0.2,1,4.4,-2,-7],
		[1,0.2,1,4.2,-1.8,-7],
	],
	startPoint: [0.4, 12, -3, -6],
	endPoint: [0.4, 3, -1, -7],
	map45: [],
	boxColor: 0x9999aa,
	colN: 40,
	rowN: 40,
	patch: {
		vertMap1: [{
			index: 1094,
			touch: [817, 1134]
		}, {
			index: 817,
			touch: [1094,742]
		}, {
			index: 742,
			touch: [817,743]
		}, {
			index: 1249,
			touch: [1250,1051]
		}, {
			index: 1051,
			touch: [1249,1011]
		}]
	},
	gameNewSetting: function(theWindow, theDocument) {
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0xaaaaaa,
			overdraw: 0.5
		});
		theWindow.gMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0x888888,
			overdraw: 0.5
		});
		theWindow.gArray=[];
		for(var i=0;i<6;i++){
			var geo=new theWindow.THREE.CylinderGeometry( 4, 4, 100, 32 );
			var mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
			mes.position.x=140;
			mes.position.y=-85;
			mes.position.z=-40;
			mes.rotation.x=Math.PI/2;
			mes.rotation.z=Math.PI/6*i;
			theWindow.gArray.push(mes);
			theWindow.scene.add( mes );
		}
		
		theWindow.aGeometry=new theWindow.THREE.CylinderGeometry( 40, 40, 10, 32 );
		
		theWindow.cylinder = new theWindow.THREE.Mesh( theWindow.aGeometry, theWindow.aMaterial ); 
		theWindow.cylinder.position.x=140;
		theWindow.cylinder.position.y=-85;
		theWindow.cylinder.position.z=-40;
		theWindow.circle1Click=false;
		theWindow.canvasXY;
		theWindow.scene.add( theWindow.cylinder );
		theWindow.circleControl=[theWindow.cylinder];
		
		theWindow.bridge=new theWindow.THREE.BoxGeometry(20, 20, 100);
		theWindow.bridgeCube = new theWindow.THREE.Mesh(theWindow.bridge, theWindow.gMaterial);
		theWindow.bridgeCube.position.x = 140;
		theWindow.bridgeCube.position.y = -80;
		theWindow.bridgeCube.position.z = -40;
		theWindow.targetBridgeAngle=0;
		theWindow.scene.add(theWindow.bridgeCube);
		
		
		theWindow.gArray2=[];
		for(var i=0;i<6;i++){
			var geo=new theWindow.THREE.CylinderGeometry( 4, 4, 100, 32 );
			var mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
			mes.position.x=60;
			mes.position.y=20;
			mes.position.z=80;
			mes.rotation.x=Math.PI/2;
			mes.rotation.z=Math.PI/6*i;
			theWindow.gArray2.push(mes);
			theWindow.scene.add( mes );
		}
		
		theWindow.aGeometry=new theWindow.THREE.CylinderGeometry( 40, 40, 10, 32 );
		
		theWindow.cylinder2 = new theWindow.THREE.Mesh( theWindow.aGeometry, theWindow.aMaterial ); 
		theWindow.cylinder2.position.x=60;
		theWindow.cylinder2.position.y=20;
		theWindow.cylinder2.position.z=80;
		theWindow.circle1Click2=false;
		theWindow.canvasXY2;
		theWindow.scene.add( theWindow.cylinder2 );
		theWindow.circleControl2=[theWindow.cylinder2];
		
		theWindow.bridge2=new theWindow.THREE.BoxGeometry(20, 20, 100);
		theWindow.bridgeCube2 = new theWindow.THREE.Mesh(theWindow.bridge2, theWindow.gMaterial);
		theWindow.bridgeCube2.position.x = 60;
		theWindow.bridgeCube2.position.y = 20;
		theWindow.bridgeCube2.position.z = 80;
		theWindow.targetBridgeAngle2=0;
		theWindow.scene.add(theWindow.bridgeCube2);
		
		theDocument.addEventListener('mousedown', function(event){
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.bridgeCube.rotation.y;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
			theWindow.circleIntersects2 = theWindow.raycaster.intersectObjects(theWindow.circleControl2);
			if(theWindow.circleIntersects2.length>0){
				theWindow.canvasXY2= theWindow.objectToCanvasPoint(circleIntersects2[0].object);
				theWindow.circle1Click2=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY2.x)*(event.clientX-theWindow.canvasXY2.x)+(event.clientY-theWindow.canvasXY2.y)*(event.clientY-theWindow.canvasXY2.y));
				if(distance>0){
					theWindow.clickAngle2=0;
					theWindow.preAngle2=theWindow.bridgeCube2.rotation.y;
					if(event.clientY>theWindow.canvasXY2.y){
						theWindow.clickAngle2=Math.asin((event.clientX-theWindow.canvasXY2.x)/distance);	
					}else{
						theWindow.clickAngle2=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY2.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('mousemove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle;
					}
					else{
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
					}
					theWindow.targetBridgeAngle=theWindow.bridgeCube.rotation.y;
				}
			}
			if(theWindow.circle1Click2){
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY2.x)*(event.clientX-theWindow.canvasXY2.x)+(event.clientY-theWindow.canvasXY2.y)*(event.clientY-theWindow.canvasXY2.y));
				if(distance>0){
					var angle=0;
					if(event.clientY>theWindow.canvasXY2.y){
						angle=Math.asin((event.clientX-theWindow.canvasXY2.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY2.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle2)<Math.PI-0.00001){
						theWindow.bridgeCube2.rotation.y=theWindow.preAngle2+angle-theWindow.clickAngle2;
					}
					else{
						theWindow.bridgeCube2.rotation.y=theWindow.preAngle2+angle-theWindow.clickAngle2+Math.PI;
					}
					theWindow.targetBridgeAngle2=theWindow.bridgeCube2.rotation.y;
				}
			}
		}, false);
		theDocument.addEventListener('mouseup', function(event){
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.bridgeCube.rotation.y/Math.PI*2)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg;
			if(rotateAg==1||rotateAg==3){
				theWindow.face1.vertexArray[1374]=[1414,1134];
				theWindow.face1.vertexArray[1134]=[1374,1094];
				theWindow.face1.vertexArray[1257]=[1258];
				theWindow.face1.vertexArray[1251]=[1250];
			}else{
				theWindow.face1.vertexArray[1257]=[1251,1258];
				theWindow.face1.vertexArray[1251]=[1257,1250];
				theWindow.face1.vertexArray[1374]=[1414];
				theWindow.face1.vertexArray[1134]=[1094];
			}
			
			theWindow.circle1Click2=false;
			rotateAg=(Math.round(theWindow.bridgeCube2.rotation.y/Math.PI*2)%4+4)%4;
			theWindow.targetBridgeAngle2=Math.PI/2*rotateAg;
			if(rotateAg==1||rotateAg==3){
				theWindow.face1.vertexArray[785]=[745,1025];
				theWindow.face1.vertexArray[1025]=[785,1024];
			}else{
				theWindow.face1.vertexArray[785]=[745];
				theWindow.face1.vertexArray[1025]=[1024];
			}
		}, false);
		theDocument.addEventListener('touchstart', function(event){
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.bridgeCube.rotation.y;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
			theWindow.circleIntersects2 = theWindow.raycaster.intersectObjects(theWindow.circleControl2);
			
			if(theWindow.circleIntersects2.length>0){
				theWindow.canvasXY2= theWindow.objectToCanvasPoint(theWindow.circleIntersects2[0].object);
				theWindow.circle1Click2=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY2.x)*(event.clientX-theWindow.canvasXY2.x)+(event.clientY-theWindow.canvasXY2.y)*(event.clientY-theWindow.canvasXY2.y));
				if(distance>0){
					theWindow.clickAngle2=0;
					theWindow.preAngle2=theWindow.bridgeCube2.rotation.y;
					if(event.clientY>theWindow.canvasXY2.y){
						theWindow.clickAngle2=Math.asin((event.clientX-theWindow.canvasXY2.x)/distance);	
					}else{
						theWindow.clickAngle2=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY2.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('touchmove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.touches[0].clientX-theWindow.canvasXY.x)*(event.touches[0].clientX-theWindow.canvasXY.x)+(event.touches[0].clientY-theWindow.canvasXY.y)*(event.touches[0].clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.touches[0].clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle;
					}
					else{
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
					}
					theWindow.targetBridgeAngle=theWindow.bridgeCube.rotation.y;
				}
			}
			if(theWindow.circle1Click2){
				var distance=Math.sqrt((event.touches[0].clientX-theWindow.canvasXY2.x)*(event.touches[0].clientX-theWindow.canvasXY2.x)+(event.touches[0].clientY-theWindow.canvasXY2.y)*(event.touches[0].clientY-theWindow.canvasXY2.y));
				if(distance>0){
					var angle=0;
					if(event.touches[0].clientY>theWindow.canvasXY2.y){
						angle=Math.asin((event.touches[0].clientX-theWindow.canvasXY2.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.touches[0].clientX-theWindow.canvasXY2.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle2)<Math.PI-0.00001){
						theWindow.bridgeCube2.rotation.y=theWindow.preAngle2+angle-theWindow.clickAngle2;
					}
					else{
						theWindow.bridgeCube2.rotation.y=theWindow.preAngle2+angle-theWindow.clickAngle2+Math.PI;
					}
					theWindow.targetBridgeAngle2=theWindow.bridgeCube2.rotation.y;
				}
			}
		}, false);
		theDocument.addEventListener('touchend', function(event){			
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.bridgeCube.rotation.y/Math.PI*2)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg;
			if(rotateAg==1||rotateAg==3){
				theWindow.face1.vertexArray[1374]=[1414,1134];
				theWindow.face1.vertexArray[1134]=[1374,1094];
				theWindow.face1.vertexArray[1257]=[1258];
				theWindow.face1.vertexArray[1251]=[1250];
			}else{
				theWindow.face1.vertexArray[1257]=[1251,1258];
				theWindow.face1.vertexArray[1251]=[1257,1250];
				theWindow.face1.vertexArray[1374]=[1414];
				theWindow.face1.vertexArray[1134]=[1094];
			}
			theWindow.circle1Click2=false;
			rotateAg=(Math.round(theWindow.bridgeCube2.rotation.y/Math.PI*2)%4+4)%4;
			theWindow.targetBridgeAngle2=Math.PI/2*rotateAg;
			if(rotateAg==1||rotateAg==3){
				theWindow.face1.vertexArray[785]=[745,1025];
				theWindow.face1.vertexArray[1025]=[785,1024];
			}else{
				theWindow.face1.vertexArray[785]=[745];
				theWindow.face1.vertexArray[1025]=[1024];
			}
		}, false);
	},
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		if(theWindow.bridgeCube.rotation.y-theWindow.targetBridgeAngle>Math.PI){
			theWindow.bridgeCube.rotation.y-=2*Math.PI;
		}else if(theWindow.targetBridgeAngle-theWindow.bridgeCube.rotation.y>Math.PI){
			theWindow.bridgeCube.rotation.y+=2*Math.PI;
		}
		for(var i=0;i<6;i++){
			theWindow.gArray[i].rotation.z=-theWindow.bridgeCube.rotation.y+i*Math.PI/6;
		}
		
		if(Math.abs(theWindow.targetBridgeAngle-theWindow.bridgeCube.rotation.y)<0.1){
			theWindow.bridgeCube.rotation.y=theWindow.targetBridgeAngle;
		}else if(theWindow.targetBridgeAngle>theWindow.bridgeCube.rotation.y){
			theWindow.bridgeCube.rotation.y+=0.1
		}else{
			theWindow.bridgeCube.rotation.y-=0.1
		}
		
		if(theWindow.bridgeCube2.rotation.y-theWindow.targetBridgeAngle2>Math.PI){
			theWindow.bridgeCube2.rotation.y-=2*Math.PI;
		}else if(theWindow.targetBridgeAngle2-theWindow.bridgeCube2.rotation.y>Math.PI){
			theWindow.bridgeCube2.rotation.y+=2*Math.PI;
		}
		for(var i=0;i<6;i++){
			theWindow.gArray2[i].rotation.z=-theWindow.bridgeCube2.rotation.y+i*Math.PI/6;
		}
		
		if(Math.abs(theWindow.targetBridgeAngle2-theWindow.bridgeCube2.rotation.y)<0.1){
			theWindow.bridgeCube2.rotation.y=theWindow.targetBridgeAngle2;
		}else if(theWindow.targetBridgeAngle2>theWindow.bridgeCube2.rotation.y){
			theWindow.bridgeCube2.rotation.y+=0.1
		}else{
			theWindow.bridgeCube2.rotation.y-=0.1
		}
		
		if (startPoint.x && startPoint.x == endPoint.x && startPoint.y == endPoint.y && startPoint.z == endPoint.z) {
			//console.log(startPoint[1]+"+"+endPoint[1]+startPoint[2]+"+"+endPoint[2]+startPoint[3]+"+"+endPoint[3]);
			theWindow.isClearWorld = true;
			theWindow.gameCurrentMap = null;
			theWindow.collectGems = undefined;
			theWindow.addMaskDiv();
			theWindowA=theWindow;
			theDocumentA=theDocument;
			theWindow.setTimeout(function() {
				theWindowA.isClearWorld = false;
				theDocumentA.getElementById("world").innerHTML="";
				theWindowA.parent.window.createWorld(map4_2);
			}, 1000)
			return;
		}
	}
}

var map4_2 = {
	cameraLook:{x:0,y:0,z:0},
	mapScale:2.2,
	hasRotateBtn: true,
	urlData: "chapter=第四章&name=幻桥",
	box: [
		[6,-1,6],[6,-1,5],[6,-1,4],[6,-1,3],[6,-1,2],[6,-1,1],[6,-1,0],[6,-1,-1],[6,-1,-2],[6,-1,-3],[6,-1,-4],[6,-1,-5],[6,-1,-6],[5,-1,-6],[4,-1,-6],[3,-1,-6],[2,-1,-6],[1,-1,-6],[0,-1,-6],[-1,-1,-6],[-2,-1,-6],[-3,-1,-6],[-4,-1,-6],[-5,-1,-6],[-6,-1,-6],[-6,-1,-5],[-6,-1,-4],[-6,-1,-3],[-6,-1,-2],[-6,-1,-1],[-6,-1,0],[-6,-1,1],[-6,-1,2],[-6,-1,3],[-6,-1,4],[-6,-1,5],[-6,-1,6]
	],
	building: [
//		[1,10,1,0,0,0]
	],
	startPoint: [0.4, 6, 0, 0],
	endPoint: [0.4, 3, -1, -7],
	texture:"1.jpg",
	map45: [],
	boxColor: 0xffaa66,
	colN: 40,
	rowN: 40,
	patch: {
		
	},
	gameNewSetting: function(theWindow, theDocument) {
		theWindow.aMaterial = new theWindow.THREE.MeshLambertMaterial({
			color: 0xaaaaaa,
			overdraw: 0.5
		});
		
		theWindow.bridge=new theWindow.THREE.BoxGeometry(20, 120, 20);
		theWindow.bridgeCube = new theWindow.THREE.Mesh(theWindow.bridge, theWindow.aMaterial);
		theWindow.bridgeCube.position.x = 40;
		theWindow.bridgeCube.position.y = 50;
		theWindow.bridgeCube.position.z = 40;
		theWindow.targetBridgeAngle=0;
		theWindow.scene.add(theWindow.bridgeCube);
		
		theWindow.bridge1=new theWindow.THREE.BoxGeometry(20, 40, 20);
		theWindow.bridgeCube1 = new theWindow.THREE.Mesh(theWindow.bridge1, theWindow.aMaterial);
		theWindow.bridgeCube1.position.x = 40;
		theWindow.bridgeCube1.position.y = 10;
		theWindow.bridgeCube1.position.z = 40;
//		theWindow.targetBridgeAngle=0;
		theWindow.scene.add(theWindow.bridgeCube1);
		
		theWindow.gArray=[];
		for(var i=0;i<12;i++){
			var geo=new theWindow.THREE.CylinderGeometry( 4, 4, 200, 32 );
			var mes=new theWindow.THREE.Mesh( geo, theWindow.aMaterial ); 
			mes.position.x=0;
			mes.position.y=-20;
			mes.position.z=0;
			mes.rotation.x=Math.PI/2;
			mes.rotation.z=Math.PI/12*i;
			theWindow.gArray.push(mes);
			theWindow.scene.add( mes );
		}
		
		theWindow.aGeometry=new theWindow.THREE.CylinderGeometry( 90, 90, 10, 32 );
		
		theWindow.cylinder = new theWindow.THREE.Mesh( theWindow.aGeometry, theWindow.aMaterial ); 
		theWindow.cylinder.position.x=0;
		theWindow.cylinder.position.y=-20;
		theWindow.cylinder.position.z=0;
		theWindow.circle1Click=false;
		theWindow.canvasXY;
		theWindow.scene.add( theWindow.cylinder );
		theWindow.circleControl=[theWindow.cylinder];
		theDocument.addEventListener('mousedown', function(event){
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.bridgeCube.rotation.y;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('mousemove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle;
					}
					else{
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
					}
					theWindow.targetBridgeAngle=theWindow.bridgeCube.rotation.y;
				}
			}
		}, false);
		theDocument.addEventListener('mouseup', function(event){
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.bridgeCube.rotation.y/Math.PI*2)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg;
			if(rotateAg==1||rotateAg==3){
				theWindow.face1.vertexArray[1374]=[1414,1134];
				theWindow.face1.vertexArray[1134]=[1374,1094];
				theWindow.face1.vertexArray[1257]=[1258];
				theWindow.face1.vertexArray[1251]=[1250];
			}else{
				theWindow.face1.vertexArray[1257]=[1251,1258];
				theWindow.face1.vertexArray[1251]=[1257,1250];
				theWindow.face1.vertexArray[1374]=[1414];
				theWindow.face1.vertexArray[1134]=[1094];
			}
		}, false);
		theDocument.addEventListener('touchstart', function(event){
			theWindow.circleIntersects = theWindow.raycaster.intersectObjects(theWindow.circleControl);
			if(theWindow.circleIntersects.length>0){
				theWindow.canvasXY= theWindow.objectToCanvasPoint(theWindow.circleIntersects[0].object);
				theWindow.circle1Click=true;
				var distance=Math.sqrt((event.clientX-theWindow.canvasXY.x)*(event.clientX-theWindow.canvasXY.x)+(event.clientY-theWindow.canvasXY.y)*(event.clientY-theWindow.canvasXY.y));
				if(distance>0){
					theWindow.clickAngle=0;
					theWindow.preAngle=theWindow.bridgeCube.rotation.y;
					if(event.clientY>theWindow.canvasXY.y){
						theWindow.clickAngle=Math.asin((event.clientX-theWindow.canvasXY.x)/distance);	
					}else{
						theWindow.clickAngle=Math.PI*2-Math.asin((event.clientX-theWindow.canvasXY.x)/distance);
					}
				}
			}
		}, false);
		theDocument.addEventListener('touchmove', function(event){
			if(theWindow.circle1Click){
				var distance=Math.sqrt((event.touches[0].clientX-theWindow.canvasXY.x)*(event.touches[0].clientX-theWindow.canvasXY.x)+(event.touches[0].clientY-theWindow.canvasXY.y)*(event.touches[0].clientY-theWindow.canvasXY.y));
				if(distance>0){
					var angle=0;
					if(event.touches[0].clientY>theWindow.canvasXY.y){
						angle=Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);	
					}else{
						angle=Math.PI*2-Math.asin((event.touches[0].clientX-theWindow.canvasXY.x)/distance);
					}
					if(Math.abs(angle-theWindow.clickAngle)<Math.PI-0.00001){
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle;
					}
					else{
						theWindow.bridgeCube.rotation.y=theWindow.preAngle+angle-theWindow.clickAngle+Math.PI;
					}
					theWindow.targetBridgeAngle=theWindow.bridgeCube.rotation.y;
				}
			}
		}, false);
		theDocument.addEventListener('touchend', function(event){
			theWindow.circle1Click=false;
			var rotateAg=(Math.round(theWindow.bridgeCube.rotation.y/Math.PI*2)%4+4)%4;
			theWindow.targetBridgeAngle=Math.PI/2*rotateAg;
			theWindow.circle1Click2=false;
			rotateAg=(Math.round(theWindow.bridgeCube.rotation.y/Math.PI*2)%4+4)%4;
			theWindow.targetBridgeAngle2=Math.PI/2*rotateAg;
		}, false);
		
		
		var material = new theWindow.THREE.MeshLambertMaterial({
			color: 0xffaa66,
			map: new THREE.TextureLoader().load("img/texture/1.jpg"),
			overdraw: 0.5
		});
		var gbox=new theWindow.THREE.BoxGeometry(theWindow.STEP, theWindow.STEP, theWindow.STEP);
		theWindow.abox = new theWindow.THREE.Mesh(gbox, material);
		theWindow.abox.position.x = 40;
		theWindow.abox.position.y = 120;
		theWindow.abox.position.z = 40;
		theWindow.abox.name="mapRoad";
		theWindow.scene.add(theWindow.abox);
		theWindow.objects.push(theWindow.abox);
		theWindow.abox2 = new theWindow.THREE.Mesh(gbox, material);
		theWindow.abox2.position.x = -40;
		theWindow.abox2.position.y = 40;
		theWindow.abox2.position.z = 40;
		theWindow.abox2.name="mapRoad";
		theWindow.scene.add(theWindow.abox2);
		theWindow.objects.push(theWindow.abox2);
	},
	gameEvent: function(startPoint, endPoint, theWindow, theDocument) {
		
		if(theWindow.bridgeCube.rotation.y-theWindow.targetBridgeAngle>Math.PI){
			theWindow.bridgeCube.rotation.y-=2*Math.PI;
		}else if(theWindow.targetBridgeAngle-theWindow.bridgeCube.rotation.y>Math.PI){
			theWindow.bridgeCube.rotation.y+=2*Math.PI;
		}
		for(var i=0;i<12;i++){
			theWindow.gArray[i].rotation.z=-theWindow.bridgeCube.rotation.y+i*Math.PI/12;
		}
		if(Math.abs(theWindow.targetBridgeAngle-theWindow.bridgeCube.rotation.y)<0.1){
			theWindow.bridgeCube.rotation.y=theWindow.targetBridgeAngle;
		}else if(theWindow.targetBridgeAngle>theWindow.bridgeCube.rotation.y){
			theWindow.bridgeCube.rotation.y+=0.1;
		}else{
			theWindow.bridgeCube.rotation.y-=0.1;
		}
		theWindow.bridgeCube1.rotation.y=theWindow.bridgeCube.rotation.y;
		theWindow.bridgeCube.position.z=Math.sin(theWindow.bridgeCube.rotation.y+Math.PI/4*3)*40*Math.sqrt(2);
		theWindow.bridgeCube.position.x=-Math.cos(theWindow.bridgeCube.rotation.y+Math.PI/4*3)*40*Math.sqrt(2);
		theWindow.bridgeCube1.position.z=Math.sin(theWindow.bridgeCube.rotation.y+Math.PI/4)*40*Math.sqrt(2);
		theWindow.bridgeCube1.position.x=-Math.cos(theWindow.bridgeCube.rotation.y+Math.PI/4)*40*Math.sqrt(2);
		
		theWindow.abox.position.x=theWindow.bridgeCube.position.x;
		theWindow.abox.rotation.y=theWindow.bridgeCube.rotation.y;
		theWindow.abox.position.z=theWindow.bridgeCube.position.z;
		theWindow.abox2.position.x=theWindow.bridgeCube1.position.x;
		theWindow.abox2.rotation.y=theWindow.bridgeCube1.rotation.y;
		theWindow.abox2.position.z=theWindow.bridgeCube1.position.z;
	}
}


var MAPS = [map1, map2, map3,map4_2];

//为数组添加删除指定位置元素的方法
Array.prototype.indexOf = function(val) {
	for (var i = 0; i < this.length; i++) {
		if (this[i] == val) return i;
	}
	return -1;
};
Array.prototype.remove = function(val) {
	var index = this.indexOf(val);
	if (index > -1) {
		this.splice(index, 1);
	}
};