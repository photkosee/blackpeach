import React, { Dispatch, FC, SetStateAction } from "react";
import Link from "next/link";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { ItemType } from "./DropDown";

interface CustomAccordionProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

type ContentType = {
  topic: string;
  items: ItemType[];
};

const contents: ContentType[] = [
  {
    topic: "SHOP",
    items: [
      {
        name: "Music",
        link: "/shop/music",
      },
      {
        name: "Apparel",
        link: "/shop/apparel",
      },
    ],
  },
  {
    topic: "COLLECTIONS",
    items: [
      {
        name: "In your area",
        link: "/collections/in-your-area",
      },
      {
        name: "The album",
        link: "/collections/the-album",
      },
      {
        name: "Born pink",
        link: "/collections/born-pink",
      },
    ],
  },
];

const CustomAccordion: FC<CustomAccordionProps> = ({ setOpen }) => {
  return (
    <Accordion className="dark">
      {contents.map((content: ContentType, index) => (
        <AccordionItem
          key={index}
          aria-label={content.topic}
          title={content.topic}
        >
          <div className="flex flex-col gap-1 justify-start items-start uppercase">
            {content.items.map((item: ItemType, index) => (
              <Link
                key={index}
                href={item.link}
                className="w-full rouned-none hover:bg-neutral-700 transition-all pl-2 py-2
                hover:text-white border border-transparent hover:border-neutral-600 text-sm"
                onClick={() => setOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </AccordionItem>
      ))}
    </Accordion>
  );
};

export default CustomAccordion;
