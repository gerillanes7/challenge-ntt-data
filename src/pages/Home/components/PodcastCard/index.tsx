import { FC } from "react";
import { Author, CardContainer, Image, ImageContainer, Title } from "./styled";

type PodcastCardProps = {
  title: string;
  author: string;
  image: string;
  onClick: () => void;
};

export const PodcastCard: FC<PodcastCardProps> = ({
  title,
  author,
  image,
  onClick,
}) => {
  return (
    <CardContainer onClick={onClick}>
      <ImageContainer>
        <Image src={image} alt={`${image}-${title}`} />
      </ImageContainer>
      <Title>{title}</Title>
      <Author>Author: {author}</Author>
    </CardContainer>
  );
};
