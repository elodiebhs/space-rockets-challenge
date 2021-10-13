import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/core";

export default function FavDrawerPads() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} leftIcon="star" size="sm" variantColor="teal" variant="outline" float="right" onClick={onOpen}>
        Open Favorites
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        scrollBehavior={'inside'} 
        blockScrollOnMount={false}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Favorites Launch Pads</DrawerHeader>

          <DrawerBody>

          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
}
