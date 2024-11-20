import { FC } from "react";
import {
  Container,
  BoxContainer,
  HeaderTitle,
} from "./PodcastDetail.styled";
import { usePodcastDetailController } from "./PodcastDetail.controller";
import { Table } from "./components/Table";

const PodcastDetail: FC = () => {
  const { goToEpisodeDetail, episodes } = usePodcastDetailController();

  return (
    <Container>
      <BoxContainer>
        <HeaderTitle>Episodes: {episodes?.length}</HeaderTitle>
      </BoxContainer>

      {episodes?.length > 0 && (
        <BoxContainer>
          <Table data={episodes} onClick={goToEpisodeDetail} />
        </BoxContainer>
      )}
    </Container>
  );
};

export default PodcastDetail;
