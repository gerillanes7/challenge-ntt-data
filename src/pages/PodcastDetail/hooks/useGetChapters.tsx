import axios from "axios";
import { useState } from "react";
import { parseStringPromise } from "xml2js";

type Chapter = {
  audioUrl: string;
  description: string;
  duration: string;
  id: string;
  pubDate: string;
  title: string;
};

export const useGetChapters = () => {
  const [chapters, setChapters] = useState<Chapter[]>([]);
  const [podcastDescription, setPodcastDescription] = useState<string>("");

  const handleGetChapters = async (feedUrl: string) => {
    if (!feedUrl) return;

    try {
      const feedResponse = await axios.get(feedUrl);
      const feedJson = await parseStringPromise(feedResponse.data);
      
      const chaptersFetched = feedJson.rss.channel[0].item.map(
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

      setChapters(chaptersFetched);
      setPodcastDescription(description);
    } catch (e) {
      console.log("Ocurrió un error: ", e);
    }
  };

  return { handleGetChapters, chapters, podcastDescription };
};
