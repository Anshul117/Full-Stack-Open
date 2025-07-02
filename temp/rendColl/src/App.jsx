import Note from "./Component"
import { useState } from "react"
const App = (props) => {
  console.log(props.notes)
  const [notes, setNotes] = useState(props.notes)
  const [ newNote,setNewNote] = useState( ' new note')
  const addNote = (event) =>{
    console.log('ans', event)
    event.preventDefault()
    console.log('button Clicked', event.target)
  }
  const handleNewNote = (event) =>{
    console.log('raw' ,event)
    console.log('target', event.target.value)
    setNewNote(event.target.value)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
       {notes.map(note => (<Note key = {note.id} note_att= {note} />))}

      </ul>
      <form onSubmit={addNote}> <input value={newNote} onChange={e=> setNewNote(e.target.value)}></input> <button type="submit">save</button></form>
    </div>
  )
}

export default App

// (note) => {
 //// return note.id
//}
//Generate a unique id for every item and use it as key when rendering the list.