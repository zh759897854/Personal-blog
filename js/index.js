var setin = document.getElementById('setin'),
	denglu = document.getElementById('denglu'),
	denglu1 = document.getElementById('denglu1'),
	dengrighti = document.getElementById('dengrighti'),
	wrap1 = document.querySelector('.wrap1');
setin.onclick = function() {
	denglu.style.display = "block";
	denglu1.style.display = "block";
	wrap1.style.display = "block";
	wrap1.style.opacity = .3;
}
dengrighti.onclick = function() {
	denglu.style.display = "none";
	denglu1.style.display = "none";
	wrap1.style.display = "none";
}
// --------------------------------------------------------登录界面
var dropdown = document.querySelectorAll('.dropdown'),
	aundercontent5 = document.querySelectorAll('.aundercontent5');
for(var i = 0; i < aundercontent5.length; i++) {
	aundercontent5[i].index = i;
	aundercontent5[i].onmouseover = function() {
		for(var i = 0; i < aundercontent5.length; i++) {
			dropdown[i].style.display = "none"
		}
		dropdown[this.index].style.display = "block";
	}
}
// -----------------------------------------------------------nav
var spanmove = document.querySelectorAll('.spanmove'),
	spanwei = document.querySelectorAll('.spanwei');
spanwei[0].onmouseover = function() {
	spanmove[0].style.height = 112 + "px";
}
spanwei[1].onmouseover = function() {
	spanmove[1].style.height = 157 + "px";
}
spanwei[0].onmouseout = function() {
	spanmove[0].style.height = 0 + "px";
}
spanwei[1].onmouseout = function() {
	spanmove[1].style.height = 0 + "px";
}

// ---------------------------------------------------------------banner
var list = spanwei = document.querySelector('.list');
var bannub = 0;
var timerbaner = 0;
clearInterval(timerbaner)
timerbaner = setInterval(function() {
	if(bannub == 4) {
		console.log(1)
		list.style.left = 0;
		bannub = 0;
	}
	bannub++;
	mTween(list,{left: -bannub*1366},1800,"linear");
},3500)
list.onmouseover = function()  {
	clearInterval(timerbaner);
};
list.onmouseout = function() {
	clearInterval(timerbaner)
	timerbaner = setInterval(function() {
		if(bannub == 4) {
			console.log(1)
			list.style.left = 0;
			bannub = 0;
		}
		bannub++;
		mTween(list,{left: -bannub*1366},1800,"linear");
	},3500)
};



	