import Child from "./components/Child.js";

const Example = () => {
  return <Child />;
};

// 基本的にはdefaultエクスポートを使う
export default Example;


// 以下元々の記述
// import "./Example.css";

// const Example = () => {
//   return (
//     <div className="component">
//       <h3>Hello Component</h3>
//     </div>
//   );
// };

// export default Example;