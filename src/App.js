import React from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import DetailPage from "./components/DetailPage";
import LoginPage from "./components/LoginPage";
import { Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";

function App() {
  const username = useSelector((state) => state.user.user.name);

  return (
    <div className="App">
      <Header />
      <Routes>
        {!username ? (
          <Route path="/" element={<LoginPage />} />
        ) : (
          <>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/detail/:id" element={<DetailPage />} />
          </>
        )}
      </Routes>
    </div>
  );
}

export default App;
