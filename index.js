console.log("Js file has been linked successfully!!!!!");

function addNote(){
    var menu = document.getElementById("notes-menu");
    let note = document.createElement("div");
    let text = window.prompt("THE NOTE:");
    if (text.length != 0) {
        console.log(text);
        note.textContent = text;
        note.setAttribute("class", "note");
        menu.appendChild(note);
        console.log("Note created!");
    }
};
