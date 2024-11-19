import { FC } from "react";
import { Author, CardContainer, Image, ImageContainer, Title } from "./styled";

type PodcastCardProps = {
  title: string;
  author: string;
  image: string;
};

export const PodcastCard: FC<PodcastCardProps> = ({ title, author, image }) => {
  return (
    <CardContainer>
      <ImageContainer>
        <Image src={image} />
      </ImageContainer>
      <Title>{title}</Title>
      <Author>Author: {author}</Author>
    </CardContainer>
  );
};
