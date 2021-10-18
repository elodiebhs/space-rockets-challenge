
import React from 'react';
import { useState } from "react";
import { useSpring, animated, config } from 'react-spring'
import { Text } from "@chakra-ui/core";


export default function Animation() {
  const [flip, set] = useState(false)
  const props = useSpring({
    to: [
      { opacity: 1, color: 'white', scale: 1 },
      { opacity: 0, color: '#0000ff' },
    ],
    from: { opacity: 0, color: '#4d4dff', scale: .8 },
    reset: true,
    reverse: flip,
    delay: 15,
    config: config.molasses,
    onRest: () => set(!flip),
  })
  return <animated.div style={props}>
    <Text
      fontFamily="mono"
      letterSpacing="2px"
      fontWeight="bold"
      fontSize="lg"
    >
      ¡SPACE·R0CKETS!
    </Text>
  </animated.div>
}