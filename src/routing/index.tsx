import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import ChapterDetail from "@/pages/EpisodeDetail/Episode.screen";
import Home from "@/pages/Home/Home.screen";
import PodcastDetail from "@/pages/PodcastDetail/PodcastDetail.screen";
import { NavigationPaths } from "./constants";
import { PodcastLayout } from "@/components/PodcastLayout";

const Routing: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path={`${NavigationPaths.PODCAST}/:id`}
            element={<PodcastLayout />}
          >
            <Route index element={<PodcastDetail />} />
            <Route path={`${NavigationPaths.EPISODE}/:id`} element={<ChapterDetail />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
