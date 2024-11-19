import { CACHE_TIME } from "@/constants";
import { PodcastsService } from "@/services/Podcasts.service";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "GET-100-PODCASTS";

export const useGetPodcasts = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: PodcastsService.getPodcasts,
    staleTime: CACHE_TIME,
  });

  return { data, isLoading };
};
