import { useState } from 'react'
const StatisticLine = ({text , value}) =>{
  return (
    <div> {text} {value}</div>
  )
}
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )

}
const Statistics  = ({good ,neutral,bad}) =>{
  if(good ==0 && neutral==0 && bad ==0){
    return (
      <div>
      <h2>Statistics</h2>

        <p><b>No FeedBack is given</b></p>
      </div>
    )
  }
  const total = good + neutral + bad
  const Avg =total==0 ? "No inputYet" : (good + bad*-1)/total
  const positive = total ==0 ?"No inputYet" :(good)/total
  return (
    <div>
      <h2> Statistics</h2>
      <StatisticLine text = {"Good : "} value = {good} />
      <StatisticLine text = {"Bad : "} value = {bad} />
      <StatisticLine text = {"Neutral :"} value = {neutral} />
      <StatisticLine text = {"Total :"} value = {total} />
      <StatisticLine text = {"Avg :"} value = {Avg} />
      <StatisticLine text = {"Positive : "} value = {positive} />

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