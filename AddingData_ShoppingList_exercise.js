var input = document.getElementById("input");
var btn = document.getElementById("btn");
var ul = document.getElementById("list");
var strong = document.getElementsByTagName("strong");
var li = document.getElementsByTagName("li");


completedLists();
deleteListBtn();

function inputLength(){
    return input.value.length;
}
function createElement(){
    ul.style.display = "block";
    var li = document.createElement("li");
        var listItemText = document.createTextNode(input.value);
        var strong = document.createElement("strong");
        li.appendChild(strong);
        strong.appendChild(listItemText);
        ul.appendChild(li);
        var span = document.createElement("span");
        li.appendChild(span);
        var del = document.createTextNode("delete");
        span.appendChild(del);
        span.classList.add("material-symbols-outlined");
        input.value = "";

        completedLists();
        deleteListBtn();
}
function addLists(){
    if(inputLength() > 0){
        createElement();
    }
}
function enterEvent(event){
    if(inputLength() > 0 && event.key === "Enter"){
        createElement();

    }
}
function completedLists(){
    for(i=0;i<strong.length;i++){
        strong[i].addEventListener("click",switchClass);
    }
}
function switchClass(){
    this.classList.toggle('done');
}

function deleteListBtn(){
    var span = document.querySelectorAll('li span');
	for(i=0; i<span.length; i++){
        span[i].addEventListener('click', clearElement);
	}
    
}
function clearElement(){
	for(var i=0; i<li.length; i++){
        this.parentNode.remove();
        if(ul.children.length === 0){
            //alert("Ul is empty");
            ul.style.display = "none";
        }
	}
}

btn.addEventListener("click", addLists);

input.addEventListener("keydown", enterEvent);