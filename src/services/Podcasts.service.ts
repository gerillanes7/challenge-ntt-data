import { httpClient } from "@/api/httpClient";
import { PodcastDetail, Podcasts } from "./types";

type TPodcasts = {
  getPodcasts: () => Promise<Podcasts | undefined>;
  getPodcastById: (id: string) => Promise<PodcastDetail | undefined> 
};

export const PodcastsService: TPodcasts = {
  getPodcasts: async () => {
    try {
      const response = await httpClient.get<Promise<Podcasts>>(
        "us/rss/toppodcasts/limit=100/genre=1310/json"
      );

      return response.data;
    } catch (e) {
      console.log("Ha ocurrido un error:", e);
    }
  },
  getPodcastById: async (id: string) => {
    try {
      const response = await httpClient.get<Promise<PodcastDetail>>(`lookup?id=${id}`);

      return response.data
    }  catch (e) {
      console.log("Ha ocurrido un error:", e);
    }
  }
};
