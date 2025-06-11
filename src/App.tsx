// src/App.tsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Contato from "../src/pages/Contato";
import Franqueado from "./pages/Franqueado";
import Loja from "./pages/Loja/Store";
import SobreNos from "./pages/SobreNos";
import Tutorial from "./pages/Tutorial";
import Checkout from "./pages/Loja/Checkout/index";

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
       <Route
          path="/contato"
          element={<Contato />}
        />
        <Route
          path="/franqueado"
          element={
              <Franqueado />
          }
        />
        <Route
          path="/loja"
          element={
              <Loja />
          }
        />
        <Route 
          path="/CheckOut" 
          element={ 
              <Checkout />
          }
          />
        <Route
          path="/sobre-nos"
          element={
              <SobreNos />
          }
        />
        <Route
          path="/tutorial"
          element={
              <Tutorial />
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
