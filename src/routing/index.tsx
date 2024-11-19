import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import ChapterDetail from "@/pages/ChapterDetail/ChapterDetail.screen";
import Home from "@/pages/Home/Home.screen";
import PodcastDetail from "@/pages/PodcastDetail/PodcastDetail.screen";
import { NavigationPaths } from "./constants";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/" element={<ChapterDetail />} />
          <Route path={NavigationPaths.PODCAST} element={<PodcastDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
