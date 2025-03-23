"use client";
import Link from "next/link";
import Image from "next/image";
import * as img from "@/assets/imagesHeader";
import styles from "./Header.module.css";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const catalogItems = [
  { text: "Кофемашины", href: "/catalog/coffee-machines" },
  { text: "Духовые шкафы", href: "/catalog/ovens" },
  { text: "Холодильники", href: "/catalog/refrigerators" },
  { text: "Варочные панели", href: "/catalog/cooktops" },
  { text: "СВЧ", href: "/catalog/microwaves" },
  { text: "Гладильные системы", href: "/catalog/ironing-systems" },
  { text: "Пылесосы", href: "/catalog/vacuums" },
  { text: "Стиральные машины", href: "/catalog/washing-machines" },
  { text: "Химия", href: "/catalog/chemicals" },
  { text: "Сушильные машины", href: "/catalog/dryers" },
];

const showroomItems = [
  { text: "Шоурум", href: "/showroom/showroom" },
  { text: "Видео", href: "/showroom/videos" },
  { text: "О Miele", href: "/showroom/about-miele" },
  { text: "Обзоры", href: "/showroom/reviews" },
  { text: "Акции", href: "/showroom/promotions" },
  { text: "Рейтинги", href: "/showroom/ratings" },
  { text: "Статьи", href: "/showroom/articles" },
  { text: "Глоссарий", href: "/showroom/glossary" },
];

const supportItems = [
  { text: "Доставка и оплата", href: "/support/delivery-payment" },
  { text: "Подборщик-комплектатор", href: "/support/configurator" },
  { text: "Сервис", href: "/support/service" },
  { text: "Дизайнерам", href: "/support/for-designers" },
  { text: "Ремонт Miele", href: "/support/miele-repair" },
  { text: "FAQ", href: "/support/faq" },
  { text: "Возврат и обмен", href: "/support/returns" },
  { text: "Контакты", href: "/support/contacts" },
];

export default function Header() {
  const pathname = usePathname();
  const [currentPath, setCurrentPath] = useState(pathname);
  const [isHovered, setIsHovered] = useState(false); // Состояние для отслеживания наведения
  const [hoveredItem, setHoveredItem] = useState("catalog");

  useEffect(() => {
    setCurrentPath(pathname);
  }, [pathname]);

  // Функция для отображения элементов в зависимости от наведения
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
      <div className="bg-[#0a0c11] text-white flex items-center justify-center w-full gap-10">
        <div className="flex items-center gap-10">
          <Link href="/">
            <Image src={img.logo} alt="Logo" width={163} height={70} />
          </Link>
          <div
            className="flex relative items-center justify-evenly font-medium text-xl gap-10 h-24"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              // Не сбрасываем isHovered, если мышь перешла в нижний контейнер
              if (!document.querySelector(".bottom-container")?.matches(":hover")) {
                setIsHovered(false);
                setHoveredItem("catalog"); // Возвращаем начальное значение
              }
            }}
          >
            
            <div className="relative">
              <Link
                href="/catalog"
                className={`flex items-center gap-2 ${
                  currentPath === "/catalog" ? styles.active : ""
                }`}
                onMouseEnter={() => setHoveredItem("catalog")} // Устанавливаем состояние при наведении
              >
                <Image src={img.menu} alt="Logo" width={26} height={26} />
                <p>Каталог</p>
              </Link>
            </div>
            <div className="relative">
              <Link
                href="/showroom"
                className={`${
                  currentPath === "/showroom" ? styles.active : ""
                }`}
                onMouseEnter={() => setHoveredItem("showroom")} // Устанавливаем состояние при наведении
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
                onMouseEnter={() => setHoveredItem("support")} // Устанавливаем состояние при наведении
              >
                <p>Поддержка</p>
              </Link>
            </div>
            <div
              className={`absolute top-full h-36 w-full text-[16px] left-0 bg-[#0a0c11] grid grid-cols-2 z-10 ${
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
      </div>
      {/* Нижний контейнер */}
      <div
        className={`bg-[#0a0c11] h-44 transition-all duration-300 bottom-container absolute left-0 right-0 top-24 ${
          isHovered ? "block" : "hidden"
        }`}
        onMouseEnter={() => setIsHovered(true)} // Оставляем контейнер видимым, если мышь внутри
        onMouseLeave={() => {
          setIsHovered(false);
          setHoveredItem("catalog"); // Возвращаем начальное значение
        }}
      >
        
      </div>
    </header>
  );
}