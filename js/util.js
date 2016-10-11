function addMaskDiv() {
	var hdiv = document.createElement("div");
	hdiv.style.position = "fixed";
	hdiv.style.top="0";
	hdiv.style.display="none";
	hdiv.style.width = "100%";
	hdiv.style.height = "100%";
	hdiv.style.backgroundColor = "#000000";
	document.getElementById("world").appendChild(hdiv);
//	console.log(hdiv)
	$(hdiv).fadeIn(1000);
}

//克隆一个对象，如果直接等号复制，则把关卡本身就修改了
function clone(obj) {
	function Fn() {}
	Fn.prototype = obj;
	var o = new Fn();
	for (var a in o) {
		if (typeof o[a] == "object") {
			o[a] = clone(o[a]);
		}
	}
	return o;
}

//为animate.css创建jquery方法
$.fn.extend({
	animateCss: function(animationName) {
		var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
		$(this).addClass('animated ' + animationName).one(animationEnd, function() {
			$(this).removeClass('animated ' + animationName);
		});
	}
});

function UrlData() {
	var name, value;
	var str = location.href; //取得整个地址栏
	var num = str.indexOf("?")
	str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
	var arr = str.split("&"); //各个参数放到数组里
	for (var i = 0; i < arr.length; i++) {
		num = arr[i].indexOf("=");
		if (num > 0) {
			name = arr[i].substring(0, num);
			value = arr[i].substr(num + 1);
			this[name] = value;
		}
	}
}

/*
 * @brief: 定义队列类
 * @remark:实现队列基本功能
 */
function Queue() {
	//存储元素数组
	var aElement = new Array();
	/*
	 * @brief: 元素入队
	 * @param: vElement元素列表
	 * @return: 返回当前队列元素个数
	 * @remark: 1.EnQueue方法参数可以多个
	 *    2.参数为空时返回-1
	 */
	Queue.prototype.EnQueue = function(vElement) {
			if (arguments.length == 0)
				return -1;
			//元素入队
			for (var i = 0; i < arguments.length; i++) {
				aElement.push(arguments[i]);
			}
			return aElement.length;
		}
		/*
		 * @brief: 元素出队
		 * @return: vElement
		 * @remark: 当队列元素为空时,返回null
		 */
	Queue.prototype.DeQueue = function() {
			if (aElement.length == 0)
				return null;
			else
				return aElement.shift();
		}
		/*
		 * @brief: 获取队列元素个数
		 * @return: 元素个数
		 */
	Queue.prototype.GetSize = function() {
			return aElement.length;
		}
		/*
		 * @brief: 返回队头素值
		 * @return: vElement
		 * @remark: 若队列为空则返回null
		 */
	Queue.prototype.GetHead = function() {
			if (aElement.length == 0)
				return null;
			else
				return aElement[0];
		}
		/*
		 * @brief: 返回队尾素值
		 * @return: vElement
		 * @remark: 若队列为空则返回null
		 */
	Queue.prototype.GetEnd = function() {
			if (aElement.length == 0)
				return null;
			else
				return aElement[aElement.length - 1];
		}
		/*
		 * @brief: 将队列置空
		 */
	Queue.prototype.MakeEmpty = function() {
			aElement.length = 0;
		}
		/*
		 * @brief: 判断队列是否为空
		 * @return: 队列为空返回true,否则返回false
		 */
	Queue.prototype.IsEmpty = function() {
			if (aElement.length == 0)
				return true;
			else
				return false;
		}
		/*
		 * @brief: 将队列元素转化为字符串
		 * @return: 队列元素字符串
		 */
	Queue.prototype.toString = function() {
		var sResult = (aElement.reverse()).toString();
		aElement.reverse()
		return sResult;
	}
}