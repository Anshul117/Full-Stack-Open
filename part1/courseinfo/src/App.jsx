const Header = (props) =>{
  return (
    <h1> {props.course}</h1>
  )
}
const Exercises = (props) =>{
  return (
    <p>Total = {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
  )
}
const Content = (props) => {
  return (
  <>
  <p>
        {props.part1.name} {props.part1.exercises}
      </p>
      <p>
        {props.part2.name} {props.part2.exercises}
      </p>
      <p>
        {props.part3.name} {props.part3.exercises}
      </p>

  </>
  )
}
const App = () => {
  const course = "Half Stack application development"
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
  

  return (
    <div>
      <Header course = {course} />
      <Content part1 = {parts[0]} part2 = {parts[1]} part3 = {parts[2]}
      exercises = {parts.exercises} exercises2 = {parts.exercises} exercises3 ={ parts.exercises}
       />
      <Exercises part1 = {parts[0]} part2 = {parts[1]} part3 ={ parts[2]} />
    </div>
  )
}


export default App
