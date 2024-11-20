import { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Layout } from "@/components/Layout";
import Home from "@/pages/Home/Home.screen";
import PodcastDetail from "@/pages/PodcastDetail/PodcastDetail.screen";
import { NavigationPaths } from "./constants";
import { PodcastLayout } from "@/components/PodcastLayout";
import EpisodeDetail from "@/pages/EpisodeDetail/Episode.screen";

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
            <Route path={`${NavigationPaths.EPISODE}/:id`} element={<EpisodeDetail />}/>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;
