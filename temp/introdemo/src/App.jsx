import { useState } from 'react'
const History = (props) => { //The History component renders completely different React elements depending on the state of the application. This is called conditional rendering.
  if(props.allClicks.length ==0){
    return (
      <div>
        This app is used by pressing button
      </div>
    )
  }
  else {
    return (
    <div>button pressed history : {props.allClicks.join(" ")}</div>)
  }
}
const App = () => {
  const [click, setClick] = useState({
    left: 0, right: 0
  }
  )
  const [allClicks, setAll] = useState([])
  const [total, setTotal] = useState(0)
  const leftButton = () => {

    const newClick = {

      ...click, 
      left: click.left +1
 //  
      //                  creates a obj with copy of property of click
      // changing the left property
    }
    setAll(allClicks.concat("L"))
    setTotal(newClick.left + newClick.right)                                                 // setTotal(click.left + click.right) tota; is always behind by 1 because state update at some point before rendered not imediately

    setClick(newClick)                                   //give it back to setClick which changes the state
  }
  const rightButton = () => {                         // dont change the state directly insted make a copy of it and change that copy call setState
    const newClick = {
      ...click,
      right: click.right + 1
    }
    setAll(allClicks.concat("R"))
    setTotal(newClick.left + newClick.right)
    //setTotal(click.left + click.right)
    setClick(newClick)
  }
  return (
    <div>

      {click.left}
      <button onClick={leftButton}>left</button>

      <button onClick={rightButton}>right</button>
      {click.right}
      
      <p>total {total}</p>
     < History allClicks ={allClicks} />
    </div>
  )
}



/*const Display = ({counter}) =>{
    return(
      <div>{counter}</div>
    )

    
}
const Button = ({onClick,text}) =>{
  return(
    <button onClick={onClick}>{text}</button>
  )
}
const App = () =>{
  const [counter , setCounter] = useState(0) // destructure code 
  console.log("Curent value", counter)
  const incByOne = () =>{setCounter(counter+1)
  console.log("Inc by one" ,counter)}

  const decByOne = () => {setCounter(counter-1)
  console.log("dec counter by -1" , counter)}
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
