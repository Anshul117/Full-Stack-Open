import { useState } from 'react'
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )

}
const Statistics  = ({good ,neutral,bad}) =>{
  const total = good + neutral + bad
  const Avg =total==0 ? "No inputYet" : (good + bad*-1)/total
  const positive = total ==0 ?"No inputYet" :(good)/total
  return (
    <div>
      <h2> Statistics</h2>
      <p>Good : {good}</p>
      <p>Bad : {bad}</p>
      <p> Neutral : {neutral}</p>
      <p>Total : {total}</p>
      <p> Avg : {Avg}</p>
      <p> positive : {positive}</p>

    </div>
  )
    
   
      
    
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  return (
    <div>
      <h1>Give FeedBack</h1>
      <Button onClick={()=> setGood(good+1)} text="good" />
     <Button onClick={() => setNeutral(neutral+1)} text="neutral" />
      <Button onClick={()=> setBad(bad+1)} text="bad" />
      <Statistics good = {good} bad = {bad} neutral = {neutral} />


    </div>
  )
}

export default App