import React from "react";
import Header from "./components/Header";
import { ResetStyles } from "./common/styles";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Layout from "./components/Layout";

function App() {
  return (
    <BrowserRouter>
      <ResetStyles />
      <Header />
      <Layout>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
