// export default function Task({ task }) {
//     const [isDone, setIsDone] = React.useState(false);
//     return (
//       <TaskWrapper>
//         <CheckBox>
//           <NotDone isDone={isDone} onClick={() => setIsDone(true)} />
//           <Done
//             isDone={isDone}
//             src={checkMark}
//             alt={"is done"}
//             onClick={() => setIsDone(false)}
//           />
//         </CheckBox>
//         <Todo>{task}</Todo>
//       </TaskWrapper>
//     );
//   }

// import React from "react";
// import { useState } from "react";

// export default function Task({ task })()=> {
//     const [isDone, setIsDone] = React.useState(false);
//     return (
//       <TaskWrapper
//           isDone={isDone}
//       >
//         <CheckBox>
//           <NotDone isDone={isDone} onClick={() => setIsDone(true)} />
//           <Done
  
//             src={checkMark}
//             alt={"is done"}
//             onClick={() => setIsDone(false)}
//           />
//         </CheckBox>
//         <Todo>{task}</Todo>
//       </TaskWrapper>
//     );
//   }
//   export default function TodoList(props) {
//     return (
//       <Todos>
//         <Task isDone={props.isDone} />
  
//       </Todos>
//     );
//   }
function App() {
    const tasks = ["Task 1", "Task 2", "Task 3"];

    return (
        <div>
            <h1>Todo List</h1>
            <TodoList tasks={tasks} />
        </div>
    );
}

export default App;