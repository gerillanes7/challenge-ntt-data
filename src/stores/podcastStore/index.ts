import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type podcast = {
  image: string;
  trackName: string;
  artist: string;
  description: string;
};
type podcastState = {
  podcastSelected: podcast;
  setPodcastSelected: (podcast: podcast) => void;
};

export const usePodcastStore = create<podcastState>()(
  persist(
    (set) => ({
      podcastSelected: {
        image: "",
        trackName: "",
        artist: "",
        description: "",
      },
      setPodcastSelected: (podcast) =>
        set((_) => ({ podcastSelected: podcast })),
    }),
    {
      name: "podcast-store",
    }
  )
);
