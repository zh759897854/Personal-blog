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
// ---------------------------------------------------------------------link.js
var arr = ["img/bigbottom.png","img/simidadeimg.png","img/kuaishoudeimg.png"];
var arr1 = ["财经网与微博深层合作，在用户登录、用户分享、以及新闻正文页面都与微博做了功能结合。微博提供统计工具，用户点击榜单的内容跳转到财经网自己新闻正文页中，增加二次点击和用户粘性。","在快手的客户端中，用户通过微博登录后，发布内容可以生成一条微博，同步到微博。","完成用户授权，即可方便使用微博账号开始游戏。引入优质好友资源，低成本实现游戏社交化。"]
var bigbottom = document.querySelector('.bigbottom');
var imgs11 = document.querySelectorAll('.imgs11');
var caijingfenxi = document.querySelector('.caijingfenxi');
console.log(imgs11[0])
for(var i = 0; i < imgs11.length; i++) {
	imgs11[i].index = i;
	imgs11[i].onmouseover = function() {
		bigbottom.src = arr[this.index];
		caijingfenxi.innerHTML = arr1[this.index]
	}
}

	