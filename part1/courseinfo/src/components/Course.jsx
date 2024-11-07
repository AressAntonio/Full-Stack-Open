
const Course = ({course})=>{

    const title = 'Course Info';

    const partDetails = course[0].parts.map(part => {
      return (

          <p key={part.id}>
            {part.name} : <span>{part.exercises}</span>.
          </p>
      );
    });
    console.log('objects render: ',partDetails);

    const partDetailsTwo = course[1].parts.map(part =>{
      return(
        <p key={part.id}>
          {part.name} : <span>{part.exercises}</span>
        </p>
      );
    });
    console.log('object2 render: ', partDetailsTwo);

    const Sum = ()=>{
      const allExercises = course[0].parts.reduce((acount, part)=>{
        return acount += part.exercises;
      }, 0);
      console.log('total of exercises: ',allExercises);

      return(
        <p>
           <strong>
            All exercises:  {allExercises}.
            </strong>
        </p>
      )
    };

    const SumTwo = ()=>{
      const allExercises = course[1].parts.reduce((acount, part)=>{
        return acount += part.exercises;
      }, 0)
      console.log('total of exercises: ',allExercises);

      return(
        <p>
           <strong>
            All exercises:  {allExercises}.
            </strong>
        </p>
      )
    }

    return(
      <>
        <h1>
        <strong>
          {title}
        </strong>
        </h1>

        <h2>
        <strong>
          {course[0].name}
        </strong>
        </h2>

        <article>
          {partDetails}
          <Sum />
        </article>

        <h3>
          <strong>
            {course[1].name}
          </strong>
        </h3>

        <article>
          {partDetailsTwo}
          <SumTwo />
        </article>

        
      </>
    )
      
};

export default Course;