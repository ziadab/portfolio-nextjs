import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

export const CustomDrawer = ({ isOpen, onClose }: CustomDrawerProps) => {
  return (
    <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="full">
      <DrawerOverlay />
      <DrawerContent bg={"black"}>
        <DrawerCloseButton color={"white"} marginTop={5} marginRight={3} />
        <DrawerHeader />

        <DrawerBody>
          <h1>hi</h1>
        </DrawerBody>

        <DrawerFooter />
      </DrawerContent>
    </Drawer>
  );
};

export interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
