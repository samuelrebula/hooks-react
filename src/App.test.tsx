import { render } from "@testing-library/react";
import HookUseState from "./HookUseState";
import HookUseEffect from "./HookUseEffect";
import HookUseRef from "./HookUseRef";
import HookUseReducer from "./HookUseReducer";
import HookUseContext from "./HookUseContext";

test("renders componens", () => {
  render(<HookUseState />);
  render(<HookUseEffect />);
  render(<HookUseRef />);
  render(<HookUseReducer />);
  render(<HookUseContext />);
});
