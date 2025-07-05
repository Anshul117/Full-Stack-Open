import Note from "./Component"
import { useState } from "react"
const App = (props) => {
  console.log(props.notes)
  const [notes, setNotes] = useState(props.notes)
  const [ newNote,setNewNote] = useState( '')
  const [showAll , setShowAll] = useState( true)
  const addNote = (event) =>{
  
    event.preventDefault()
    const noteObject = {
      content : newNote,
      important : Math.random() <0.5,
      id : String(notes.length +1)


    }
    setNotes(notes.concat(noteObject))
    setNewNote( '')  // to set field back to empty string after update
  }
  
  const notesToShow = showAll ? notes : notes.filter( note => note.important)
  return (
    <div>
      <h1>Notes</h1>
      <div>
        <button onClick={() => setShowAll(!showAll)}> show {showAll ? 'important' :'all'}</button>
      </div>
      <ul>
       {notesToShow.map(note => (<Note key = {note.id} note_att= {note} />))}

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