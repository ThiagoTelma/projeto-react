// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PageTemplate from "./components/Layout/PageTemplate"

import Home from "./pages/Home";
/*import Contato from "./pages/Contato";
import Franqueado from "./pages/Franqueado";
import Loja from "./pages/Loja";
import SobreNos from "./pages/SobreNos";
import Tutorial from "./pages/Tutorial";*/

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
              <Home />
          }
        />
       {/* <Route
          path="/contato"
          element={
           <PageTemplate>
              <Contato />
            </PageTemplate>
          }
        />
        {/*<Route
          path="/franqueado"
          element={
            <PageTemplate>
              <Franqueado />
            </PageTemplate>
          }
        />*/}
       {/* <Route
          path="/loja"
          element={
            <PageTemplate>
              <Loja />
            </PageTemplate>
          }
        />
      {/*  <Route
          path="/sobre-nos"
          element={
            <PageTemplate>
              <SobreNos />
            </PageTemplate>
          }
        />*/}
        {/*<Route
          path="/tutorial"
          element={
            <PageTemplate>
              <Tutorial />
            </PageTemplate>
          }
        />*/}
      </Routes>
    </Router>
  );
};

export default App;
