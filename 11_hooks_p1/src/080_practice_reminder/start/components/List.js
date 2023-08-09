import Item from "./Item";

const List = ({todos, deleteTodo, updateTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <div>
            {todos.map(todo => <Item todo={todo} complete={complete} 
            key={todo.id} updateTodo={updateTodo}/>)}
        </div>
    );
}

export default List;

// 元々の記述

// const List = ({todos, deleteTodo}) => {
//     const complete = (id) => {
//         deleteTodo(id)
//     }
//     return (
//         <div>
//             {todos.map(todo => {
//                 return (
//                     <div key={todo.id}>
//                         <button onClick={() => complete(todo.id)}>完了</button>
//                         <span>{todo.content}</span>
//                     </div>
//                 )
//             })}
//         </div>
//     );
// }

// export default List;