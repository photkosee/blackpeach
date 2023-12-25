import NavBar from "../components/NavBar";

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center">
      <NavBar />
      <div className="w-full h-[45vw] sm:h-[32vw]">
        <div className="w-full h-full bg-[url('/images/album.png')] sm:bg-[url('/images/album-big.png')] bg-center bg-cover" />
      </div>
    </main>
  );
}
