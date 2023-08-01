import GrandChild from "./GrandChild";
const Child = () => (
  <div style={{ border: "1px solid black", padding: 10 }}>
    <h3>子コンポーネント</h3>
    <GrandChild />
  </div>
);
export default Child;

// 元々の記述

// import GrandChild from "./GrandChild";
// const Child = () => (
//   <div style={{ border: "1px solid black", padding: 10 }}>
//     <h3>子コンポーネント</h3>
//     <GrandChild />
//   </div>
// );
// export default Child;