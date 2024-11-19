import { FC } from "react";
import { HeaderContainer, HeaderTitle } from "./Header.styled";

const TITLE = 'Podcaster';

export const Header: FC = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>{TITLE}</HeaderTitle>
    </HeaderContainer>
  );
};
