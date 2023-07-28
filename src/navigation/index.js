import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../Pages";
import { Footer } from "../components";
import { ReduxProvider } from "../global_context";


const Navigation = () => {
  return  <ReduxProvider> <Router >
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/lolopopo" element={<Footer/>} />
    </Routes>
  </Router>
  </ReduxProvider>
}
export default Navigation;