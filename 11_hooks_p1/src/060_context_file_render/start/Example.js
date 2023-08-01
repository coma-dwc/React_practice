import "./Example.css";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import { ThemeProvider } from "./context/ThemeContext";

const Example = () => {
  return (
    <ThemeProvider>
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default Example;

// 元々の記述

// import "./Example.css";
// import Main from "./components/Main";
// import Header from "./components/Header";
// import { ThemeProvider } from "./context/ThemeContext";

// const Example = () => {
//   return (
//     <ThemeProvider>
//       <Header />
//       <Main />
//     </ThemeProvider>
//   );
// };

// export default Example;
