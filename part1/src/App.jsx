const Header = (props) => {
  return (
    <div>
      <h1>{props.courseName}</h1>
    </div>
  );
};

const Part = (props) => {
  return (
    <div>
      <p>{props.part}</p>
    </div>
  );
};

const Content = (props) => {
  return (
    <div>
      <Part part="Fundamentals of React" />
      <Part part="Using props to pass data" />
      <Part part="State of a component" />
    </div>
  );
};

const Total = (props) => {
  return (
    <div>
      <p>{props.exercises}</p>
    </div>
  );
};

const App = () => {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  return (
    <div>
      <Header courseName={course} />
      <Content />
      <Total exercises={exercises1 + exercises2 + exercises3} />
    </div>
  );
};

export default App;
