import { useTheme, useUpdateTheme } from "../context/ThemeContext"


const Header = () => {
  const theme = useTheme();
  const setTheme = useUpdateTheme();

  const THEMES = ["light", "dark", "red"];

  const changeTheme = (e) => setTheme(e.target.value);

  console.log('header');

  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label key={_theme}>
            <input
              type="radio"
              value={_theme}
              checked={theme === _theme}
              onChange={changeTheme}
            />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;

// 元々の記述

// import { useTheme } from "../context/ThemeContext"


// const Header = () => {
//   const [theme, setTheme] = useTheme();

//   const THEMES = ["light", "dark", "red"];

//   const changeTheme = (e) => setTheme(e.target.value);

//   return (
//     <header className={`content-${theme}`}>
//       {THEMES.map((_theme) => {
//         return (
//           <label key={_theme}>
//             <input
//               type="radio"
//               value={_theme}
//               checked={theme === _theme}
//               onChange={changeTheme}
//             />
//             {_theme}
//           </label>
//         );
//       })}
//     </header>
//   );
// };

// export default Header;