window.onload = function(){
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


	var songzhi = document.getElementById('songzhi');
	var cityname = document.getElementById('cityname');
	var city = document.getElementById('city');
	var szcity = document.getElementById('szcity');
	var songzhiimg = songzhi.getElementsByTagName('img')[0];
	var citydivs = cityname.getElementsByTagName('div');

	function dhmousein(outer,headimg,cont){
		outer.style.background = '#fff';
		cont.style.display = 'block';
		headimg.src = "images/" + 4 +".jpg";
		outer.style.border = '1px solid #dbdbdb';
		outer.style.borderBottom = '';
		outer.style.borderTop = '';
		cont.style.background = '#fff';
	}

	function dhmouseout(outer,headimg,cont){
		outer.style.background = '';
		headimg.src = "images/" + 1 +".jpg";
		cont.style.display = 'none';
		outer.style.border = '';
	}
/***********************选择城市*****************/
	szcity.onmouseover = function(){
		dhmousein(songzhi,songzhiimg,cityname);
		for (var i = 0; i < citydivs.length; i++) {
			if (citydivs[i].innerHTML==city.innerHTML) {
				citydivs[i].style.background = '#c71620';
				citydivs[i].style.color = '#fbffff';
			}else{
				citydivs[i].style.background = '';
				citydivs[i].style.color = '';
			};
		};

		cityname.onclick = function(ev){
			var event=ev||window.event;
			var target=event.target||event.srcElement;
			if (target.tagName.toLowerCase()=='div'){
				city.innerHTML = target.innerHTML;
				songzhi.style.background = '';
				songzhiimg.src = "images/" + 1 +".jpg";
				for (var i = 0; i < citydivs.length; i++) {
					citydivs[i].style.background = '';
					citydivs[i].style.color = '';
				}
				target.style.background = '#c71620';
				target.style.color = '#fbffff';
				var time = setTimeout(function(){
					cityname.style.display = 'none';
				},100);
				songzhi.style.border = '';
			}
		}

		/*for (var i = 0; i < citydivs.length; i++) {
			citydivs[i].onclick = function(){
				for (var i = 0; i < citydivs.length; i++) {
					if (citydivs[i]==this) {
						city.innerHTML = citydivs[i].innerHTML;
						songzhi.style.background = '';
						songzhiimg.src = "images/" + 1 +".jpg";
						citydivs[i].style.background = '#c71620';
						// cityname.style.display = 'none';
						var time = setTimeout(function(){
							cityname.style.display = 'none';
						},400);
						songzhi.style.border = '';
					};
				}
			}
		}*/
		
	}
	szcity.onmouseout = function(){
		dhmouseout(songzhi,songzhiimg,cityname);
	}
/***********************我的京东*****************/
	var myjingdong = document.getElementById('myjingdong');
	var myjd = document.getElementById('myjd');
	var myjdcon = document.getElementById('myjdcon');
	var myjdimg = myjd.getElementsByTagName('img')[0];

	myjingdong.onmouseover = function(){
		dhmousein(myjd,myjdimg,myjdcon);
	}
	myjingdong.onmouseout = function(){
		dhmouseout(myjd,myjdimg,myjdcon);
	}

/***********************手机京东*****************/
	var jdmobiletop = document.getElementById('jdmobiletop');
	var jdmobiletopimgs = jdmobiletop.getElementsByTagName('img');
	var jdmobilebot = document.getElementById('jdmobilebot');
	var jdmobile = document.getElementById('jdmobile');

	jdmobile.onmouseover = function(){
		dhmousein(jdmobiletop,jdmobiletopimgs[1],jdmobilebot);
		jdmobiletopimgs[0].src = "images/mobile" + 2 +".jpg";
	}
	jdmobile.onmouseout = function(){
		dhmouseout(jdmobiletop,jdmobiletopimgs[1],jdmobilebot);
		jdmobiletopimgs[0].src = "images/mobile" + 1 +".jpg";
	}

/***********************关注京东*****************/
	var guanzhujd = document.getElementById('guanzhujd');
	var guanzhujdtop = document.getElementById('guanzhujdtop');
	var guanzhujdtopimg = guanzhujdtop.getElementsByTagName('img')[0];
	var guanzhujdbot = document.getElementById('guanzhujdbot');

	guanzhujd.onmouseover = function(){
		dhmousein(guanzhujdtop,guanzhujdtopimg,guanzhujdbot);
	}
	guanzhujd.onmouseout = function(){
		dhmouseout(guanzhujdtop,guanzhujdtopimg,guanzhujdbot);
	}


/***********************客户服务*****************/
	var khserver = document.getElementById('khserver');
	var khservertop = document.getElementById('khservertop');
	var khservertopimg = khservertop.getElementsByTagName('img')[0];
	var khserverbot = document.getElementById('khserverbot');

	khserver.onmouseover = function(){
		dhmousein(khservertop,khservertopimg,khserverbot);
	}
	khserver.onmouseout = function(){
		dhmouseout(khservertop,khservertopimg,khserverbot);
	}

/***********************网站导航*****************/
	var wangzhandh = document.getElementById('wangzhandh');
	var wangzhandhtop = document.getElementById('wangzhandhtop');
	var wangzhandhtopimg = wangzhandhtop.getElementsByTagName('img')[0];
	var wangzhandhbot = document.getElementById('wangzhandhbot');

	wangzhandh.onmouseover = function(){
		dhmousein(wangzhandhtop,wangzhandhtopimg,wangzhandhbot);
	}
	wangzhandh.onmouseout = function(){
		dhmouseout(wangzhandhtop,wangzhandhtopimg,wangzhandhbot);
	}

/**********************购物车*****************/
	var jdconttop = document.getElementById('jdconttop');
	var gouwuche = getclass('jdconttop','gouwuche');
	var gouwuchetop = document.getElementById('gouwuchetop');
	var gouwuchecont = document.getElementById('gouwuchecont');
	var gouwucheimg = gouwuchetop.getElementsByTagName('img');
	
	gouwuche[0].onmouseover = function(){
		gouwucheimg[0].src = "images/gouwuche" + 2 +".jpg";
		gouwucheimg[1].src = "images/gouwuchejt" + 2 +".jpg";
		gouwuchetop.style.height = 36 + 'px';
		gouwuchetop.style.background = '#fff';
		gouwuchecont.style.display = 'block';
		gouwuchetop.style.borderBottom = '0px solid #dedede';
		gouwuchecont.style.background = '#fff';
	}
	gouwuche[0].onmouseout = function(){
		gouwucheimg[0].src = "images/gouwuche.jpg";
		gouwucheimg[1].src = "images/gouwuchejt.jpg";
		gouwuchetop.style.height = 34 + 'px';
		gouwuchetop.style.background = '';
		gouwuchecont.style.display = 'none';
		gouwuchecont.style.background = '';
		gouwuchetop.style.borderBottom = '1px solid #dedede';
	}


/**********************全部商品分类*****************/
/*$('.readdhli').hover(function(){
	var i=$(this).index();
	$('.readdhlip').css({background-image:'url(../images/readlinejiantou.jpg)'});
	$('.readdhlip').eq(i).css({background:'#fff'});
	$('.readdhlicont').eq(i).show();
},function(){
	var i=$(this).index();
	var readdhul = document.getElementById('readdhul');
	var readdhlip = getclass('readdhul','readdhlip');
	readdhlip[i].style.backgroundImage = "../images/readlinejiantou.jpg";
	// $('.readdhlip').eq(i).css({background-image:'url(../images/readlinejiantou.jpg)'});
	$('.readdhlicont').eq(i).hide();
});*/

}