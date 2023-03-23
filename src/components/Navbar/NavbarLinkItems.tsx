import { MouseEventHandler } from "react";
import StyledNavbarLink from "../UI/StyledNavbarLink/StyledNavbarLink";

type NavbarLinkItemsProps = {
  handleOnClick?: MouseEventHandler<HTMLAnchorElement>;
};

function NavbarLinkItems(props: NavbarLinkItemsProps) {
  return (
    <>
      <StyledNavbarLink to="/" onClick={props.handleOnClick}>
        Home
      </StyledNavbarLink>
      <StyledNavbarLink to="/gallery" onClick={props.handleOnClick}>
        Gallery
      </StyledNavbarLink>
      <StyledNavbarLink to="/favourites" onClick={props.handleOnClick}>
        Favourites
      </StyledNavbarLink>
    </>
  );
}

export default NavbarLinkItems;
