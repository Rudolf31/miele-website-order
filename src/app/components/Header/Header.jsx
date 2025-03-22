"use client";
import Link from "next/link";
import Image from "next/image";
import * as img from "@/assets/imagesHeader";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  return (
    <header className="bg-[#0a0c11] text-white flex items-center justify-center w-full h-24 gap-10">
      <div className="flex items-center justify-evenly w-xl font-medium text-xl">
        <Link href="/">
          <Image src={img.logo} alt="Logo" width={163} height={70} />
        </Link>
        <Link
          href="/catalog"
          className={`border-b flex items-center gap-2 border-transparent hover:border-[#f59b00] transition-all ${
            currentPath === "/catalog" ? styles.active : ""
          }`}
        >
          <Image src={img.menu} alt="Logo" width={26} height={26} />
          <p>Каталог</p>
        </Link>
        <Link
          href="/showroom"
          className={`border-b border-transparent hover:border-[#f59b00] transition-all ${
            currentPath === "/showroom" ? styles.active : ""
          }`}
        >
          <p>Шоурум</p>
        </Link>
        <Link
          href="/support"
          className={`border-b border-transparent hover:border-[#f59b00] transition-all ${
            currentPath === "/support" ? styles.active : ""
          }`}
        >
          <p>Поддержка</p>
        </Link>
      </div>
      <div className="flex items-center border border-white rounded-full px-4 py-2">
        <input
          type="text"
          placeholder=""
          className="bg-transparent outline-none text-white placeholder:text-gray-400 flex-1"
        />
        <Image src={img.search} alt="Search" width={20} height={20} />
      </div>
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src={img.shoppingBag} alt="Logo" width={26} height={26} />
        </Link>
        <Link href="/">
          <Image src={img.profile} alt="Logo" width={26} height={26} />
        </Link>
        <p>+7(000)000-00-00</p>
      </div>
      <div className="flex items-center gap-10">
        <Link href="/">
          <Image src={img.tg} alt="Logo" width={26} height={26} />
        </Link>
        <Link href="/">
          <Image src={img.wa} alt="Logo" width={26} height={26} />
        </Link>
      </div>
    </header>
  );
}