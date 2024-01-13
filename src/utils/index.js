let note = [
    {
        id: 1,
        title: "This first",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe veniam aperiam? Beatae ipsum natus unde, quisquam adipisci harum et!",
    },
    {
        id: 2,
        title: "This Second",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe veniam aperiam? Beatae ipsum natus unde, quisquam adipisci harum et!",
    },
    {
        id: 3,
        title: "This Third",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe veniam aperiam? Beatae ipsum natus unde, quisquam adipisci harum et!",
    },
    {
        id: 4,
        title: "This Forth",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe veniam aperiam? Beatae ipsum natus unde, quisquam adipisci harum et!",
    },
    {
        id: 5,
        title: "This Fifth",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est saepe veniam aperiam? Beatae ipsum natus unde, quisquam adipisci harum et!",
    },
]

const addNewNote = (data) => {
    note.push(data)
}

const deleteNote = (data) =>{
    let newNote = note.filter(n=> n.id !== data)
    note = newNote
    console.log(note);
}

const editNote = (data) => {
    const indexdata = note.findIndex(n=> n.id === data.id)
    indexdata !== -1 ? note[indexdata] = data : ""
    console.log(note);
}
export {note, addNewNote, deleteNote, editNote};