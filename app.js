// referance
var addBtn = document.querySelector("#addBtn");
var main = document.querySelector("#main");


function addNotes(){
const notes = document.createElement("div");
 notes.classList.add("note");
const html = notes.insertAdjacentHTML("afterbegin", `<div class="noteHeader">
		<button class="edit"><i class="fas fa-edit"></i></button>
		<button class="delet"><i class="fas fa-trash-alt"></i></button>
		</div>
		<div class="div"></div>
		<textarea placeholder="Please type here..."></textarea>`);
 main.appendChild(notes);
 const edit = document.querySelectorAll(".edit");
 const delet = document.querySelectorAll(".fa-trash-alt");
 const curNote = document.querySelectorAll(".note");
 const curDiv = document.querySelectorAll(".div");
 const curText = document.querySelectorAll("textarea");
 

function updateLSR(){
	let arr = [];
	curText.forEach((aa)=>{
	return arr.push(aa.value);
	});
	localStorage.setItem("Notes",JSON.stringify(arr));
}
updateLSR();

// delete btn work
	delet.forEach((elem,index)=>{
		elem.addEventListener("click", function(){
			curNote[index].remove();
			updateLSR();
		});
	});
	
	
	// edit btn work
	curText.forEach((ed,ind)=>{
		ed.addEventListener("blur", function(){
			let curd = curDiv[ind];
			let curt = curText[ind];
			curd.style.display = 'block';
			curt.style.display = 'none';
			curd.innerHTML = curt.value;
			curd.disabled = true;
			updateLSR();
		});
	});
	
	edit.forEach((ed,ind)=>{
		ed.addEventListener("click", function(){
			let curd = curDiv[ind];
			let curt = curText[ind];
			curd.style.display = 'none';
			curt.style.display = 'block';
			updateLSR();
		});
		updateLSR();
	});
};









let savedNotes = JSON.parse(localStorage.getItem("Notes"));
if(savedNotes != ""){
for(let i = 0; i < savedNotes.length; i++){
console.log(i);
addNotes();
}
let textarea = document.querySelectorAll('textarea');
let div = document.querySelectorAll('.div');
for(let i = 0; i < savedNotes.length; i++){
textarea[i].value = savedNotes[i];
div[i].innerHTML = savedNotes[i];
textarea[i].style.display = 'none';
div[i].style.display = 'block';

}
textarea[textarea.length-1].style.display = "block";
div[textarea.length-1].style.display = "none";
textarea[textarea.length-1].focus();

}




addBtn.addEventListener("click", addNotes);