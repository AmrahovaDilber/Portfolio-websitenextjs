import Image from "next/image"; 
import Link from "next/link";

function Footer() {
  return (
   
        <div className="bg-[rgb(20,12,28)] p-8 pb-5 w-full">
      <div className="flex flex-col justify-center   items-center ">
        <div className="mb-5">
          <Link href="#home">
            <Image src="/log.webp" alt="logo" width={70} height={70} />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-3">
            <li className="text-lg font-bold text-white">
              <Link href="#home">Home</Link>
            </li>
            <li className="text-lg font-bold text-white">
              <Link href="#skills">Skills</Link>
            </li>
            <li className="text-lg font-bold text-white">
              <Link href="#contact">Contact</Link>{" "}
        
            </li>
            <li className="text-lg font-bold text-white">
              <Link href="#resume">Resume</Link>{" "}
            
            </li>
          </ul>
        </div>
        <div className="mt-3">
          <p className="text-indigo-600">
            © 2024 All Rights Reserved by ThemeJunction
          </p>
        </div>
      </div>
    </div>
 
  
  );
}

export default Footer;
