"use client";

import { useState } from "react";

import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import Information from "./components/Information";

const CheckoutPage = () => {
  const [state, setState] = useState<number>(0);

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

        {state === 0 && <Information />}
      </div>
    </div>
  );
};

export default CheckoutPage;
