import ThemeContextProvider from "./contexts/theme-context";
import Greeting from "./views/Greeting";
import Message from "./views/Message";

const HookUseContext: React.FC = () => {
  return (
    <ThemeContextProvider>
      <Message />
      <Greeting />
    </ThemeContextProvider>
  );
};

export default HookUseContext;
