import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.scss";
import Layouts from "./components/Layouts";
import Inputs from "./components/Inputs";
import CountryInfo from "./components/CountryInfo";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState("");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Layouts darkMode={darkMode} setDarkMode={setDarkMode}>
                <Inputs
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                  input={input}
                  setInput={setInput}
                  selected={selected}
                  setSelected={setSelected}
                />
              </Layouts>
            </>
          }
        ></Route>
        <Route path="/about/:name" element={<CountryInfo />}>
          {" "}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
