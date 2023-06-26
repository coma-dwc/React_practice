import "./Child.css";
import { List } from "./List.js";

const Child = () => {
  return (
    <div className="component">
      <h3>Hello Component</h3>
      <List />
    </div>
  );
};

export default Child;

// 以下元々の記述(元々Example.jsファイル)
// import "./Example.css";

// const Example = () => {
//   return (
//     <div className="component">
//       <h3>Hello Component</h3>
//     </div>
//   );
// };

// export default Example;
