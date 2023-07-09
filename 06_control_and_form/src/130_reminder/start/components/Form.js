import { useState } from "react";

const Form = ({ createTodo }) => {
  const [enteredTodo, setEnteredTodo] = useState("");
  const addTodo = (e) => {
    e.preventDefault();

    // const inputVal = e.target.value;

    // console.log(inputVal)
    const newTodo = {
      id: Math.floor(Math.random() * 1e5), //メモ：乱数ライブラリ　npm docs nanoid
      content: enteredTodo,
    };

    createTodo(newTodo);

    setEnteredTodo("");
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          value={enteredTodo}
          onChange={(e) => setEnteredTodo(e.target.value)}
        />
        <button>追加</button>
        {/* <span>{enteredTodo}</span> */}
      </form>
    </div>
  );
};

export default Form;
