function addNote(){
    let note = document.createElement("div");
    note.innerText = "NEW NOTE";
    note.setAttribute("class", "note");
    menu.appendChild(note);
    console.log(menu);
    console.log(note);
    console.log("Everything worked just fine");
  };
  
  
  let menu = document.getElementById("notes-menu");
  let addBtn = document.getElementById("addBtn");
  addBtn.addEventListener("click", addNote);
  