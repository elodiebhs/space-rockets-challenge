import React from "react";

import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input
} from "@chakra-ui/core";

export default function FavDrawer() {
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
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Your Favorites Launches</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
}
