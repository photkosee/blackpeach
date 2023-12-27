"use client";

import React, { FC } from "react";
import {
  Dropdown,
  Link,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@nextui-org/react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { useRouter } from "next/navigation";

export type ItemType = {
  name: string;
  link: string;
};

interface DropDownProps {
  topic: string;
  items: ItemType[];
}

const DropDown: FC<DropDownProps> = ({ topic, items }) => {
  const router = useRouter();

  return (
    <Dropdown backdrop="blur" className="dark rounded-none">
      <DropdownTrigger>
        <Button
          variant="light"
          className="rounded-none text-primary text-md pl-2 pr-1 xl:pl-3 xl:pr-1
          xl:text-lg font-semibold gap-0 hover:text-white uppercase"
        >
          {topic}
          <MdOutlineKeyboardArrowDown size={27} />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Static Actions"
        className="text-primary uppercase"
      >
        {items.map((item: ItemType) => (
          <DropdownItem
            key={item.name}
            className="rounded-none"
            onClick={() => {
              router.push(item.link);
            }}
          >
            {item.name}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

export default DropDown;
