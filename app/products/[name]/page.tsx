"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

import { products } from "@/app/storage";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Spinner,
} from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";

const ProductDetails = () => {
  const [currImage, setCurrImage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const productName = parts[parts.length - 1];
  const product = products.find((product) => product.name === productName);
  const name = productName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  if (product === undefined) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <Spinner label="Loading..." color="primary" size="lg" />
      </div>
    );
  }

  return (
    <>
      <title>{name}</title>
      <div className="min-h-full w-full bg-white flex justify-center">
        <div
          className="container mx-auto py-5 lg:py-10 max-w-5xl px-5
          flex flex-col"
        >
          <Breadcrumbs
            separator="/"
            itemClasses={{
              separator: "px-2",
            }}
            size="lg"
          >
            <BreadcrumbItem href="/">Home</BreadcrumbItem>
            <BreadcrumbItem>{name}</BreadcrumbItem>
          </Breadcrumbs>

          <div className="flex flex-col md:flex-row w-full gap-7 md:gap-12">
            <div className="flex md:flex-col justify-center md:justify-start order-2 md:order-1 gap-7 md:pt-20">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  role="button"
                  onClick={() => setCurrImage(index)}
                  className={`size-16 ${
                    currImage === index && "border-1 border-black"
                  } relative`}
                >
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-[700px] max-h-[350px] md:max-h-none order-1 md:order-2">
              <img
                src={product.images[currImage]}
                alt={name}
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="max-w-[280px] flex flex-col gap-3 order-3 md:order-3
              self-center md:self-auto items-center md:items-start text-center md:text-start"
            >
              <div className="font-bold text-2xl">{name}</div>
              <div
                className="flex w-full gap-2 items-center justify-center md:justify-start
                font-bold text-xl"
              >
                <div className={`${product.discount === 0 && "hidden"}`}>
                  $
                  {(product.price * ((100 - product.discount) / 100)).toFixed(
                    2
                  )}
                </div>
                <div
                  className={`${
                    product.discount > 0 && "line-through text-gray-500"
                  }`}
                >
                  ${product.price.toFixed(2)}
                </div>
              </div>
              <div className="font-semibold text-lg text-primary flex divide-x-1">
                <div className="text-center bg-black w-8">{count}</div>
                <Button
                  isIconOnly
                  size="sm"
                  className="bg-black rounded-none"
                  onClick={() => setCount((prev) => prev - 1)}
                  disabled={count === 0}
                >
                  <Minus className="w-4 text-primary" />
                </Button>
                <Button
                  isIconOnly
                  size="sm"
                  className="bg-black rounded-none"
                  onClick={() => setCount((prev) => prev + 1)}
                >
                  <Plus className="w-4 text-primary" />
                </Button>
              </div>
              <Button
                className="dark py-3 bg-black text-primary text-md font-semibold
                rounded-none uppercase max-w-40"
              >
                Add to cart
              </Button>
              <div>{product.captions}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
