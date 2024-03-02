"use client";

import { FC, useState } from "react";

import { Button, RadioGroup } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";
import { CustomRadio } from "./CustomRadio";

interface ShippingProps {
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const Shipping: FC<ShippingProps> = ({ setState }) => {
  const [selected, setSelected] = useState("free");

  const handleSubmit = (formData: FormData) => {
    const value = formData.get("first_name");

    setState(2);
  };

  return (
    <form
      className="w-full max-w-lg flex flex-col gap-y-5"
      action={handleSubmit}
    >
      <title>Shipping & Handling - BLACKPEACH | SHOP</title>
      <RadioGroup
        label="Shipping & Handling"
        value={selected}
        onValueChange={setSelected}
        isRequired
      >
        <CustomRadio description="Ship items together" value="free">
          Free
        </CustomRadio>
        <CustomRadio description="Ship items separately" value="pro">
          Free
        </CustomRadio>
      </RadioGroup>
      <div className="w-full flex flex-col lg:flex-row items-center gap-y-3">
        <div className="flex-1 order-2 lg:order-1 text-gray-500">
          <div
            role="button"
            onClick={() => setState(0)}
            className="flex items-center"
          >
            <ChevronLeft />
            Return to information
          </div>
        </div>
        <Button
          className="dark py-3 bg-black text-primary text-md font-semibold
          rounded-none uppercase w-full flex-1 order-1 lg:order-2"
          type="submit"
        >
          Continue to payment
        </Button>
      </div>
    </form>
  );
};

export default Shipping;
