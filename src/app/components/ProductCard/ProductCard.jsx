import Image from "next/image";

export default function ProductCard({ name, price, image, discount = false, novelty = false }) {
  return (
    <div className="flex flex-col shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square relative bg-[#2B2B2B] min-h-[305px] rounded-lg mb-5 flex items-center justify-center">
        <img 
          src={image} 
          alt={name}
          className="sm:max-h-48 sm:min-h-48 min-h-80 object-cover"
        />
        
        {/* Контейнер для кнопок с анимацией */}
        <div className="absolute top-2 right-2 z-20 group">
          <div className="relative flex items-center bg-[#0A0C11] rounded-full transition-all duration-300 hover:pr-2">
            {/* Исправленная кнопка с плюсом */}
            <button className="w-8 h-8 flex items-center justify-center text-[#f59b00] relative">
              <Image src="/images/iconplus.svg" alt="Plus" width={20} height={20} />
            </button>
            
            {/* Иконка пакета */}
            <div className="w-0 overflow-hidden opacity-0 transition-all duration-300 group-hover:w-6 group-hover:opacity-100">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-5 w-5 text-[#f59b00]" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" 
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-auto">
        <h3 className="font-semibold text-white text-md mb-2">{name}</h3>
        <div>
          <span className="text-[#373737] font-semibold text-md">{price} ₽</span>
          {discount && (
            <span className="text-[#0A0C11] text-[13px] py-0.5 px-2 rounded-full bg-[#f59b00] font-semibold text-md ml-5">Скидка</span>
          )}
          {novelty && (
            <span className="text-[#0A0C11] text-[13px] py-0.5 px-2 rounded-full font-semibold bg-[#f59b00] text-md ml-5">Новинка</span>
          )}
        </div>
      </div>
    </div>
  );
}