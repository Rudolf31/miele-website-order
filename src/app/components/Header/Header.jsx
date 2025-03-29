"use client";
import Link from "next/link";
import Image from "next/image";
import * as img from "@/assets/imagesHeader";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const catalogItems = [
  { text: "Кофемашины", href: "/coffee-machines" },
  { text: "Духовые шкафы", href: "/ovens" },
  { text: "Холодильники", href: "/refrigerators" },
  { text: "Варочные панели", href: "/cooktops" },
  { text: "СВЧ", href: "/microwaves" },
  { text: "Гладильные системы", href: "/ironing-systems" },
  { text: "Пылесосы", href: "/vacuums" },
  { text: "Стиральные машины", href: "/washing-machines" },
  { text: "Химия", href: "/chemicals" },
  { text: "Сушильные машины", href: "/dryers" },
];

const showroomItems = [
  { text: "Шоурум", href: "/showroom" },
  { text: "Видео", href: "/videos" },
  { text: "О Miele", href: "/about-miele" },
  { text: "Обзоры", href: "/reviews" },
  { text: "Акции", href: "/promotions" },
  { text: "Рейтинги", href: "/ratings" },
  { text: "Статьи", href: "/articles" },
  { text: "Глоссарий", href: "/glossary" },
];

const supportItems = [
  { text: "Доставка и оплата", href: "/deliveryAndPayment" },
  { text: "Подборщик-комплектатор", href: "/configurator" },
  { text: "Сервис", href: "/service" },
  { text: "Дизайнерам", href: "/toDesigners" },
  { text: "Ремонт Miele", href: "/repair" },
  { text: "FAQ", href: "/faq" },
  { text: "Возврат и обмен", href: "/returns" },
  { text: "Контакты", href: "/contacts" },
];

export default function Header() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [isHovered, setIsHovered] = useState(false);
  const [hoveredItem, setHoveredItem] = useState("catalog");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  const renderItems = () => {
    switch (hoveredItem) {
      case "catalog":
        return catalogItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
              {item.text}
            </div>
          </Link>
        ));
      case "showroom":
        return showroomItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
              {item.text}
            </div>
          </Link>
        ));
      case "support":
        return supportItems.map((item, index) => (
          <Link key={index} href={item.href}>
            <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
              {item.text}
            </div>
          </Link>
        ));
      default:
        return null;
    }
  };

  return (
    <header className="relative">
      {/* Мобильная версия */}
      <div className="lg:hidden flex items-center justify-between px-4 h-16 bg-[#0a0c11]">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2"
        >
          <Image src={img.menu} alt="Menu" width={24} height={24} />
        </button>
        <Link href="/">
          <Image src={img.logo} alt="Logo" width={120} height={50} priority />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/shoppingBag">
            <Image src={img.shoppingBag} alt="Shopping Bag" width={24} height={24} />
          </Link>
          <Link href="/profile">
            <Image src={img.profile} alt="Profile" width={24} height={24} />
          </Link>
        </div>
      </div>


      {/* Мобильное меню */}
      {isMobileMenuOpen && (
        <div className="lg:hidden text-white bg-[#0a0c11] border-t border-gray-800">
          <div className="px-4 py-6 space-y-4">
            <div className="flex items-center border border-white rounded-full px-4 py-2">
              <input
                type="text"
                placeholder="Поиск"
                className="bg-transparent outline-none text-white placeholder:text-gray-400 flex-1"
              />
              <Image src={img.search} alt="Search" width={20} height={20} />
            </div>
            <nav className="space-y-4">
              <Link href="/catalog" className="block py-2 hover:text-[#f59b00] transition-colors">
                Каталог
              </Link>
              <Link href="/showroom" className="block py-2 hover:text-[#f59b00] transition-colors">
                Шоурум
              </Link>
              <Link href="/support" className="block py-2 hover:text-[#f59b00] transition-colors">
                Поддержка
              </Link>
            </nav>
            <div className="flex items-center gap-4 py-4">
              <Link href="">
                <Image src={img.tg} alt="Telegram" width={26} height={26} />
              </Link>
              <Link href="">
                <Image src={img.wa} alt="WhatsApp" width={26} height={26} />
              </Link>
              <p className="text-sm">+7(000)000-00-00</p>
            </div>
          </div>
        </div>
      )}
      {/* Десктопная версия */}
      <div className="hidden text-white lg:flex items-center justify-center h-24 min-[1300px]:gap-10 gap-4 bg-[#0a0c11]">
        <div className="flex  items-center gap-10">
          <Link href="/">
            <Image src={img.logo} alt="Logo" width={163} height={70} />
          </Link>
          <div
            className="flex relative items-center justify-evenly font-medium min-[1300px]:text-xl text-lg min-[1300px]:gap-10 gap-8 h-24"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              if (!document.querySelector(".bottom-container")?.matches(":hover")) {
                setIsHovered(false);
                setHoveredItem("catalog");
              }
            }}
          >
            <div className="relative">
              <Link
                href="/catalog"
                className={`flex items-center gap-2 ${
                  currentPath === "/catalog" ? styles.active : ""
                }`}
                onMouseEnter={() => setHoveredItem("catalog")}
              >
                <Image src={img.menu} alt="Menu" width={26} height={26} />
                <p>Каталог</p>
              </Link>
            </div>
            <div className="relative">
              <Link
                href="/showroom"
                className={`${
                  currentPath === "/showroom" ? styles.active : ""
                }`}
                onMouseEnter={() => setHoveredItem("showroom")}
              >
                <p>Шоурум</p>
              </Link>
            </div>
            <div className="relative">
              <Link
                href="/support"
                className={`${
                  currentPath === "/support" ? styles.active : ""
                }`}
                onMouseEnter={() => setHoveredItem("support")}
              >
                <p>Поддержка</p>
              </Link>
            </div>
            <div
              className={`absolute top-full h-36 w-full text-[16px] left-0 bg-[#0a0c11] grid grid-cols-2 z-30 ${
                isHovered ? "block" : "hidden"
              }`}
            >
              <div className="flex flex-col p-2">
                {hoveredItem === "catalog" &&
                  catalogItems.slice(0, Math.ceil(catalogItems.length / 2)).map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
                        {item.text}
                      </div>

                      </Link>
                  ))}
                {hoveredItem === "showroom" &&
                  showroomItems.slice(0, Math.ceil(showroomItems.length / 2)).map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
                        {item.text}
                      </div>
                    </Link>
                  ))}
                {hoveredItem === "support" &&
                  supportItems.slice(0, Math.ceil(supportItems.length / 2)).map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
                        {item.text}
                      </div>
                    </Link>
                  ))}
              </div>
              <div className="flex flex-col p-2">
                {hoveredItem === "catalog" &&
                  catalogItems.slice(Math.ceil(catalogItems.length / 2)).map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
                        {item.text}
                      </div>
                    </Link>
                  ))}
                {hoveredItem === "showroom" &&
                  showroomItems.slice(Math.ceil(showroomItems.length / 2)).map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
                        {item.text}
                      </div>
                    </Link>
                  ))}
                {hoveredItem === "support" &&
                  supportItems.slice(Math.ceil(supportItems.length / 2)).map((item, index) => (
                    <Link key={index} href={item.href}>
                      <div className="text-white p-1 hover:text-[#e68a00] cursor-pointer">
                        {item.text}
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center border border-white rounded-full px-4 py-2">
          <input
            type="text"
            placeholder=""
            className="bg-transparent outline-none text-white placeholder:text-gray-400 flex-1"
          />
          <Image src={img.search} alt="Search" width={20} height={20} />
        </div>
        <div className="flex items-center min-[1300px]:gap-10 gap-4">
          <Link href="/">
            <Image src={img.shoppingBag} alt="Logo" width={26} height={26} />
          </Link>
          <Link href="/">
            <Image src={img.profile} alt="Logo" width={26} height={26} />
          </Link>
          <p>+7(000)000-00-00</p>
        </div>
        <div className="flex items-center min-[1300px]:gap-10 gap-4">
          <Link href="/">
            <Image src={img.tg} alt="Logo" width={26} height={26} />
          </Link>
          <Link href="/">
            <Image src={img.wa} alt="Logo" width={26} height={26} />
          </Link>
        </div>
      </div>

      {/* Нижний контейнер для десктопа */}
      <div
        className={`bg-[#0a0c11] h-44 max-[1200px]:h-60 transition-all duration-300 bottom-container absolute z-20 left-0 right-0 top-24 ${
          isHovered ? "block" : "hidden"
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredItem("catalog");
        }}
      >
      </div>
    </header>
  );
}
