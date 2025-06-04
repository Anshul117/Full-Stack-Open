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
 const course = {
  name : 'Half Stack application development',
  parts: [
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
 }
  

  return (
    <div>
      <Header course = {course.name} />
      <Content part1 = {course.parts[0]} part2 = {course.parts[1]} part3 = {course.parts[2]}
      
       />
      <Exercises part1 = {course.parts[0]} part2 = {course.parts[1]} part3 ={course.parts[2]} />
    </div>
  )
}


export default App
