import "./index.css";

import Header from "./components/Header";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      {/* <Header /> */}
      <BrowserRouter>
        <Routes>
          <Route
            path="/checkout"
            element={
              <>
                <Header />
                <Checkout />
              </>
            }
          />
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
