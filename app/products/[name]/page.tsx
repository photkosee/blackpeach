"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { products } from "@/app/storage";
import {
  BreadcrumbItem,
  Breadcrumbs,
  Button,
  Image,
  Spinner,
} from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { useDispatch } from "react-redux";
import { ProductCart } from "@/app/types";
import { addToCart } from "@/app/features/carts/cartSlice";
import { openCart } from "@/app/features/sidebars/sidebarSlice";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const [currImage, setCurrImage] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const pathname = usePathname();
  const parts = pathname.split("/");
  const productName = parts[parts.length - 1];
  const product = products.find((product) => product.name === productName);
  const name = productName
    .replace(/-/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());

  const handleAddToCart = (
    id: number,
    image: string,
    name: string,
    size: string,
    price: number,
    quantity: number
  ) => {
    const addedProduct: ProductCart = {
      id: id,
      image: image,
      name: name,
      size: size,
      price: price,
      quantity: quantity,
    };
    dispatch(addToCart(addedProduct));
    dispatch(openCart());
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (product === undefined) {
    return (
      <div className="min-h-full flex items-center justify-center">
        <Spinner label="Loading..." color="primary" size="lg" />
      </div>
    );
  }

  return (
    <>
      <title>{name}</title>
      <div className="min-h-full w-full bg-white flex justify-center">
        <div
          className="container mx-auto py-7 lg:py-10 max-w-5xl px-5
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
                  <Image
                    src={image}
                    alt={name}
                    radius="none"
                    className="w-full h-full object-contain"
                  />
                </div>
              ))}
            </div>
            <div className="max-w-[700px] max-h-[350px] md:max-h-none order-1 md:order-2">
              <Image
                src={product.images[currImage]}
                alt={name}
                radius="none"
                className="w-full h-full object-contain"
              />
            </div>
            <div
              className="max-w-[280px] flex flex-col gap-3 order-3 md:order-3 text-black
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
                onClick={() =>
                  handleAddToCart(
                    product.id,
                    product.images[0],
                    product.name,
                    product.sizes[0],
                    product.discount
                      ? product.price * ((100 - product.discount) / 100)
                      : product.price,
                    count
                  )
                }
                isDisabled={count === 0}
              >
                Add to cart
              </Button>
              <div className="text-black">{product.captions}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
