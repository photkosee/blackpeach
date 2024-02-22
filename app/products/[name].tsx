import { useRouter } from "next/router";

import productsData from ".//../products.json";
import { FC } from "react";
import { ProductProps } from "../types";

const ProductPage: FC<{ product: ProductProps }> = ({ product }) => {
  const router = useRouter();

  // Ensure the component doesn't render on the server without data

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{product.name}</h1>

      <p>{`Price: $${product.price}`}</p>

      {/* Display other product details */}
    </div>
  );
};

export async function getStaticPaths() {
  const paths = productsData.products.map((product) => ({
    params: { id: product.id },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps(params: string) {
  const id = params;

  const product = productsData.products.find((p) => p.id === id);

  return {
    props: { product },
  };
}

export default ProductPage;
