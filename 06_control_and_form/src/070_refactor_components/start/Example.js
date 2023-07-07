import { useState } from "react";

import AnimalList from "./components/AnimalList";
import AnimalFilter from "./components/AnimalFilter";

const Example = () => {
  const animals = ["Dog", "Cat", "Rat"];

  const [filterVal, setFilterVal] = useState("");

  const filterdAnimals = animals.filter((animal) => {
    const isMatch = animal.indexOf(filterVal) !== -1;
    return isMatch;
  });

  return (
    <>
      <AnimalFilter filterState={[filterVal, setFilterVal]} />
      <AnimalList animals={filterdAnimals} />
    </>
  );
};

export default Example;

// 元々の記述

// import { useState } from "react";

// const Example = () => {
//   const animals = ["Dog", "Cat", "Rat"];

//   const [filterVal, setFilterVal] = useState("");

//   return (
//     <>
//       <input
//         type="text"
//         value={filterVal}
//         onChange={(e) => setFilterVal(e.target.value)}
//       />
//       <ul>
//         {animals
//           .filter((animal) => {
//             const isMatch = animal.indexOf(filterVal) !== -1;
//             return isMatch;
//           })
//           .map((animal) => {
//             return (
//               <li key={animal}>
//                 {animal}
//                 {animal === "Dog" && "★"}
//               </li>
//             );
//           })}
//       </ul>
//     </>
//   );
// };

// export default Example;