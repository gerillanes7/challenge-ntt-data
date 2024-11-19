import Home from "@/pages/Home/Home.screen";
import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
