import { useState } from 'react'
import Display from './component' 
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('')
  const addName = (event) =>{
    event.preventDefault()
    const exists = persons.some(person =>(person.name===newName))
    if(exists){
      alert(`${newName} is already added to phonebook`)
  return
    }
    const nameObj ={
      name : newName
    }
   
    
    setPersons(persons.concat(nameObj))
    setNewName('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={addName}> 
        <div>
          name:<input value={newName} onChange={e =>{setNewName(e.target.value)}}></input>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> {persons.map((person,index) =>(<Display key ={index} att = { person.name} /> )  )}</ul>
    </div>
  )
}

export default App