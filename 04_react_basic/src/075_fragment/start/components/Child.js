import "./Child.css";
import { Fragment } from "react";


const Child = () => {
  return (
    <Fragment>
      <div className="component">
        <h3>Hello Component</h3>
      </div>
      <h3>Hello Fragment</h3>
      <p>Lorem ipsum dolor sit amet
      consectetur adipisicing elit.
      Obcaecati repellat dolor doloribus
      iure consequatur soluta? Optio
      corrupti ratione suscipit recusandae
      eius perspiciatis illo corporis?
      Aliquam nam repellendus quos ezpedita
      est? </p>
    </Fragment>
  );
};

export default Child;

// 元々の記述
// import "./Child.css";

// const Child = () => {
//   return (
//     <div className="component">
//       <h3>Hello Component</h3>
//     </div>
//   );
// };

// export default Child;