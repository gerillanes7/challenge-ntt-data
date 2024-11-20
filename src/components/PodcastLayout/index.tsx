import { FC } from "react";
import { Container, FirstColumn, SecondColumn } from "./styled";
import { Outlet } from "react-router-dom";
import { Aside } from "../Aside";
import { usePodcastStore } from "@/stores/podcastStore";

export const PodcastLayout: FC = () => {
  const { artist, description, image, trackName } = usePodcastStore(
    (state) => state.podcastSelected
  );

  return (
    <Container>
      <FirstColumn>
        <Aside
          artist={artist}
          description={description}
          image={image}
          trackName={trackName}
        />
      </FirstColumn>
      <SecondColumn>
        <Outlet />
      </SecondColumn>
    </Container>
  );
};
