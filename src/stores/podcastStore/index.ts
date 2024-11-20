import { create } from "zustand";

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

export const usePodcastStore = create<podcastState>()((set) => ({
  podcastSelected: {
    image: "",
    trackName: "",
    artist: "",
    description: "",
  },
  setPodcastSelected: (podcast) =>
    set((_) => ({ podcastSelected: podcast })),
}));
