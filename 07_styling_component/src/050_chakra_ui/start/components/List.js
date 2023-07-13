import { VStack, StackDivider, HStack, IconButton, Text } from "@chakra-ui/react";
import { VscCheck } from "react-icons/vsc";
const List = ({todos, deleteTodo}) => {
    const complete = (id) => {
        deleteTodo(id)
    }
    return (
        <VStack
                divider={<StackDivider />}
                width="80%"
                bgColor="white"
                // color={{ sm: 'red.600', md: 'blue.600', lg: 'green.500', xl: 'red.600'}}
                borderColor="blackAlpha.100"
                borderWidth="1px"
                borderRadius="3px" //border-radius: 3px
                p={5}  //p = padding
                alignItems="start"
            >
            {todos.map(todo => {
                return (
                    <HStack key={todo.id} spacing="5">
                        <IconButton onClick={() => complete(todo.id)} 
                        icon={<VscCheck />} 
                        isRound 
                        bgColor="cyan.100" 
                        opacity="0.5">
                            完了
                        </IconButton>
                        <Text>{todo.content}</Text>
                    </HStack>
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