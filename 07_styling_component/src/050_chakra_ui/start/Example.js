import { ChakraProvider } from "@chakra-ui/react";

import Todo from "./components/Todo"

const Example = () => {
  return (
    <>
    <ChakraProvider>
      <Todo />
    </ChakraProvider>
    </>
  );
};

export default Example;


// 元々の記述

// import Todo from "./components/Todo"

// const Example = () => {
//   return (
//     <>
//       <h2>Reminder</h2>
//       <Todo />
//     </>
//   );
// };

// export default Example;