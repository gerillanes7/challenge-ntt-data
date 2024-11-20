import { FC } from "react";
import {
  Container,
  CounterContainer,
  HeaderTitle,
} from "./PodcastDetail.styled";
import { usePodcastDetailController } from "./PodcastDetail.controller";
import { Table } from "./components/Table";

const PodcastDetail: FC = () => {
  const { goToEpisodeDetail, chapters } = usePodcastDetailController();

  return (
    <Container>
        <CounterContainer>
          <HeaderTitle>Episodes: {chapters?.length}</HeaderTitle>
        </CounterContainer>

        <CounterContainer>
          <Table data={chapters} onClick={goToEpisodeDetail} />
        </CounterContainer>
    </Container>
  );
};

export default PodcastDetail;
