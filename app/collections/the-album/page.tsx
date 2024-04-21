import ProductList from "@/app/components/ProductList";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center gap-5 lg:gap-10 bg-white">
      <div className="w-full h-[45vw] sm:h-[32vw]">
        <div
          className="w-full h-full bg-[url('/images/album.webp')] sm:bg-[url('/images/album-big.webp')]
          bg-black bg-center bg-cover"
        />
      </div>
      <ProductList category="the-album" />
    </main>
  );
}
