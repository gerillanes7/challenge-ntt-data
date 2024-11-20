import { CACHE_TIME } from "@/constants";
import { PodcastsService } from "@/services/Podcasts.service";
import { useQuery } from "@tanstack/react-query";

const QUERY_KEY = "GET-PODCAST-BY-ID";

export const useGetPodcastById = (id: string) => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY, id],
    queryFn: () => PodcastsService.getPodcastById(id),
    staleTime: CACHE_TIME
  });

  return {
    data,
    isLoading,
  };
};
