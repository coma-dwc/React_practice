import Bye from "./components/Bye"
import Hello from "./components/Hello"

const Example = () => {
  // POINT propsの流れは一方通行
  const name = 'Tom';

  return (
    <>
      <Hello name={name}/>
      <Bye name={name}/>
    </>
  );
};

export default Example;

// 元々の記述
// // POINT propsの流れは一方通行
// // POINT propsは読み取り専用

// import Bye from "./components/Bye"
// import Hello from "./components/Hello"

// const Example = () => {
//   return (
//     <>
//       <Hello />
//       <Bye />
//     </>
//   );
// };

// export default Example;
