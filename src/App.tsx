import React from "react";
import Header from "./components/Header";
import { ResetStyles } from "./common/styles";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <ResetStyles />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
