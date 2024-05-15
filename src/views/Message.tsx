import { useContext } from "react";
import { ThemeContext } from "../contexts/theme-context";

const Message: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <>
      <div
        style={{
          padding: 20,
          borderRadius: 10,
          backgroundColor: theme === "light" ? "#eee" : "#333",
          color: theme === "dark" ? "#eee" : "#333",
        }}
      >
        <h1>Current theme: {theme}</h1>

        <button onClick={() => toggleTheme()}>Toggle theme</button>
      </div>
    </>

    // <>
    //   <ThemeContext.Consumer>
    //     {(value) => (
    //       <div
    //         style={{
    //           padding: 20,
    //           borderRadius: 10,
    //           backgroundColor: value.theme === "light" ? "#eee" : "#333",
    //           color: value.theme === "dark" ? "#eee" : "#333",
    //         }}
    //       >
    //         <h1>Current theme: {value.theme}</h1>

    //         <button onClick={() => value.toggleTheme()}>Toggle theme</button>
    //       </div>
    //     )}
    //   </ThemeContext.Consumer>
    // </>
  );
};

export default Message;
