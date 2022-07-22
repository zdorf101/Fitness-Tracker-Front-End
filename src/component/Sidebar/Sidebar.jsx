import React from "react";
import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  DrawerHeader,
} from "@chakra-ui/react";
import {
  DrawerIcon,
  Transactions,
  Reward,
  DrawerIconWrapper,
  Logout,
} from "./SideBarELements";
import { Link } from "react-router-dom";
import {
  CreditCardIcon,
  ReceiptTaxIcon,
  LogoutIcon,
  HomeIcon,
  ClockIcon,
  ClipboardCheckIcon,
} from "@heroicons/react/outline";

function Sidebar({ onClose, onOpen, isOpen, logout }) {
  const [placement, setPlacement] = React.useState("left");

  return (
    <React.Fragment>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader
            borderBottomWidth="1px"
            backgroundImage={
              "linear-gradient(90deg, rgba(216,33,72,1) 0%, rgba(121,9,64,1) 72%, rgba(92,15,66,1) 100%)"
            }
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
          >
            <DrawerIconWrapper>FitnessTrackr</DrawerIconWrapper>
          </DrawerHeader>
          <DrawerBody paddingX={"0px"}>
            <Link to={"/"}>
              <Reward>
                <HomeIcon height={"38px"} color={"#d82148"} /> Home
              </Reward>
            </Link>
            <hr />
            <Link to={"/my-routine"}>
              <Transactions>
                <ClockIcon height={"38px"} color={"#d82148"} /> My Routines
              </Transactions>
            </Link>

            <Link to={"/my-activities"}>
              <Transactions>
                <ClipboardCheckIcon height={"38px"} color={"#d82148"} /> My
                Activities
              </Transactions>
            </Link>
            <hr />
            <Logout onClick={logout}>
              <LogoutIcon height={"38px"} color={"#d82148"} />
              Logout
            </Logout>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </React.Fragment>
  );
}

export default Sidebar;
