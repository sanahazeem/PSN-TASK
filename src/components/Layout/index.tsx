import React, { ReactNode } from "react";
import styled from "styled-components";

interface props {
  children?: ReactNode | undefined;
}

const Layout = ({ children }: props): React.ReactElement => (
  <>
    <Main>{children}</Main>
  </>
);

export const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: 100%;
  padding-top: 5rem;
`;

export default Layout;
