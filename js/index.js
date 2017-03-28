//队列数组
        var arr = [];
        var $ = function (e) {
            return document.querySelectorAll(e);
        }
        //获取val并清空输入框
        function userInput(type, index) {
            var val = [];
            var input = document.getElementById('user-input');
            var value = input.value;
            input.value = "";
            val = value.match(/[\w|\u4e00-\u9fa5]+/g);
            for (var i = 0; i < val.length; i++) {
                changeArr(val[i], type, index);
            }
        }
        //渲染dom
        function render() {
            var html = '';
            for (var i = 0; i < arr.length; i++) {
                html += `<div class="item">${arr[i]}</div>`
            }
            document.getElementById('view').innerHTML = html;
        }
        //弹窗
        function dialog(msg) {
            alert(msg);
        }
        //数组处理
        function changeArr(val, type, index) {
            switch (type) {
                case 'LEFT_ADD':
                    arr.unshift(val);
                    break;
                case 'RIGHT_ADD':
                    arr.push(val);
                    break;
                case 'LEFT_DEL':
                    dialog(arr.shift());
                    break;
                case 'RIGHT_DEL':
                    dialog(arr.pop());
                    break;
            }
            render();
        }
        //查询
        function search() {
            var input = $('#search-input')[0];
            var reg = new RegExp(`${input.value}`, "g");
            for (var i = 0; i < arr.length; i++) {
                var html = arr[i].replace(reg, '<span style="color:red">$&</span>');
                console.log(arr[i])
                $('.item')[i].innerHTML = html;
                if (reg.test(arr[i])) {
                    $('.item')[i].style.backgroundColor = '#6a6ccd';
                }
            }
        }




//window.onload =function(){
//var txt = document.getElementById('inputText');
//var content = document.getElementById('content');
//
////正则过滤
//function getRegExp() {
//	function getValue() {
//		value = txt.value.replace(/[^\d\u4e00-\u9fa5a-zA-Z]+/g," ").split(" ");
//		if (value[0] !== "") {
//			return value;
//		}else {
//			alert("请先输入点东西");
//			return false;
//		}
//	}
//	getValue();
//}
//
//
////左进按钮
//function inputLeftIn() {
//	getRegExp();
//	var liNum = content.childNodes.length;
//	for (var i = 0;i<value.length;i++){
//		if(value[i] != false ) {
//			if (liNum < 60){
//				var newItem = document.createElement("li");
//				var textnode = document.createTextNode(value[i]);
//				newItem.appendChild(textnode);
//				content.insertBefore(newItem,content.childNodes[0]);
//				newItem.setAttribute('title',value[i]);
//			} else {
//				alert("最多输入60个哦~");
//			}
//		}
//	}
//}
//
////右进按钮
//function inputRightIn() {
//	getRegExp();
//	var liNum = content.childNodes.length;
//	if (value != false){ //排除空元素
//		for (var i =0;i<value.length;i++) {
//			if (liNum <60){
//				var newItem = document.createElement("li");
//				var textnode = document.createTextNode(value[i]);
//				newItem.appendChild(textnode);
//				content.appendChild(newItem);
//				newItem.setAttribute('title',value[i]);
//			}else{
//				alert("最多输入60个哦~")
//			}
//		}
//	}
//}
//
////左出按钮
//function inputLeftOut() {
//	alert("删除的最左侧节点：" + content.firstChild.innerHTML);
//	content.removeChild(content.firstChild);
//}
//
////右出按钮
//function inputRightOut() {
//	alert("删除的最右侧节点：" + content.childNodes[contetn.childNodes.length - 1].innerHTML);
//	content.removeChild(content.childNodes[content.childNodes.length - 1]);
//}
//
////给已出现的Li都添加点击事件
//content.addEventListener("click",function(e) {
//	content.removeChild(e.target);
//},false)
//
////查询按钮
//function searchItem(){
//	var childLi = content.childNodes;
//	var inputTxt = document.getElementById('searchInput').value;
//	var reg = eval("/" + inputTxt + "/g");
//	for (var i = 0;i<childLi.length;i++){
//		var str = childLi[i].innerHTML.toString();
//		var skey = "<span style='color:red'>"+ inputTxt +"</span>";
////		childLi[i].style.backgroundColor = "";
////		childLi[i].style.color = "";
//		var str = childLi[i].innerHTML.replace(reg,skey)
//		childLi[i].innerHTML =str;
////		if (inputTxt == childLi[i].innerHTML) {
////			childLi[i].style.backgroundColor = "#ffff00";
////			childLi[i].style.color = "#000";
////		}
//	}
//}
//
////重置清空函数
//function reset() {
//	content.innerHTML = "";
//	txt.value = "";
//}
//
//document.getElementById("inputLeftIn").addEventListener("click",inputLeftIn,false);
//document.getElementById("inputLeftOut").addEventListener("click",inputLeftOut,false);
//document.getElementById("inputRightIn").addEventListener("click",inputRightIn,false);
//document.getElementById("inputRightOut").addEventListener("click",inputRightOut,false);
//
//document.getElementById('searchBtn').addEventListener('click',searchItem,false);
//document.getElementById('resetBtn').addEventListener('click',reset,false);
//}


