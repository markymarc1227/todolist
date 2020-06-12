var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var itemList = document.getElementsByTagName("li");
var delBtn = document.getElementsByClassName("delete");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.classList.add("itemList");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.onclick = toggler;

	var delItem = document.createElement("button");
	delItem.classList.add("delete");
	delItem.appendChild(document.createTextNode("delete"));
	li.appendChild(delItem);
	delItem.onclick = removeParent;

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function removeParent(e) {
  	e.target.removeEventListener("click", removeParent);
  	e.target.parentElement.remove();
}

function toggler(e){
	e.target.removeEventListener("click", toggler);

	if (e.target.classList.contains("done")){
		e.target.classList.remove("done");
	}else{
		e.target.classList.add("done");
	}
}

function myFunc(item,i){
	item.addEventListener("click", 	toggler)
}

function myFunc2(item, i){
	item.addEventListener("click", removeParent);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);
Object.values(delBtn).forEach(myFunc2);
Object.values(itemList).forEach(myFunc);


// function myFunc(item, i){
// 	item.addEventListener("click")
// }

// ul.onclick = function(e){
// 	var target = e.srcElement.classList;
// 	if (target.contains("done")){
// 		target.remove("done");
// 	}else{
// 		target.add("done");
// 	}
// };
