import React from "react";
import { IconButton } from "@chakra-ui/core";

export default function IconButtonFavLaunches(props) {

  function sayHello() {
    alert('Hello!');
  }

  return (
    <IconButton size="sm" isRound="true" aria-label="star" icon="star" width="5%" onClick={sayHello} />
  );
}
