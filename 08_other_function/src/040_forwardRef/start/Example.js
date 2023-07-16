import { useRef, forwardRef } from "react";

const Input = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />
});

const Example = () => {
  const ref = useRef();
  return (
    <>
      <Input ref={ref}/>
      <button onClick={() => ref.current.focus()}>
        インプット要素をフォーカスする
      </button>
    </>
  );
};

export default Example;

// 元々の記述

// import { useRef, forwardRef } from "react";

// const Example = () => {
//   const ref = useRef();
//   return (
//     <>
//       <input type="text" ref={ref} />
//       <button onClick={() => ref.current.focus()}>
//         インプット要素をフォーカスする
//       </button>
//     </>
//   );
// };

// export default Example;