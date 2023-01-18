const addbtn = document.querySelector('#Addbtn');
const main = document.querySelector('#main')
addbtn.addEventListener(
    "click",
    function () {
        addnote();
    }
)

const saveNotes = () => {
    // notes are grab by .notes nd textarea
    const notes = document.querySelectorAll(".note textarea");
    // console.log(notes)  // this is  show node list 
    const data = [];
    notes.forEach(
        (note) => {   // This note is coming form DOM
            data.push(note.value)  // note value puched into the empty data variable
        }
    )
    localStorage.setItem("notes", JSON.stringify(data));
    // before we recived all the data in form of array now i convet into string and date save into the local storage. 
    // console.log(data)  // to show data stay focus on that  
}

// Add note function " Note are add form this code of lines "
const addnote = (text = " ") => {   // when click on add button this function is call and new note is added in list.
    const note = document.createElement("div")
    note.classList.add("note")
    note.innerHTML = `
            <div class="icon"> <i class=" trash fa-solid fa-trash"> </i>  <i class=" save fa-solid fa-floppy-disk"></i></div>
            <textarea placeholder="Write here...">${text}</textarea>
    `

    //  To Remove the note 

    note.querySelector('.trash').addEventListener(
        "click",
        function () {
            note.remove();
            saveNotes();
        }
    );
    note.querySelector('.save').addEventListener(
        "click",
        function () {
            saveNotes();
        }
    )
    note.querySelector('textarea').addEventListener(
        "focusout",
        function () {
            saveNotes();
        }
    )
    main.appendChild(note);
    saveNotes();
}

(
    function () {
        const lsnote = JSON.parse(localStorage.getItem('notes'));
        // console.log(lsnote)
        lsnote.forEach(
            (lsnote) => {
                addnote(lsnote)
            }
        )
    }
)();