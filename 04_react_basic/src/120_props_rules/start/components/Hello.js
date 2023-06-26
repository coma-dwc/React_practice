const Hello = (props) => {
  // POINT propsは読み取り専用
  // props.name = 'Bob';
  const desc = Reflect.getOwnPropertyDescriptor(props, 'name');
  console.log(desc);
  // console.log(props.name);
  return (
    <div>
      <h3>Hello {props.name}</h3>
    </div>
  );
};

export default Hello;

// 元々の記述
// const Hello = (props) => {
//   return (
//     <div>
//       <h3>Hello {props.name}</h3>
//     </div>
//   );
// };

// export default Hello;