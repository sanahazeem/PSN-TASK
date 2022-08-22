import { ReactElement, ReactNode, useRef } from "react";
import { Dialog } from "@headlessui/react";
import React from "react";
import { useEscapeKeypress } from "../../hooks/useEscapeKeyPress";
import styled from "styled-components";

interface NavDrawerProps {
  children: ReactNode;
  isOpen: boolean;
  toggle: () => void;
}

export const MobileDrawer = ({
  children,
  isOpen,
  toggle,
}: NavDrawerProps): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);

  useEscapeKeypress(() => {
    if (!isOpen) return;
    toggle();
  });

  // hide scrollbar and prevent body from moving when drawer is open
  //put focus on drawer dialogue
  React.useEffect(() => {
    if (!isOpen) return;

    const html = document.documentElement;
    const scrollbarWidth = window.innerWidth - html.clientWidth;

    html.style.overflow = "hidden";
    html.style.paddingRight = `${scrollbarWidth}px`;

    return () => {
      html.style.overflow = "";
      html.style.paddingRight = "";
    };
  }, [isOpen]);

  return (
    <Dialog initialFocus={ref} open={isOpen} onClose={toggle}>
      <StyledContainer>
        <OrientationRight aria-modal={true} ref={ref}>
          <StyledDialogOverlay data-testid="nav-drawer" />
          <StyledContent>{children}</StyledContent>
        </OrientationRight>
      </StyledContainer>
    </Dialog>
  );
};

const StyledContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  margin: 0px;
  overflow: hidden;
  transition: margin-right 0.5s;
  transition: 0.5s;
`;

const StyledContent = styled.div`
  display: flex;
  z-index: 50;
  width: 100%;
  padding-top: 25px;
  color: #fff;
  background-color: #000;
  flex-direction: column;
  position: relative;
  font-weight: 700;
`;

const OrientationRight = styled.div`
  display: flex;
  position: fixed;
  right: 0px;
  margin: 0px;
  width: 80%;
  height: 100%;
  max-width: 20rem;
  outline: 2px solid transparent;
  outline-offset: 2px;
  @media (min-width: 720px) {
    width: 40%;
  }
  @media (min-width: 1280px) {
    display: none;
  }
`;

const StyledDialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 30;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.6;
`;

export default MobileDrawer;
