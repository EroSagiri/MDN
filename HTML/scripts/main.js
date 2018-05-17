// 选择第一个h1元素
//var myHeading = document.querySelector('h1');
//myHeading.innerHTML = 'Hello world!';


//变量简单类型有 Undefined, Null, Boolean, Number, String, Symbol
//复杂数据类型 Object
//Array, Function 都是对象


var name = "Sagiri";
var age = 13;
var isGirl = true;


//运算符  + - / % == != === !==


// if 语句
if (isGirl === true) {
	console.log('Sagiri is a  girl');
} else {
	console.log('Sagiri not is a girl');
}


//函数
function say() {
	console.log('Hi, Sagiri');
}

//有参数和返回值的函数
function multiply(num1, num2) {
	return num1 + num2;
}

say(); // Hi, Sagiri
console.log(multiply(2, 3)); // 5

//点击 事件

/*
document.querySelector('html').onclick = function() {
	alert('Ouch! Stop poking me!');
}
*/
// 一个图片切换

//首先我们要那到图片元素
var myImage = document.querySelector('img');
//为图片添加点击事件
myImage.onclick = function() {
	var mySrc = myImage.getAttribute('src');
	if (mySrc === './images/sagiri.jpg') {
		myImage.setAttribute('src', './images/sagiri2.jpg');
	} else {
		myImage.setAttribute('src', './images/sagiri.jpg');
	}
}



//用户自定义欢迎标题
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

// 设置
function setUserName() {
	var myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.innerHTML = 'Welcome ' + myName;
}

var localName;
if (localName = localStorage.getItem('name')) {
	myHeading.innerHTML = 'Welcome ' + localName;
} else {
	setUserName();
}

myButton.onclick = setUserName;
