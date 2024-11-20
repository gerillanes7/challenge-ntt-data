import { ChangeEvent, useEffect, useState } from "react";
import { useGetPodcasts } from "./hooks/useGetPodcasts";
import { Entry } from "@/services/types";
import { useNavigate } from "react-router-dom";
import { NavigationPaths } from "@/routing/constants";
import { usePodcastStore } from "@/stores/podcastStore";
import { useLoaderStore } from "@/stores/loadingStore";
import { LOADING_STATES } from "@/stores/loadingStore/constants";

export const useHomeController = () => {
  const navigate = useNavigate();

  const setLoader = useLoaderStore((state) => state.setLoading);

  const [search, setSearch] = useState<string>("");
  const [podcasts, setPodcasts] = useState<Entry[]>([]);
  const [podcastCounter, setPodcastCounter] = useState<number>(0);

  const setPodcastSelected = usePodcastStore(
    (state) => state.setPodcastSelected
  );

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

  const goToPodcastDetail = (id: string) => {
    navigate(`/${NavigationPaths.PODCAST}/${id}`);
  };

  useEffect(() => {
    if (data?.feed?.entry?.length) {
      setPodcasts(data.feed.entry);
      setPodcastCounter(data.feed.entry.length);
    }
  }, [data?.feed.entry]);

  useEffect(() => {
    if (isLoading) {
      setLoader(LOADING_STATES.LOADING);
    } else {
      setLoader(LOADING_STATES.IDDLE);
    }
  }, [isLoading]);

  useEffect(() => {
    setPodcastSelected({
      artist: "",
      description: "",
      image: "",
      trackName: "",
    });
  }, []);

  return {
    podcasts,
    isLoading,
    handleFilterPodcasts,
    podcastCounter,
    search,
    goToPodcastDetail,
  };
};
