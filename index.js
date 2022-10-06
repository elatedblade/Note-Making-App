console.log("Js file has been linked successfully!!!!!");

function addNote(){
    const menu = document.getElementById("notes-menu");
    let note = document.createElement("div");
    note.textContent = "NEW NOTE";
    note.setAttribute("class", "note");
    menu.appendChild(note);
    console.log("Note created!");
};
