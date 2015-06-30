window.onload=function (){
    //获取局部class函数
    function oldgetclass(parentId,oclass) {
    	var parent=document.getElementById(parentId);
    	var tags=parent.all ? parent.all : parent.getElementsByTagName('*');
    	var arr=new Array();
    	for (var i = 0; i < tags.length; i++) {
    		if (tags[i].className==oclass){
    			arr.push(tags[i]);
    		};
    	};
    	return arr;
    };

    function getclass(parentId,oclass) {
	var parent=document.getElementById(parentId);
	var tags=parent.all ? parent.all : parent.getElementsByTagName('*');
	var arr=new Array();
	// var re=/\bbox\b/;

	// var re=/\b + oclass + \b/;
	// var re="/\\b"+oclass+"\\b/";
	//可获取有多个类名的标签(类似class前后不能有减号-)
	var re=new RegExp("\\b"+oclass+"\\b");
	for (var i = 0; i < tags.length; i++) {
		if (re.test(tags[i].className)){
			arr.push(tags[i]);
		}
	};
	return arr;
};

    //获取全局class函数
    function byclass(oclass) {
    	var tags=document.all?document.all:document.getElementsByTagName('*');
    	var arr=new Array();
    	for (var i = 0; i < tags.length; i++) {
    		if (tags[i].className==oclass) {
    			arr.push(tags[i]);
    		};
    	};
    	return arr;
    };

    //事件监听
    function addEvent(obj,ev,fn){  
        if(obj.addEventListener){  
            //监听 谷歌,火狐,IE9...
            obj.addEventListener(ev, fn, false);
        }else if(obj.attachEvent){
        	//监听 IE6 7 8
            obj.attachEvent("on" + ev, fn);
        }else{  
            obj["on" + ev] = fn;  
        };
    };
    //删除事件监听
    function removeEvent(obj, ev, fn) {  
        if (obj.removeEventListener){  
            //监听 谷歌,火狐,IE9...
            obj.removeEventListener(ev, fn, false);  
        } else if (obj.detachEvent){ 
        	//监听 IE6 7 8
            obj.detachEvent("on" + ev, fn);  
        }else {  
            delete obj["on" + ev];  
        }; 
    };

    //获取非行间样式
    function getstyle(obj,oStyle){ //obj→对象  oStyle→样式名
        if (obj.currentStyle){
            return obj.currentStyle[oStyle]; //IE6 7 8
        }else{
            return getComputedStyle(obj,null)[oStyle]; //非IE
        };
    };

    //获取下一个兄弟节点
    function next(obj){
        if (obj.nextElementSibling){
            return obj.nextElementSibling; //谷歌火狐IE9+等支持
        }else{
            return obj.nextSibling; //IE6 7 8支持
        };
    };
    //获取上一个兄弟节点
    function previous(obj){
        if (obj.previousElementSibling){
            return obj.previousElementSibling; //谷歌火狐IE9+等支持
        }else{
            return obj.previousSibling; //IE6 7 8支持
        };
    };

    //返回顶部
    function toTop(objId){
		var Tween = {
		    Linear: function(t,b,c,d){ return c*t/d + b; },
		    Cubic: {
		        easeIn: function(t,b,c,d){
		            return c*(t/=d)*t*t + b;
		        },
		        easeOut: function(t,b,c,d){
		            return c*((t=t/d-1)*t*t + 1) + b;
		        },
		        easeInOut: function(t,b,c,d){
		            if ((t/=d/2) < 1) return c/2*t*t*t + b;
		            return c/2*((t-=2)*t*t + 2) + b;
		        }
		    }
		};
		var oDiv=document.getElementById(objId);
		var ind=0;
		var timer=null;
		var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
		if (window.navigator.userAgent.indexOf("MSIE 6")!=-1){
			oDiv.style.top=scrollTop+document.documentElement.clientHeight-oDiv.offsetHeight+"px";
		}else{
			oDiv.style.position="fixed";
		};
		oDiv.onclick=function (){
			ind=0;
			clearInterval(timer);
			var start=scrollTop;
			var change=-start;
			timer=setInterval(function (){
				ind++;
				if (ind>=20){
					clearInterval(timer);
				};
				document.documentElement.scrollTop=Tween.Cubic.easeInOut(ind,start,change,20);
				document.body.scrollTop=Tween.Cubic.easeInOut(ind,start,change,20);
			},25);
		};
	};

	// 获取offsetLeft、offsetTop
	function offsetLT(obj){
		var L=0;
		var T=0;
		while(obj){
			L=L+obj.offsetLeft;
			T=T+obj.offsetTop;
			obj=obj.offsetParent;
		};
		return {left:L , top:T};
	};

	//判断鼠标滚轮方向的封装函数
	function wheelfn(obj,fn){
	//obj--要进行滚轮判断的区域(元素),fn--是我们要执行的回调函数
		var str = window.navigator.userAgent.toLowerCase();
		if (str.indexOf('msie')!=-1) {
			obj.onmousewheel=uord;//非火狐浏览器
		} else{
			obj.onmousewheel=uord;//非火狐浏览器
			obj.addEventListener('DOMMouseScroll',uord,false);//火狐浏览器,在IE678中会报错
		};
		function uord(ev) {
			var oEvent=ev||event;
			var down=true;
			if (oEvent.wheelDelta){
				down=oEvent.wheelDelta<0;//非火狐浏览器 上滚：120 ，下滚：-120
			}else{
				down=oEvent.detail>0;//火狐浏览器 上滚：-4 ，下滚：4
			}
			fn(down);
			if (oEvent.preventDefault) {
				oEvent.preventDefault();//非IE阻止默认事件
			} else{
				oEvent.returnValue=false;//IE阻止默认事件
			};
		}
	};

	// 设置Cookie
	function setCookie(name,value,days) {//设置cookie
		var dates=new Date();//创建一个时间对象
		dates.setDate(dates.getDate()+days); //按天数设置
		document.cookie=name+"="+value+"; expires="+dates;
	};
	// 获取Cookie
	function getCookie(name){
		var arr=document.cookie.split('; ');
		// alert(arr); //返回['user1=XX','user2=OO','user3=MM']
		for (var i = 0; i < arr.length; i++) {
			var arr2=arr[i].split('=');//i=0--['user1','XX']
			if (arr2[0]==name) {
				return arr2[1];
			};
		};
		return false;
		// return '';
	};
	// 删除Cookie
	function removeCookie(name){
		setCookie(name,'1',-2);
	};
	
};
