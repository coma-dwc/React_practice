import "./Toast.css";

const Toast = ({ visible, handleCloseClick }) => {
  const toastClassName = visible ? "toast is-visible" : "toast";
  return (
    <div className={toastClassName}>
      <div className="toast__content">
        <p>トースト</p>
        <button
          type="button"
          className="toast__button"
          onClick={handleCloseClick}
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;

// 元々の記述

// import "./Toast.css";

// const Toast = ({ visible, handleCloseClick }) => {
//   const toastClassName = visible ? "toast is-visible" : "toast";
//   return (
//     <div className={toastClassName}>
//       <div className="toast__content">
//         <p>トースト</p>
//         <button
//           type="button"
//           className="toast__button"
//           onClick={handleCloseClick}
//         >
//           ×
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Toast;