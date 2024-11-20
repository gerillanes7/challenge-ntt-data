import { useLoaderStore } from "@/stores/loadingStore";
import { LOADING_STATES } from "@/stores/loadingStore/constants";
import axios from "axios";
import { useState } from "react";
import { parseStringPromise } from "xml2js";

export type Episode = {
  audioUrl: string;
  description: string;
  duration: string;
  id: string;
  pubDate: string;
  title: string;
};

export const useGetEpisodes = () => {
  const setLoading = useLoaderStore((state) => state.setLoading);

  const [episodes, setEpisodes] = useState<Episode[]>([]);
  const [podcastDescription, setPodcastDescription] = useState<string>("");

  const handleGetEpisodes = async (feedUrl: string) => {
    if (!feedUrl) return;
    setLoading(LOADING_STATES.LOADING);
    try {
      const feedResponse = await axios.get(feedUrl);
      const feedJson = await parseStringPromise(feedResponse.data);

      const episodesFetched = feedJson.rss.channel[0].item.map(
        (episode: any) => ({
          title: episode.title[0],
          description: episode?.description[0],
          pubDate: new Date(episode.pubDate[0]).toLocaleDateString("es-ES"),
          audioUrl: episode.enclosure[0].$.url,
          duration: episode["itunes:duration"][0],
          id: episode.guid[0]._,
        })
      );

      const description = feedJson.rss.channel[0].description[0];

      setEpisodes(episodesFetched);
      setPodcastDescription(description);
    } catch (e) {
      console.log("Ocurrió un error: ", e);
    } finally {
      setLoading(LOADING_STATES.IDDLE);
    }
  };

  return { handleGetEpisodes, episodes, podcastDescription };
};
