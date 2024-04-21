import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full">
      <div
        className="w-full bg-[url('/images/footer-small.webp')] sm:bg-[url('/images/footer.webp')]
        bg-contain bg-right bg-no-repeat bg-black"
      >
        <div className="flex flex-col justify-center min-h-80 text-primary gap-y-7 pl-[5vw]">
          <div className="flex gap-x-4 items-center">
            <Link href={"/"}>
              <Facebook className="h-5 lg:h-6 w-auto" />
            </Link>
            <Link href={"/"}>
              <Twitter className="h-5 lg:h-6  w-auto" />
            </Link>
            <Link href={"/"}>
              <Instagram className="h-5 lg:h-6 w-auto" />
            </Link>
            <Link href={"/"}>
              <Youtube className="h-5 lg:h-6 w-auto" />
            </Link>
          </div>
          <div className="max-w-[150px] md:max-w-none">
            Do not put personal information here.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
