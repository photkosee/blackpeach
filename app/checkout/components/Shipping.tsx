import { FC } from "react";

interface ShippingProps {
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const Shipping: FC<ShippingProps> = ({ setState }) => {
  return <div></div>;
};

export default Shipping;
