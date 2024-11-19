import { ChangeEvent, useEffect, useState, useTransition } from "react";
import { useGetPodcasts } from "./hooks/useGetPodcasts";
import { Entry } from "@/services/types";

export const useHomeController = () => {
  const [podcasts, setPodcasts] = useState<Entry[]>([]);
  const [podcastCounter, setPodcastCounter] = useState<number>(0);

  const { data, isLoading } = useGetPodcasts();

  const [isPending, startTransition] = useTransition();

  const handleFilterPodcasts = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    startTransition(() => {
      const filteredPodcasts = podcasts.filter(
        (podcast) =>
          podcast["im:name"].label
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase()) ||
          podcast["im:artist"].label
            .toLocaleLowerCase()
            .includes(value.toLocaleLowerCase())
      );

      setPodcasts(filteredPodcasts);
      setPodcastCounter(filteredPodcasts.length)
    });
  };

  useEffect(() => {
    if (data?.feed?.entry?.length) {
      setPodcasts(data.feed.entry);
      setPodcastCounter(data.feed.entry.length)
    }
  }, [data?.feed.entry]);

  return { podcasts, isLoading, isPending, handleFilterPodcasts, podcastCounter };
};
