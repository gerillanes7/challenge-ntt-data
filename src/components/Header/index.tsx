import { FC } from "react";
import { HeaderContainer, HeaderTitle } from "./Header.styled";
import { useNavigate } from "react-router-dom";
import { useLoaderStore } from "@/stores/loadingStore";
import { LOADING_STATES } from "@/stores/loadingStore/constants";
import { Loader } from "../Loader";
import { useIsFetching } from "@tanstack/react-query";

const TITLE = "Podcaster";

export const Header: FC = () => {
  const navigate = useNavigate();

  const isLoading = useLoaderStore((state) => state.loading);

  const isFetching = useIsFetching();

  return (
    <HeaderContainer>
      <HeaderTitle onClick={() => navigate("/")}>{TITLE}</HeaderTitle>
      {(isFetching > 0 || isLoading === LOADING_STATES.LOADING) && <Loader />}
    </HeaderContainer>
  );
};
