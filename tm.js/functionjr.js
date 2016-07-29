/*解决document.getElementsByClassName的兼容性问题
getclass("one",[range])获取带有指定class名的元素的集合，one是指定的class名
思路：
1、判断浏览器是否支持这个方法：document.getElementsByClassName;
2、如果有，直接使用指定方法:
	document.getElementsByClassName("class名");
3、如果没有，需要解决兼容问题（用已有方法模拟）
	从所有元素中进行挑选，通过类名进行挑选
	all[i].className=="指定的class名"
	all[i].className是否包含指定的className;
*/
function getClass(classname,range){
	var range=range||document;
	//var rang=rang?range:document;
	if(range.getElementsByClassName){
		return range.getElementsByClassName(classname)
	}else{
		var all=range.getElementsByTagName("*");
		var arr=[];
		for(var i=0;i<all.length;i++){
			/*if(all[i].className==classname){
				arr.push(all[i]);
			}*/
			//第一种：当前元素的className是否包含指定的classname；
			if (checkClass(all[i].className,classname)){
				arr.push(all[i]);
			}		
		}return arr;
	}
}
/*checkclass(str,classone){
	检查str里面是否包含classone
	思路：
	1、将str进行分割，转换成数组
	2、遍历数组，检查是否有元素等于classone；
	3、如果相等返回true
	   如果不相等返回false；
}*/
function checkClass(str,classone){
	var arr=str.split(" ");
	for(var i=0;i<arr.length;i++){
		if(arr[i]==classone){
			return true;
		}
	}
	return false;
};


/*解决获取设置某个元素的文本兼容性问题
getContent(obj,[val])获取设置某个元素的文本,val是设置的内容
思路：
1、判断浏览器
2、判断val，是否有这个参数，有val是设置，没有这个参数是获取
3、设置或者获取文本*/
function getContent(obj,val){
	if(obj.textContent){
		// w3c
		if(val){
			obj.textContent=val;
		}else{
			return obj.textContent;
		}
	}else{
		if(val){
			obj.innerText=val;
		}else{
			return obj.innerText;
		}
	}
}

/*解决获取样式的通用方式兼容性问题
getStyle(obj,attr)获取样式的通用方式,obj是对象，attr是样式
思路：
1、判断浏览器，obj.currentStyle
2、IE6-8:obj.currentStyle.attr;
3、w3c:  getComputedStyle(obj,null).attr;*/
function getStyle(obj,attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	}else{
		return getComputedStyle(obj,null)[attr];
	}
}


/*$(select)方便来获取元素，将3中获取元素的方法进行封装
 字符串
$(".one")通过className来获取元素
$("#one")通过id来获取元素	document.getElementById()	select.substring(1);
$("div")通过标签来获取元素
$("<div>")创建div

函数  执行window.onload=function(){}
思路：
1、判断参数的第一个字符   str.charAt(0);
2、根据字符执行相应的分支，返回相应的元素*/
/*function $(select,content){
	var content=content||document;
	var first=select.charAt(0);
	if(first=="."){
		return getClass(select.substring(1),content);
	}else if(first=="#"){
		return content.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){
		return content.getElementsByTagName(select);
	}else if(/^<[a-z][a-z1-6]{0,8}>$/.test(select)){
		return document.createElement(select.slice(1,-1));
	}
}*/

function $(select,content){
	if(typeof select=="string"){
     var content=content||document;
	var first=select.charAt(0);
	if(first=="."){
		return getClass(select.substring(1),content);
	}else if(first=="#"){
		return content.getElementById(select.substring(1));
	}else if(/^[a-z][a-z1-6]{0,8}$/.test(select)){
		return content.getElementsByTagName(select);
	}else if(/^<[a-z][a-z1-6]{0,8}>$/.test(select)){
		return document.createElement(select.slice(1,-1));
	 }
	}else if(typeof select=="function"){
		window.onload=function(){
			select();
		}

	}
}


/*
getChild(obj,type)
获取指定元素的子元素的集合，默认情况值获取元素节点
obj指定的元素
type指定获取元素的类型
ture 只获取元素节点
false 获取元素的节点和有意义的文本

1、获取obj的所有的子元素
2、挑选obj.nodeType==1

*/

function getChild(obj,type){
	//初始化type
	type=type==undefined?true:type;
	var arr=[];
	var child=obj.childNodes;
	if(type){
        for(var i=0;i<child.length;i++){
		if(child[i].nodeType==1){
			arr.push(child[i])

		}
	}
	return arr;
    }else{
    	//获取元素节点和有意义的文本
    	 for(var i=0;i<child.length;i++){
		if(child[i].nodeType==1||(child[i].nodeType==3&&child[i].nodeValue.replace(/^\s+|\s+$/g,""))){
			arr.push(child[i])

		}
	}
	return arr;
    }
}
function firstChild(obj){
	return getChild(obj)[0];
}
function randomChild(obj,num){
	return getChild(obj)[num];
}