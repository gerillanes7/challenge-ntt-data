import { useNavigate, useParams } from "react-router-dom";
import { useGetPodcastById } from "./hooks/useGetPodcastById";
import { Episode, useGetEpisodes } from "./hooks/useGetEpisodes";
import { useEffect } from "react";
import { NavigationPaths } from "@/routing/constants";
import { usePodcastStore } from "@/stores/podcastStore";
import { normalizeEpisodeId } from "@/helpers/normalizePodcastId";

export const usePodcastDetailController = () => {
  const params = useParams();
  const navigate = useNavigate();

  const setPodcastSelected = usePodcastStore(
    (state) => state.setPodcastSelected
  );

  const { data } = useGetPodcastById(params.id!);

  const { handleGetEpisodes, episodes, podcastDescription } = useGetEpisodes();

  const goToEpisodeDetail = (episode: Episode) => {
    const { id } = episode;
    const normalizedId = normalizeEpisodeId(id);
    navigate(`${NavigationPaths.EPISODE}/${normalizedId}`, {
      state: episode,
    });
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
      handleGetEpisodes(data?.results[0].feedUrl);
    }
  }, [data?.results[0].feedUrl]);

  useEffect(() => {
    if (episodes.length && data?.results.length) {
      handleSelectedPodcast();
    }
  }, [episodes, data?.results[0]]);

  return {
    episodes,
    details: data,
    goToEpisodeDetail,
    podcastDescription,
  };
};
