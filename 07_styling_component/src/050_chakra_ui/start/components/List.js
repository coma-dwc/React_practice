import { VStack, StackDivider } from "@chakra-ui/react";

const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
                divider={<StackDivider />}
                // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600'}}
                borderColor="black"
                borderWidth="1px"
                borderRadius="3px" //border-radius: 3px
                p={5}  //p = padding
                alignItems="start"
            >
            {todos.map(todo => {
                return (
                    <div key={todo.id}>
                        <button onClick={() => complete(todo.id)}>完了</button>
                        <span>{todo.content}</span>
                    </div>
                )
            })}
        </VStack>
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