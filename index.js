console.log("Js file has been linked successfully!!!!!");


// const menu = document.querySelector("#notes-menu");
// const addBtn = document.querySelector("#addBtn");
// or i can use 
const menu = document.getElementById("notes-menu");
const addBtn = document.getElementById("addBtn");

function addNote(){
    let note = document.createElement("div");
    note.textContent = "NEW NOTE";
    note.setAttribute("class", "note");
    menu.appendChild(note);
    console.log(menu);
    console.log(note);
    console.log("Everything worked just fine");
};

addBtn.addEventListener("click", addNote);