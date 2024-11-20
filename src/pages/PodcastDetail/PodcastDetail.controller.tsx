import { useNavigate, useParams } from "react-router-dom";
import { useGetPodcastById } from "./hooks/useGetPodcastById";
import { useGetChapters } from "./hooks/useGetChapters";
import { useEffect } from "react";
import { NavigationPaths } from "@/routing/constants";
import { usePodcastStore } from "@/stores/podcastStore";

export const usePodcastDetailController = () => {
  const params = useParams();
  const navigate = useNavigate();

  const setPodcastSelected = usePodcastStore(
    (state) => state.setPodcastSelected
  );

  const { data } = useGetPodcastById(params.id!);

  const { handleGetChapters, chapters, podcastDescription } = useGetChapters();

  const goToEpisodeDetail = (id: string) => {
    navigate(`${NavigationPaths.EPISODE}/${id}`);
  };

  const handleSelectedPodcast = () => {
    const podcast = {
      image: data?.results[0].artworkUrl100 || "",
      trackName: data?.results[0].trackName || "",
      artist: data?.results[0].artistName || "",
      description: podcastDescription,
    };

    setPodcastSelected(podcast);
  };

  useEffect(() => {
    if (data?.results[0].feedUrl) {
      handleGetChapters(data?.results[0].feedUrl);
    }
  }, [data?.results[0].feedUrl]);

  useEffect(() => {
    if (chapters.length && data?.results.length) {
      handleSelectedPodcast();
    }
  }, [chapters, data?.results[0]]);

  return {
    chapters,
    details: data,
    goToEpisodeDetail,
    podcastDescription,
  };
};
