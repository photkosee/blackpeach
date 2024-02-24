import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const CheckoutPage = () => {
  return (
    <div className="min-h-full bg-white">
      <div
        className="container mx-auto py-5 lg:py-10 max-w-5xl px-5
        flex flex-col"
      >
        asdf
        <Breadcrumbs
          separator="/"
          itemClasses={{
            separator: "px-2",
          }}
          size="lg"
        >
          <BreadcrumbItem href="/">Home</BreadcrumbItem>
          <BreadcrumbItem>Checkout</BreadcrumbItem>
        </Breadcrumbs>
        asdf
      </div>
    </div>
  );
};

export default CheckoutPage;
