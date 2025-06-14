import { useState } from 'react'
const Button = ({ onClick, text }) => {
  return (
    <button onClick={onClick}>{text}</button>
  )

}
const Display = (props) => {
  return (<div>
    {props.text}   {props.att}

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


      <h2>statistics</h2>
      <Display text="good :" att={good} />
      <Display text="neutral :" att={neutral} />
      <Display text="bad :" att={bad} />


    </div>
  )
}

export default App