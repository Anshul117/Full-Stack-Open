const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
       

        {notes.map(note => <li key={note.id}>{note.content} 
        </li>)}   // without key attribute
      </ul>
    </div>
  )
}

export default App

// (note) => {
 //// return note.id
//}
//Generate a unique id for every item and use it as key when rendering the list.