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
import {useSelector} from 'react-redux';
import {LaunchItem} from '../launches'


export default function FavDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const favorites = useSelector(state => state.favoriteReducer.favorites)

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
        <DrawerContent blockScrollOnMount={false}>
          <DrawerCloseButton />
          <DrawerHeader>Your have {favorites.length} favorite item(s) </DrawerHeader>

          <DrawerBody>
            {
               favorites.map(launch=> <LaunchItem launch={launch}  />)
            }
          </DrawerBody>

        </DrawerContent>
      </Drawer>
    </>
  );
}
