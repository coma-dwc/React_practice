import { useState } from "react";

// if文、&&、??　(null型演算子)、3項演算子項演算子
const Example = () => {
  const animals = ["Dog", "Cat", null, "Rat"];  //??　(null型演算子)の確認の為nullを追加

  const [filterVal, setFilterVal] = useState("");

  return (
    <>
      <input
        type="text"
        value={filterVal}
        onChange={(e) => setFilterVal(e.target.value)}
      />
      <ul>
        {animals
          .filter((animal) => {
            const animalStr = animal ?? ""; //null型演算子の時に　左側の値(animal)がnullかundefinedの時に右側の値("")を返す
            const isMatch = animalStr.indexOf(filterVal) !== -1; //??　(null型演算子)の確認の為animalからanimalStrに記述変更

            return isMatch;
          })
          .map((animal) => {
            //&&条件
            return <li key={animal}>{
              animal ?? "null,undefinedでした" //null型演算子の場合
              }{animal === "Dog" && "★"}</li>;

            // 3項演算子(おすすめ:重複した記述を避けるため メンテナンスしやすい)
            // return <li key={animal}>{
            //   animal === "Dog" 
            //     ? animal + "★" 
            //     : animal
            //   }</li>;

            // if文
            // if(animal === "Dog") {
            //   return <li key={animal}>{animal}★</li>
            // } else {
            //   return <li key={animal}>{animal}</li>
            // }
          })}
      </ul>
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
//             console.log(animal.indexOf(filterVal));
//             return isMatch;
//           })
//           .map((animal) => (
//             <li key={animal}>{animal}</li>
//           ))}
//       </ul>
//     </>
//   );
// };

// export default Example;
