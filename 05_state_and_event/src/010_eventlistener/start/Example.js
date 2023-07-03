const Example = () => {
  const clickHandler = () => {
    alert('ボタンがクリックされました。');
  }
  return (
    <>
      <button onClick={clickHandler}>クリックしてね</button>
      <button>クリックしてね</button>
    </>
  );
};

export default Example;


// 元々の記述

// const Example = () => {
//   return (
//     <></>
//   );
// };

// export default Example;
