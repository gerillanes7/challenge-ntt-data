import { FC } from "react";
import { Container, Label } from "./styled";

type PodcastCounterProps = {
  counter: number;
};

export const PodcastCounter: FC<PodcastCounterProps> = ({ counter }) => {
  return (
    <Container>
      <Label>{counter}</Label>
    </Container>
  );
};
