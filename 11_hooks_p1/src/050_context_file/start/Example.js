import "./Example.css";
import Main from "./components/Main";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
};

export default Example;

// 元々の記述

// import { useState } from "react";
// import "./Example.css";

// const Example = () => {
//   const [theme, setTheme] = useState('light')
  
//   const changeTheme = (e) => setTheme(e.target.value)
  
//   const THEMES = ['light', 'dark', 'red'];

//   return (
//     <>
//       <header className={`content-${theme}`}>
        
//       </header>
//       <main className={`content-${theme}`}>
//         <h1>テーマの切り替え</h1>
//       </main>
//     </>
//   );
// };

// export default Example;
