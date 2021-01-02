//////////////////////////////////////////////////////////////
//			Shopping List
//////////////////////////////////////////////////////////////
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

//////////////////////////////////////////////////////////////
//			Gradient Background
//////////////////////////////////////////////////////////////
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.querySelector(".gradientBody");
var h2 = document.querySelector("h2");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right,"
	+ color1.value
	+ ","
	+ color2.value
	+ ")";

	h2.innerHTML = body.style.background + ";";
}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

//////////////////////////////////////////////////////////////
//			Random Color
//////////////////////////////////////////////////////////////
var randomColorBtn = document.getElementById("randomColorBtn");
function setBg() {
	const randomColor1 = Math.floor(Math.random()*16777215).toString(16);
	const randomColor2 = Math.floor(Math.random()*16777215).toString(16);
	console.log(randomColor1);
	console.log(randomColor2);
	color1.value = "#" + randomColor1;
	color2.value = "#" + randomColor2;
	setGradient();
}

randomColorBtn.addEventListener("click", setBg);



