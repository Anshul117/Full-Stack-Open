import Note from "./Component"
const App = ({notes}) => {
  

  return (
    <div>
      <h1>Notes</h1>
      <ul>
       {notes.map(note => (<Note key = {note.id} note_att= {note} />))}

      </ul>
    </div>
  )
}

export default App

// (note) => {
 //// return note.id
//}
//Generate a unique id for every item and use it as key when rendering the list.