import React, { useState } from "react";
import Navbar from "./componants/Navbar";
import News from "./componants/News";
import PropTypes from "prop-types";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import { HelmetProvider } from "react-helmet-async";

export default function App(props) {
  let apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0);
  const [mode, setMode] = useState("light");
  const [textMode, setTextMode] = useState("black");
  const [navMode, setNavMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      setNavMode("#050236");
      setTextMode("white");
      document.body.style.backgroundColor = "black";
    } else {
      setMode("light");
      setNavMode("light");
      setTextMode("black");
      document.body.style.backgroundColor = "white";
    }
  };

  

  return (
    <div>
      <>
        <HelmetProvider>
          <Router>
            <LoadingBar color="red" progress={progress} />
            <Navbar
              toggleMode={toggleMode}
              mode={mode}
              setProgress={setProgress}
              textMode={textMode}
            />
            <Routes>
              <Route
                path="/"
                element={
                  <News
                    key={"latest"}
                    cat={""}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/intresting"
                element={
                  <News
                    key={"intresting"}
                    cat={"intresting"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/entertainment"
                element={
                  <News
                    key={"entertainment"}
                    cat={"entertainment"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/sports"
                element={
                  <News
                    key={"sports"}
                    cat={"sports"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/science"
                element={
                  <News
                    key={"science"}
                    cat={"science"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/business"
                element={
                  <News
                    key={"business"}
                    cat={"business"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/indiatop"
                element={
                  <News
                    key={"indiatop"}
                    cat={"indiatop"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/lifestyle"
                element={
                  <News
                    key={"lifestyle"}
                    cat={"lifestyle"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/world"
                element={
                  <News
                    key={"world"}
                    cat={"world"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/education"
                element={
                  <News
                    key={"education"}
                    cat={"education"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
              <Route
                path="/tech"
                element={
                  <News
                    key={"tech"}
                    cat={"tech"}
                    mode={mode}
                    setProgress={setProgress}
                    textMode={textMode}
                    apiKey={apiKey}
                  />
                }
              />
            </Routes>
          </Router>
        </HelmetProvider>
      </>
    </div>
  );
}

App.defaultProps = {
  cat: "latest",
};
App.propTypes = {
  cat: PropTypes.string,
};
