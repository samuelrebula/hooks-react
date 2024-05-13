import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.scss";
import HookUseEffect from "./HookUseEffect";
import HookUseState from "./HookUseState";
import HookUseRef from "./HookUseRef";
import HookUseReducer from "./HookUseReducer";

const root = (ReactDOM as any).createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/useState">UseState</Link>
            </li>
            <li>
              <Link to="/useEffect">UseEffect</Link>
            </li>
            <li>
              <Link to="/UseRef">UseRef</Link>
            </li>
            <li>
              <Link to="/UseReducer">UseReducer</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/useState" element={<HookUseState />} />
          <Route path="/useEffect" element={<HookUseEffect />} />
          <Route path="/useRef" element={<HookUseRef />} />
          <Route path="/useReducer" element={<HookUseReducer />} />
        </Routes>
      </div>
    </Router>
  </React.StrictMode>
);
