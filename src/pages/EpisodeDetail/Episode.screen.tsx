import { FC } from "react";
import {
  Container,
  Description,
  DescriptionDiv,
  Title,
} from "./EpisodeDetail.styled";
import { useLocation } from "react-router-dom";

const EpisodeDetail: FC = () => {
  const { state: episode } = useLocation();  

  const isHtml = episode.description.includes("<");

  return (
    <Container>
      <Title>{episode.title}</Title>
      {isHtml ? (
        <DescriptionDiv
          dangerouslySetInnerHTML={{ __html: episode.description }}
        />
      ) : (
        <Description>{episode.description}</Description>
      )}

      <audio src={episode.audioUrl} controls></audio>
    </Container>
  );
};

export default EpisodeDetail;
