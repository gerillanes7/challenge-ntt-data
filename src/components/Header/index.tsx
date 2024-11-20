import { FC } from "react";
import { HeaderContainer, HeaderTitle } from "./Header.styled";
import { useNavigate } from "react-router-dom";

const TITLE = "Podcaster";

export const Header: FC = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => navigate("/")}>{TITLE}</HeaderTitle>
    </HeaderContainer>
  );
};
