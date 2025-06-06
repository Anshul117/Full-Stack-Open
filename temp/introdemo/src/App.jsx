import { useState} from 'react'
const Display = (props) =>{
    return(
      <div>{props.counter}</div>
    )

    
}
const Button = (props) =>{
  return(
    <button onClick={props.onClick}>{props.text}</button>
  )
}
const App = () =>{
  const [counter , setCounter] = useState(0) // destructure code 
  const incByOne = () => setCounter(counter+1)
  const decByOne = () => setCounter(counter-1)
  const setTozero = () =>setCounter(0)
  return (
    <div>
    <Display counter = {counter} />
    <Button onClick ={incByOne} text ={"++"}/>
    <Button onClick ={decByOne} text ={"--"}/>
    <Button onClick ={setTozero} text ={"0"}/>


    </div>
  )
}
 

/*const Hello = ({name , age}) => {
  //const name = props.name  // Example of destructuring
  //const age = props.age // const {name , age} = props
  const bornYear = () => new Date().getFullYear() - age
  return (
    <div>
      <p>
        Hello {name} , your age is {age}
      </p>
      <p>So you are  born in {bornYear()}</p>
    </div>
  )
}
const App = () => {
  const name = 'Anshul'
  const age = '21'
  const {counter} = props
  return (
    <div>
      <div>{counter}</div>
      <h1>Greetings</h1>
      <Hello name = "Yash" age = {26} />
      <Hello name ={name} age = {age} />
      
    </div>
  )
}

*/
export default App
