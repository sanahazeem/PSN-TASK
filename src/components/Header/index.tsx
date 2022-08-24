import { ReactElement, useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";
import MobileDrawer from "../MobileDrawer";
import { Menu as MenuIcon } from "react-feather";
import { X as CloseIcon } from "react-feather";
import { mediaLargerThan } from "../../common/styles/variables";
import psnLogo from "../../assets/psnLogo.png";

export interface MobileNavigationDrawerProps {
  isOpen: boolean;
  onDismiss: () => void;
}

interface navItem {
  name: string;
  link: string;
}

const navList = [
  { name: "Channel", link: "/channel" },
  { name: "Opportunities", link: "/opportunities" },
  { name: "Clients", link: "/clients" },
  { name: "Creators", link: "/creators" },
  { name: "About", link: "/about" },
  { name: "Working at PSN", link: "/jobs" },
  { name: "Vacancies", link: "/jobs-2" },
  { name: "Editorial Policy", link: "/editorial-policy" },
  { name: "Contact", link: "/contact" },
];

const MobileNavigationDrawer = ({
  isOpen,
  onDismiss,
}: MobileNavigationDrawerProps): ReactElement => {
  return (
    <MobileDrawer isOpen={isOpen} toggle={onDismiss}>
      <StyledCloseButtonWrapper>
        <StyledCloseButton onClick={onDismiss}>
          <CloseIcon />
        </StyledCloseButton>
      </StyledCloseButtonWrapper>
      {navList.map((navItem: navItem) => {
        return (
          <StyledMobileNavItem key={navItem.name}>
            <StyledMobileNavLink
              to="/"
              onClick={onDismiss}
              data-testid="about-nav-link"
            >
              {navItem.name}
            </StyledMobileNavLink>
          </StyledMobileNavItem>
        );
      })}
    </MobileDrawer>
  );
};

const Header = (): ReactElement => {
  const [isNavigationDrawerOpen, setIsNavigationDrawerOpen] = useState(false);
  const handleNavigationDrawerOpen = () => setIsNavigationDrawerOpen(true);
  const handleNavigationDrawerClose = () => setIsNavigationDrawerOpen(false);
  return (
    <>
      <StyledHeader>
        <StyledPadding>
          <Link to="/" data-testid="logo-nav-link">
            <div style={{ display: "flex" }}>
              <StyledLogo alt="PSN logo" src={psnLogo} />
            </div>
          </Link>
          <StyledNav>
            {navList.map((navItem: navItem) => {
              return (
                <StyledNavItem key={navItem.name}>
                  <StyledLink to="/" data-testid="about-nav-link">
                    {navItem.name}
                  </StyledLink>
                </StyledNavItem>
              );
            })}
            <StyledMenuButton
              onClick={handleNavigationDrawerOpen}
              aria-label="Menu"
            >
              <MenuIcon />
            </StyledMenuButton>
          </StyledNav>
        </StyledPadding>
      </StyledHeader>
      <MobileNavigationDrawer
        isOpen={isNavigationDrawerOpen}
        onDismiss={handleNavigationDrawerClose}
      />
    </>
  );
};

export default Header;

const StyledLogo = styled.img`
  max-height: 80px;
  width: 100%;
  max-width: 100%;
  object-fit: contain;
  ${mediaLargerThan.desktopLg} {
    padding-right: 50px;
  }
`;

const StyledCloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const StyledHeader = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  background-color: white;
  box-shadow: "0px 2px 4px -2px rgba(24, 39, 75, 0.12), 0px 4px 4px -2px rgba(24, 39, 75, 0.08)";
  position: fixed;
  z-index: 9;

  ${mediaLargerThan.desktopSm} {
    padding: 12px 30px;
    background-color: transparent;
  }

  ${mediaLargerThan.desktopLg} {
    padding: 12px 70px;
  }
`;

const StyledPadding = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  ${mediaLargerThan.desktopSm} {
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
`;

const StyledMobileNavItem = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

const StyledNavItem = styled.div`
  display: none;
  ${mediaLargerThan.desktopSm} {
    display: flex;
    width: 100%;
    justify-content: center;
  }
`;

const LinkStyles = css`
  display: flex;
  align-content: center;
  font-size: 20px;
  width: 100%;
  line-height: 26px;
  text-decoration: none;
`;

const StyledLink = styled(Link)`
  ${LinkStyles}
  margin: 1rem 1.2rem;
  padding-bottom: 0.5rem;
  color: #fff;
  white-space: nowrap;
  &:focus {
    border-bottom: 2px solid #e32738;
  }
`;

const StyledMobileNavLink = styled(Link)`
  ${LinkStyles}
  padding: 1rem 3rem;
  color: inherit;
  &:hover {
    background-color: #e32738;
  }
`;

const ButtonResetStyling = css`
  background: transparent;
  border: none;
  cursor: pointer;
`;

const StyledCloseButton = styled.button`
  ${ButtonResetStyling};
  color: #fff;
  padding: 0 20px;
  margin-bottom: 1rem;
`;

const StyledMenuButton = styled.button`
  color: #000;
  ${ButtonResetStyling};
  ${mediaLargerThan.desktopSm} {
    display: none;
  }
`;
