
const Statistics = ({total}) =>{
  return(
  <div>
    <h2>Statistics</h2>
    <li>   total of {total} exercises</li>
  </div>)
}
const Course = ({part}) =>{
  
  
  return(
    
      <li><b>{part.name}</b>:  <b>{part.exercises}</b></li>
      
   
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  
  const total = course.parts.reduce((sum,item)=> {
    return sum +item.exercises;
  },0)
  console.log(total)
  return (
    <div>
      <h1>{course.name}</h1>
      <ul> {course.parts.map( part =>(<Course key = {part.id}  part = {part} count ={part.exercises} />) )}</ul>
      <Statistics total = {total} />
      

    </div>
  )
}

export default App