import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center space-x-6">
      <Link href="/">
        <Image src="/log.webp" alt="logo" width={60} height={60} />
      </Link>
      <Link href="mailto:dilberamrahova1@gmail.com">
        <p className="text-white text-md font-semibold">dilberamrahova1@gmail.com</p>
      </Link>
    </div>
  );
}

export default Logo;
