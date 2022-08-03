import React from "react"
import {renderRoutes} from "react-router-config"
import routes from "@/router/index.js"
import {BrowserRouter} from "react-router-dom"
function App() {
  return (
    <>
    <BrowserRouter>
    {renderRoutes(routes)}
    </BrowserRouter>
    </>
  );
}

export default App;
