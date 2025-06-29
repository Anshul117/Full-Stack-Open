
import PartRender from './Part'
import StatisticsRender from './Statistics'
const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
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
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    },
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]



  return (
    <div>
      <h1>Web Development curriculum</h1>

      {courses.map(course => 
      
         {
          
          const total = course.parts.reduce((s,item) =>s+item.exercises,0)
          return(<div key={course.id} >

        <h2>{course.name}</h2>
        <ul>
          {course.parts.map(part => (<PartRender key={part.id} part={part} />))}
        </ul>
          <StatisticsRender total = {total} />  
      </div>)})}



    </div>
  )
}

export default App