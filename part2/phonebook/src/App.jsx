import { useState } from 'react'
import Display from './component' 
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' , phone : 8233943601}
  ]) 
  const [newName, setNewName] = useState('')
  const [newphone ,setNewPhone ] = useState('')
  const details = (event) =>{
    event.preventDefault()
    const exists = persons.some(person =>(person.name===newName))
    if(exists){
      alert(`${newName} is already added to phonebook`)
  return
    }
    const nameObj ={
      name : newName,
      phone :newphone
    }
   
    
    setPersons(persons.concat(nameObj))
    setNewName('')
    setNewPhone('')
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form  onSubmit={details}> 
        <div>
          name:<input value={newName} onChange={e =>{setNewName(e.target.value)}}></input>
          <p></p>
          phone:<input value = {newphone} onChange={e =>{setNewPhone(e.target.value)}}></input>
        </div>
        <div>
          <p></p>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul> {persons.map((person,index) =>(<Display key ={index} att1 = { person.name} att2 = {person.phone} /> )  )}</ul>
    </div>
  )
}

export default App