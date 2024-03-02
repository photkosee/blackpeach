"use client";

import { FC, useState } from "react";

import { useDispatch } from "react-redux";
import { AlertCircle, ChevronLeft } from "lucide-react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
} from "@nextui-org/react";
import { RESET } from "@/app/features/carts/cartSlice";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface PaymentProps {
  setState: React.Dispatch<React.SetStateAction<number>>;
}

const Payment: FC<PaymentProps> = ({ setState }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cardNumber, setCardNumber] = useState<string>("");
  const [securityCode, setSecurityCode] = useState<string>("");
  const [expirationDate, setExpirationDate] = useState<string>("");
  const dispatch = useDispatch();
  const router = useRouter();

  const handleCardNumber = (value: string) => {
    const input = value.replace(/\D/g, "");
    let formattedInput = "";

    for (let i = 0; i < input.length; i++) {
      if (i % 4 === 0 && i > 0) {
        formattedInput += " ";
      }
      formattedInput += input[i];
    }

    setCardNumber(formattedInput.substring(0, 19));
  };

  const handleExpirationDate = (value: string) => {
    const input = value.replace(/\D/g, "");
    let formattedInput = "";
    for (let i = 0; i < input.length; i++) {
      if (i % 2 === 0 && i > 0) {
        formattedInput += "/";
      }
      formattedInput += input[i];
    }
    setExpirationDate(formattedInput.substring(0, 5));
  };

  const handleSecurityCode = (value: string) => {
    const input = value.replace(/\D/g, "");
    setSecurityCode(input.substring(0, 3));
  };

  const handleSubmit = (formData: FormData) => {
    setIsOpen(true);
  };

  const redirectToHome = () => {
    dispatch(RESET());
    router.push("/");
  };

  return (
    <>
      <form className="w-full flex flex-col gap-y-5" action={handleSubmit}>
        <title>Payment - BLACKPEACH | SHOP</title>
        <div className="text-black text-xl font-semibold flex items-center gap-x-1">
          Payment
          <Tooltip
            content="Do not put personal information here"
            placement="right-end"
          >
            <div className="p-1">
              <AlertCircle size={17} />
            </div>
          </Tooltip>
        </div>
        <div className="w-full flex flex-col gap-y-2">
          <Input
            isRequired
            type="text"
            label="Card number"
            name="card_number"
            radius="sm"
            size="sm"
            autoComplete="cc-number"
            value={cardNumber}
            onChange={(e) => handleCardNumber(e.target.value)}
          />
          <Input
            isRequired
            type="text"
            label="Name on card"
            name="name_on_card"
            radius="sm"
            size="sm"
            autoComplete="cc-name"
          />
          <div className="w-full flex gap-x-2">
            <Input
              isRequired
              type="text"
              label="Expiration date"
              name="expiration_date"
              radius="sm"
              size="sm"
              autoComplete="cc-exp"
              value={expirationDate}
              onChange={(e) => handleExpirationDate(e.target.value)}
            />
            <Input
              isRequired
              type="text"
              label="Security code"
              name="security_code"
              radius="sm"
              size="sm"
              autoComplete="cc-csc"
              value={securityCode}
              onChange={(e) => handleSecurityCode(e.target.value)}
            />
          </div>
        </div>
        <div className="w-full flex flex-col lg:flex-row items-center gap-y-3">
          <div className="flex-1 order-2 lg:order-1 text-gray-500">
            <div
              role="button"
              onClick={() => setState(1)}
              className="flex items-center"
            >
              <ChevronLeft />
              Return to shipping
            </div>
          </div>
          <Button
            className="dark py-3 bg-black text-primary text-md font-semibold
          rounded-none uppercase w-full flex-1 order-1 lg:order-2"
            type="submit"
          >
            Pay now
          </Button>
        </div>
      </form>
      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onClose={redirectToHome}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Congratulations
              </ModalHeader>
              <ModalBody>
                <p>Note that this is not the official website.</p>
                <p>Please redirect to the home page.</p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onClick={redirectToHome}>
                  Close
                </Button>
                <Button color="primary" onClick={redirectToHome}>
                  Back to home page
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default Payment;
