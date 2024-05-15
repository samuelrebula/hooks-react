import React, { useReducer, useState } from "react";

interface Task {
  name: string;
  isCompleted: boolean;
}

interface State {
  tasks: Task[];
  tasksCount: number;
}

type Action =
  | { type: "add-task"; payload: string }
  | { type: "toggle-task"; payload: number };

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "add-task":
      return {
        ...state,
        tasks: [...state.tasks, { name: action.payload, isCompleted: false }],
        tasksCount: state.tasksCount + 1,
      };
    case "toggle-task":
      return {
        ...state,
        tasks: state.tasks.map((item, index) =>
          index === action.payload
            ? { ...item, isCompleted: !item.isCompleted }
            : item
        ),
      };
    default:
      return state;
  }
};

const HookUseReducer: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, { tasks: [], tasksCount: 0 });

  const [inputValue, setInputValue] = useState("");

  return (
    <div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => {
          dispatch({ type: "add-task", payload: inputValue });
          setInputValue("");
        }}
      >
        Adicionar
      </button>

      {state.tasks.map((task, index) => (
        <p
          key={index}
          onClick={() => dispatch({ type: "toggle-task", payload: index })}
          style={{ textDecoration: task.isCompleted ? "line-through" : "none" }}
        >
          {task.name}
        </p>
      ))}
    </div>
  );
};

export default HookUseReducer;

// import { useReducer } from "react";

// type State = {
//   counter: number;
// };

// type Action = {
//   type: string;
// };

// const reducer = (state: State, action: Action) => {
//   switch (action.type) {
//     case "increment":
//       return {
//         counter: state.counter + 1,
//       };
//     case "decrement":
//       return {
//         counter: state.counter - 1,
//       };
//     default:
//       return state;
//   }
// };

// const HookUseReducer: React.FC = () => {
//   const [state, dispatch] = useReducer(reducer, { counter: 0 });

//   return (
//     <div>
//       <p>{state.counter}</p>
//       <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
//       <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
//     </div>
//   );
// };

// export default HookUseReducer;
