import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center space-x-4 sm:space-x-6">
      <Link href="/">
        <Image src="/log.webp" alt="logo" width={50} height={50} className="w-10 sm:w-12" />
      </Link>
      <Link href="mailto:dilberamrahova1@gmail.com">
        <p className="text-white text-sm sm:text-md font-semibold">dilberamrahova1@gmail.com</p>
      </Link>
    </div>
  );
}

export default Logo;
