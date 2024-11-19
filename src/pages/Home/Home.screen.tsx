import { FC } from "react";
import { useHomeController } from "./Home.controller";
import { Container, FilterContainer, FilterInput, Grid } from "./Home.styled";
import { PodcastCard } from "./components/PodcastCard";
import { getPodcastImage } from "@/helpers/getPodcastImage";
import { PodcastCounter } from "./components/PodcastCounter";

const INPUT_PLACEHOLDER = "Filter podcasts...";

const Home: FC = () => {
  const { podcasts, handleFilterPodcasts, podcastCounter, search } =
    useHomeController();

  return (
    <Container>
      <FilterContainer>
        <PodcastCounter counter={podcastCounter} />
        <FilterInput
          placeholder={INPUT_PLACEHOLDER}
          onChange={handleFilterPodcasts}
          value={search}
          type="text"
        />
      </FilterContainer>
      <Grid>
        {podcasts?.map((podcast) => (
          <PodcastCard
            title={podcast["im:name"].label}
            author={podcast["im:artist"].label}
            image={getPodcastImage(podcast["im:image"])}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
