import React from "react";
import { IconButton } from "@chakra-ui/core";
import { AnimationWrapper } from 'react-hover-animation'

export default function IconButtonFavLaunches(props) {


  return (
    <AnimationWrapper>
      <IconButton size="sm" isRound="true" aria-label="star" icon="star" width="5%" onClick={props.onClick} />
    </AnimationWrapper>
  );
}
