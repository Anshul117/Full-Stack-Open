import Note from "./Component"
import { useState } from "react"
const App = (props) => {
  console.log(props.notes)
  const [notes, setNotes] = useState(props.notes)
  const addNote = (event) =>{
    console.log('ans', event)
    event.preventDefault()
    console.log('button Clicked', event.target)
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
       {notes.map(note => (<Note key = {note.id} note_att= {note} />))}

      </ul>
      <form onSubmit={addNote}> <button type="submit">save</button></form>
    </div>
  )
}

export default App

// (note) => {
 //// return note.id
//}
//Generate a unique id for every item and use it as key when rendering the list.