"use client";

import { useEffect, useState } from "react";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Information from "./components/Information";
import Payment from "./components/Payment";
import Shipping from "./components/Shipping";
import { useDispatch } from "react-redux";
import { closeCart } from "../features/sidebars/sidebarSlice";
import TotalProducts from "./components/TotalProducts";

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const [state, setState] = useState<number>(0);

  useEffect(() => {
    dispatch(closeCart());
  }, []);

  return (
    <div className="min-h-full bg-white">
      <div
        className="container mx-auto py-5 lg:py-10 max-w-5xl px-7 sm:px-10
        flex flex-col gap-y-10"
      >
        <Breadcrumbs
          itemClasses={{
            separator: "px-1",
          }}
          size="lg"
        >
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem isCurrent={state === 0} onClick={() => setState(0)}>
            Information
          </BreadcrumbItem>
          <BreadcrumbItem
            isCurrent={state === 1}
            onClick={() => state === 2 && setState(1)}
            isDisabled={state < 1}
          >
            Shipping & Handling
          </BreadcrumbItem>
          <BreadcrumbItem isCurrent={state === 2} isDisabled={state < 2}>
            Payment
          </BreadcrumbItem>
        </Breadcrumbs>

        <div className="w-full flex flex-col md:flex-row gap-y-5 gap-x-10">
          <div className="flex-1 md:order-1 order-2">
            {state === 0 && <Information setState={setState} />}
            {state === 1 && <Shipping setState={setState} />}
            {state === 2 && <Payment />}
          </div>
          <div className="flex-1 md:order-2 order-1">
            <TotalProducts />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
