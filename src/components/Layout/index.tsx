import { FC } from "react";
import { Header } from "../Header";
import { Outlet } from "react-router-dom";
import { LayoutContainer, OutletContainer } from "./Layout.styled";

export const Layout: FC = () => {
  return (
    <LayoutContainer>
      <Header />
      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </LayoutContainer>
  );
};
