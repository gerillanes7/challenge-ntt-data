import { FC } from "react";
import {
  Container,
  CounterContainer,
  HeaderTitle,
} from "./PodcastDetail.styled";
import { usePodcastDetailController } from "./PodcastDetail.controller";
import { Table } from "./components/Table";

const PodcastDetail: FC = () => {
  const { goToEpisodeDetail, episodes } = usePodcastDetailController();

  return (
    <Container>
      <CounterContainer>
        <HeaderTitle>Episodes: {episodes?.length}</HeaderTitle>
      </CounterContainer>

      <CounterContainer>
        <Table data={episodes} onClick={goToEpisodeDetail} />
      </CounterContainer>
    </Container>
  );
};

export default PodcastDetail;
