import React from "react"
import {renderRoutes} from "react-router-config"
import routes from "@/router/index.js"
import {HashRouter as Router} from "react-router-dom"
function App() {
  return (
    <>
    <Router>
    {renderRoutes(routes)}
    </Router>
    </>
  );
}

export default App;
