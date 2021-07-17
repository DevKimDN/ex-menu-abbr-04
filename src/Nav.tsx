import React from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

const Button = styled.button`
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  margin: 1rem;
`;

const Nav = ({ menuActive, setMenuActive }) => {
  return <Button onClick={() => setMenuActive(!menuActive)}>Menu</Button>;
};

export default Nav;
