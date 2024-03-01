"use client";

import Link from "next/link";

import { Button, Input } from "@nextui-org/react";
import { ChevronLeft } from "lucide-react";

export default function Information() {
  const handleSubmit = (formData: FormData) => {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const address = formData.get("address");
    const apartment = formData.get("apartment");
    const suburb = formData.get("suburb");
    const state = formData.get("state");
    const postcode = formData.get("postcode");
    const phone = formData.get("phone");
  };

  return (
    <div
      className="w-full flex flex-col md:flex-row gap-x-14 gap-y-5
      items-center md:items-start"
    >
      <form
        className="flex flex-col gap-y-3 order-2 md:order-1 flex-1 max-w-lg w-full"
        action={handleSubmit}
      >
        <div className="flex flex-col xl:flex-row gap-y-2 gap-x-3">
          <Input
            isRequired
            type="text"
            label="First name"
            name="first_name"
            radius="sm"
            size="sm"
          />
          <Input
            isRequired
            type="text"
            label="Last name"
            name="last_name"
            radius="sm"
            size="sm"
          />
        </div>
        <Input
          isRequired
          type="text"
          label="Address"
          name="address"
          radius="sm"
          size="sm"
        />
        <Input
          type="text"
          label="Apartment, suite, etc. (optional)"
          name="apartment"
          radius="sm"
          size="sm"
        />
        <Input
          isRequired
          type="text"
          label="Suburb"
          name="suburb"
          radius="sm"
          size="sm"
        />
        <Input
          isRequired
          type="text"
          label="State"
          name="state"
          radius="sm"
          size="sm"
        />
        <Input
          isRequired
          type="text"
          label="Postcode"
          name="postcode"
          radius="sm"
          size="sm"
        />
        <Input
          isRequired
          type="text"
          label="Phone"
          name="phone"
          radius="sm"
          size="sm"
        />
        <div className="w-full flex flex-col lg:flex-row items-center gap-y-3">
          <div className="flex-1 order-2 lg:order-1 text-gray-500">
            <Link href="/" className="flex items-center">
              <ChevronLeft />
              Return to shop
            </Link>
          </div>
          <Button
            className="dark py-3 bg-black text-primary text-md font-semibold
            rounded-none uppercase w-full flex-1 order-1 lg:order-2"
            type="submit"
          >
            Continue to shipping
          </Button>
        </div>
      </form>
      <div className="order-1 md:order-2 flex-1">adsf</div>
    </div>
  );
}
