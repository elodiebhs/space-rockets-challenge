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
import { useSelector } from 'react-redux';
import { LaunchPadItem } from "../launch-pads"


export default function FavDrawerPads() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const favoritesPad = useSelector(state => state.favoritePadsReducer.favoritesPad)

  return (
    <>

      <Button ref={btnRef} leftIcon="star" size="sm" variantColor="teal" variant="outline" float="right" onClick={onOpen} marginRight="25px">
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
          <DrawerHeader>Your have {favoritesPad.length} favorite item(s)</DrawerHeader>


          <DrawerBody>
            {
              favoritesPad.map(launchPad => <LaunchPadItem key={launchPad.site_id} launchPad={launchPad} />)
            }
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
}
