function addNote() {
    var note = document.createElement("div");
    note.setAttribute("class", "note");
    console.log(note.getAttribute());
}


const addBtn = document.getElementById("add-btn").getAttribute;
addBtn.addEventListener("click", (e) => addNote);

