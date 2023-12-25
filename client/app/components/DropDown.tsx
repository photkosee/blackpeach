"use client";

import React from "react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const DropDown = () => {
  return (
    <Dropdown backdrop="blur" className="dark rounded-none">
      <DropdownTrigger>
        <Button
          variant="light"
          className="rounded-none text-primary text-md px-2 xl:px-3 xl:text-lg font-semibold gap-0 hover:text-white"
        >
          Open Menu
          <MdOutlineKeyboardArrowDown size={27} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Static Actions"
        className="text-primary"
      >
        <DropdownItem key="new">New file</DropdownItem>
        <DropdownItem key="copy">Copy link</DropdownItem>
        <DropdownItem key="edit">Edit file</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Delete file
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
