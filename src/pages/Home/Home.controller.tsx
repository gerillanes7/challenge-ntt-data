import { ChangeEvent, useEffect, useState } from "react";
import { useGetPodcasts } from "./hooks/useGetPodcasts";
import { Entry } from "@/services/types";

export const useHomeController = () => {
  const [search, setSearch] = useState<string>("");
  const [podcasts, setPodcasts] = useState<Entry[]>([]);
  const [podcastCounter, setPodcastCounter] = useState<number>(0);

  const { data, isLoading } = useGetPodcasts();

  const handleFilterPodcasts = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    setSearch(value);
    
    const filteredPodcasts = data?.feed?.entry.filter(
      (podcast) =>
        podcast["im:name"].label
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase()) ||
        podcast["im:artist"].label
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase())
    )!;

    setPodcasts(filteredPodcasts);
    setPodcastCounter(filteredPodcasts.length);
  };

  useEffect(() => {
    if (data?.feed?.entry?.length) {
      setPodcasts(data.feed.entry);
      setPodcastCounter(data.feed.entry.length);
    }
  }, [data?.feed.entry]);

  return { podcasts, isLoading, handleFilterPodcasts, podcastCounter, search };
};
