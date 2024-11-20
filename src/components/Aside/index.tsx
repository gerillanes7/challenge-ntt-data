import { FC } from "react";
import {
  ArtistName,
  Container,
  DescriptionContent,
  DescriptionContentDiv,
  DescriptionLabel,
  Divider,
  Image,
  ImageContainer,
  InfoContainer,
  SongName,
} from "./styled";

type AsideProps = {
  image: string;
  trackName: string;
  artist: string;
  description: string;
};
export const Aside: FC<AsideProps> = ({
  image,
  trackName,
  artist,
  description,
}) => {
  return (
    <Container>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Divider />
      <InfoContainer>
        <SongName>{trackName}</SongName>

        <ArtistName>by {artist}</ArtistName>
      </InfoContainer>
      <Divider />
      <InfoContainer>
        <DescriptionLabel>Description</DescriptionLabel>
        {description.includes("<") ? (
          <DescriptionContentDiv dangerouslySetInnerHTML={{__html: description}}/>
        ) : (
          <DescriptionContent>{description}</DescriptionContent>
        )}
      </InfoContainer>
    </Container>
  );
};
