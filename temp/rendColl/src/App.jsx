const App = (props) => {
  const { notes } = props

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {console.log(notes.id)} // undefined
        {notes.map(note => <li key={note.id}>{note.content} ;
        </li>)}   // without key attribute
      </ul>
    </div>
  )
}

export default App