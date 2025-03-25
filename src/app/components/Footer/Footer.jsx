import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  // Данные для ссылок
  const catalogLinks = [
    { href: "/coffee-machines", text: "Кофемашины" },
    { href: "/refrigerators", text: "Холодильники" },
    { href: "/microwaves", text: "СВЧ" },
    { href: "/vacuum-cleaners", text: "Пылесосы" },
    { href: "/chemistry", text: "Химия" },
    { href: "/ovens", text: "Духовые шкафы" },
    { href: "/cooktops", text: "Варочные панели" },
    { href: "/ironing-systems", text: "Гладильные системы" },
    { href: "/washing-machines", text: "Стиральные машины" },
    { href: "/dryers", text: "Сушильные машины" }
  ];

  const showroomLinks = [
    { href: "/showroom", text: "Шоурум" },
    { href: "/about", text: "О Miele" },
    { href: "/promotions", text: "Акции" },
    { href: "/articles", text: "Статьи" },
    { href: "/glossary", text: "Глоссарий" },
    { href: "/video", text: "Видео" },
    { href: "/reviews", text: "Обзоры" },
    { href: "/ratings", text: "Рейтинги" }
  ];

  const supportLinks = [
    { href: "/delivery", text: "Доставка и оплата" },
    { href: "/service", text: "Сервис и плата" },
    { href: "/repair", text: "Ремонт Miele" },
    { href: "/returns", text: "Возврат и обмен" },
    { href: "/contacts", text: "Контакты" },
    { href: "/configurator", text: "Подборщик-комплектатор" },
    { href: "/for-designers", text: "Дизайнерам" },
    { href: "/faq", text: "FAQ" }
  ];

  return (
    <footer className="bg-[#0a0c11] text-white py-8 lg:py-10">
      <div className="container mx-auto px-4 sm:px-6 font-medium">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Логотип и контактная информация */}
          <div className="order-1 sm:order-none">
            <div className="mb-4 lg:mb-6">
              <Image
                src="/images/logo.svg"
                alt="Miele Logo"
                width={120}
                height={52}
                className="w-32 lg:w-40"
              />
            </div>
            <div className="space-y-1 lg:space-y-2 mb-3 lg:mb-4">
              <p className="text-sm lg:text-base">ПН-СБ, 10:00-18:00</p>
              <p className="font-semibold text-lg lg:text-xl">8 (800) 555-35-35</p>
              <p className="text-sm lg:text-base">example@mail.ru</p>
            </div>
            <div className="space-y-1 text-sm lg:text-base">
              <p className="text-[#373737]">Москва</p>
              <p>ул. Улицаулица, д. 0</p>
              <p className="mt-1 lg:mt-2 text-[#373737]">Санкт-Петербург</p>
              <p className="mb-6 lg:mb-10">ул. Улицаулица, д. 0</p>
              <p className="text-xs lg:text-sm">(c) Все права защищены, 2025</p>
            </div>
          </div>

          {/* Каталог */}
          <div className="order-2 sm:order-none mt-6 sm:mt-0">
            <h3 className="mb-3 lg:mb-4 text-[#373737] text-sm lg:text-base">Каталог</h3>
            <ul className="space-y-1 lg:space-y-2 text-sm lg:text-base">
              {catalogLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#f59b00] transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Шоурум */}
          <div className="order-3 sm:order-none mt-6 sm:mt-0">
            <h3 className="text-sm lg:text-base font-medium mb-3 lg:mb-4 text-[#373737]">Шоурум</h3>
            <ul className="space-y-1 lg:space-y-2 text-sm lg:text-base">
              {showroomLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#f59b00] transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Поддержка */}
          <div className="order-4 sm:order-none mt-6 sm:mt-0">
            <h3 className="text-sm lg:text-base font-medium mb-3 lg:mb-4 text-[#373737]">Поддержка</h3>
            <ul className="space-y-1 lg:space-y-2 text-sm lg:text-base">
              {supportLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-[#f59b00] transition-colors">
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}