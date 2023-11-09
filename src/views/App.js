import Header from "../components/Header/Header";
import "./App.scss";
import MyComponent from "./Example/MyComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import NoPage from "../components/NoPage";
function App() {
  return (
    <>
      <div className="App">
        <img src="./KHOIVO.ico" className="App-logo" alt=""></img>
        <div>Khôi Võ React</div>
        {/* <MyComponent /> */}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Header />}>
            <Route index element={<Home />} />
            <Route path="component" element={<MyComponent />} />
            <Route path="*" element={<NoPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
