"use client";

import Link from "next/link";
import { FC } from "react";
import { AlertCircle, ChevronLeft } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";

import { Button, Input, Tooltip } from "@nextui-org/react";

import { setAddress } from "@/app/features/addresses/addressSlice";
import { RootState } from "@/app/store";

interface InformationProps {
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const Information: FC<InformationProps> = ({ setState }) => {
  const dispatch = useDispatch();
  const { address } = useSelector((state: RootState) => state.bp_address);

  const handleSubmit = (formData: FormData) => {
    const first_name = formData.get("first_name");
    const last_name = formData.get("last_name");
    const address = formData.get("address");
    const apartment = formData.get("apartment");
    const suburb = formData.get("suburb");
    const state = formData.get("state");
    const postcode = formData.get("postcode");
    const phone = formData.get("phone");
    const country = formData.get("country");

    dispatch(
      setAddress({
        firstName: first_name as string,
        lastName: last_name as string,
        address: address as string,
        apartment: apartment as string,
        suburb: suburb as string,
        state: state as string,
        postcode: postcode as string,
        phone: phone as string,
        country: country as string,
      })
    );

    setState(1);
  };

  return (
    <div
      className="w-full flex flex-col md:flex-row gap-x-14 gap-y-5
      items-center md:items-start"
    >
      <title>Information - BLACKPEACH | SHOP</title>
      <form
        className="flex flex-col gap-y-3 max-w-lg w-full"
        action={handleSubmit}
      >
        <div className="text-black text-xl font-semibold flex items-center gap-x-1">
          Shipping address
          <Tooltip
            content="Do not put personal information here"
            placement="right-end"
          >
            <div className="p-1">
              <AlertCircle size={17} />
            </div>
          </Tooltip>
        </div>
        <div className="flex flex-col xl:flex-row gap-y-2 gap-x-3">
          <Input
            isRequired
            type="text"
            label="First name"
            name="first_name"
            radius="sm"
            size="sm"
            autoComplete="given-name"
          />
          <Input
            isRequired
            type="text"
            label="Last name"
            name="last_name"
            radius="sm"
            size="sm"
            autoComplete="family-name"
          />
        </div>
        <Input
          isRequired
          type="text"
          label="Address"
          name="address"
          radius="sm"
          size="sm"
          autoComplete="address-line1"
        />
        <Input
          type="text"
          label="Apartment, suite, etc. (optional)"
          name="apartment"
          radius="sm"
          size="sm"
          autoComplete="address-line2"
        />
        <Input
          isRequired
          type="text"
          label="Suburb"
          name="suburb"
          radius="sm"
          size="sm"
          autoComplete="address-level2"
        />
        <Input
          isRequired
          type="text"
          label="State"
          name="state"
          radius="sm"
          size="sm"
          autoComplete="address-level1"
        />
        <Input
          isRequired
          type="text"
          label="Postcode"
          name="postcode"
          radius="sm"
          size="sm"
          autoComplete="postal-code"
        />
        <Input
          isRequired
          type="text"
          label="Country"
          name="country"
          radius="sm"
          size="sm"
          autoComplete="country-name"
        />
        <Input
          isRequired
          type="text"
          label="Phone"
          name="phone"
          radius="sm"
          size="sm"
          autoComplete="tel"
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
    </div>
  );
};

export default Information;
