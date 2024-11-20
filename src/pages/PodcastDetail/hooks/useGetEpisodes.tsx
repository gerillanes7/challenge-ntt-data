import { CACHE_TIME } from "@/constants";
import { formatDuration } from "@/helpers/formatDuration";
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

    const cachedData = localStorage.getItem(`${feedUrl}-episodes-cache`);

    if (cachedData) {
      const parsedData = JSON.parse(cachedData);
      const cacheDate = new Date(parsedData.cacheDate).getTime();
      const currentDate = new Date().getTime();

      if (currentDate - cacheDate < CACHE_TIME) {
        setEpisodes(parsedData.episodes);
        setPodcastDescription(parsedData.description);
        return;
      }
    }

    setLoading(LOADING_STATES.LOADING);

    try {
      const feedResponse = await axios.get(
        `https://cors-anywhere.herokuapp.com/${feedUrl}`
      );
      const feedJson = await parseStringPromise(feedResponse.data);

      const episodesFetched = feedJson.rss.channel[0].item.map(
        (episode: any) => ({
          title: episode.title[0],
          description: episode?.description[0],
          pubDate: new Date(episode.pubDate[0]).toLocaleDateString("es-ES"),
          audioUrl: episode.enclosure[0].$.url,
          duration: episode["itunes:duration"][0].includes(":")
            ? episode["itunes:duration"][0]
            : formatDuration(+episode["itunes:duration"][0]),
          id: episode.guid[0]._,
        })
      );

      const description = feedJson.rss.channel[0].description[0];

      setEpisodes(episodesFetched);
      setPodcastDescription(description);

      const cacheData = {
        cacheDate: new Date().toISOString(),
        episodes: episodesFetched,
        description,
      };

      localStorage.setItem(
        `${feedUrl}-episodes-cache`,
        JSON.stringify(cacheData)
      );
    } catch (e) {
      console.log("Ocurrió un error: ", e);
    } finally {
      setLoading(LOADING_STATES.IDDLE);
    }
  };

  return { handleGetEpisodes, episodes, podcastDescription };
};
