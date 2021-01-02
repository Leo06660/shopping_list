var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.querySelectorAll("li")

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var del_button = createDelButton();
	li.appendChild(document.createTextNode(input.value));
	li.appendChild(del_button);
	li.addEventListener("click", toggleDone);
	ul.appendChild(li);
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

function toggleDone(){
  this.classList.toggle("done");
}

function createDelButton(){
	var del_button = document.createElement("button");
	del_button.appendChild(document.createTextNode("Delete"));
	del_button.className = "deleteBtn";
	del_button.classList.add("centerize")
	del_button.classList.add("inlineItem")
	del_button.addEventListener("click", deleteElement)
	return del_button;
}

function deleteElement(){
  let current = this.parentNode;
  ul.removeChild(current);
}

for (var i = 0; i < li.length; i++){ 
	var del_btn = createDelButton();
	li[i].appendChild(del_btn);
}

for (var i = 0; i < li.length; i++){  
  li[i].addEventListener("click", toggleDone);
}

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);