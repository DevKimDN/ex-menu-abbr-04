import React from "react";
import { animated, useTransition, config } from "react-spring";
import styled from "styled-components";

const Wrapper = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: black;
  color: white;
  padding: 1rem;
`;

const Menu = ({ menuActive }: { menuActive: boolean }) => {
  const transitions = useTransition(menuActive, null, {
    from: { transform: "translateX(-100%)" },
    enter: { transform: "translateX(0%)" },
    leave: { transform: "translateX(100%)" },
    config: config.default
  });

  return transitions.map(
    ({ item, key, props }) =>
      item && (
        <Wrapper key={key} style={props}>
          <h1>Navigation</h1>
          <ul>
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </Wrapper>
      )
  );
};

export default Menu;
