import { logDevReady } from "@remix-run/node";
import { useLocation } from "@remix-run/react";
import { styled } from "styled-components";

const Nav = styled.nav`
  display: flex;
  height: 51px;
  background-color: #000000dd;
  letter-spacing: 0.1em;
  user-select: none;
  -webkit-user-select: none;

  @media only screen and (max-width: 870px) {
    position: relative;
    justify-content: right;
  }
`;

const LogoDiv = styled.div`
  margin: 0 0 0 10px;
  display: flex;
  align-items: center;
  font-size: 34px;
  font-family: 'Lato BoldItalic';

  @media only screen and (max-width: 870px) {
    position: absolute;
    top: 0; bottom: 0;
    left: 0; right: 0;
    justify-content: center;
    margin: 0!important;
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  &.active {
    color: #346ab4;
  }
`;

const Logo = () => (
  <LogoDiv>
    <NavLink href="/">Obstacle</NavLink>
  </LogoDiv>
);

const BurgerDiv = styled.div`
  @media only screen and (min-width: 870px) {
    display: none;
  }

  & label {
    cursor: pointer;
    line-height: 51px;
    font-size: 30px;
    padding: 0 10px 0 30px;
    position: relative;
    z-index: 1;
  }
`;

const Burger = () => (
  <BurgerDiv>
    <label htmlFor="menu_opened">☰</label>
  </BurgerDiv>
);

const HiddenInput = styled.input`
  display: none;

  @media only screen and (max-width: 870px) {
    &:not(:checked) ~ ul {
      max-height: 0px;
      padding: 0;
    }
  }
`;

const Menu = styled.ul`
  flex-grow: 1;
  margin: 0;
  padding: 0;
  height: 100%;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 25px;
  font-weight: lighter;
  text-transform: uppercase;

  list-style-type: none;

  @media only screen and (max-width: 870px) {
    max-height: 500px;
    overflow: hidden;
    transition: padding 0.2s ease-in, max-height 0.2s linear;

    position: absolute;
    box-sizing: border-box;
    top: 51px;
    width: 100%;
    height: auto;
    padding-top: 20px;

    background-color: #000000dd;
    flex-direction: column;
  }
`;

const MenuItem = styled.li`
  @media only screen and (min-width: 870px) {
    padding: 0 10px;
  }

  @media only screen and (min-width: 1300px) {
    padding: 0 50px;
  }

  @media only screen and (max-width: 870px) {
    padding-bottom: 20px;
  }
`;

const Separator = styled(MenuItem)`
  @media only screen and (min-width: 870px) {
    display: none;
  }

  @media only screen and (max-width: 870px) {
    background-color: white;
    width: 100%;
    height: 3px;
    padding-bottom: 0;
    margin-bottom: 20px;
  }
`;

const pages = [
  {
    label: "Home",
    route: "/",
  },
  {
    label: "Campaign",
    route: "/campaign/29",
  },
  "separator",
  {
    label: "Resources",
    route: "/link",
  }
];

export const Navigation = () => {
  const locPathname = useLocation().pathname;

  return (
    <Nav>
      <HiddenInput type="checkbox" name="menu_opened" id="menu_opened" />
      <Logo />
      <Burger />

      <Menu>
        {pages.map((page, i) => typeof page !== "string" ? (
          <MenuItem key={page.route}>
            <NavLink
              className={locPathname.startsWith(page.route) ? 'active' : undefined}
              href={page.route}
            >
              {page.label}
            </NavLink>
          </MenuItem>
        ) : (
          <Separator key={`sep_${i}`} />
        ))}
      </Menu>
    </Nav>
  );
};