import { BrowserRouter, Route, Routes } from "react-router-dom";
import Browse from "./Browse";
import Header from "./Header";
import Login from "./Login";

const Body = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
