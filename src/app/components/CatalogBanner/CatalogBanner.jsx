import Link from "next/link";

export default function CatalogBanner({ title, image, link }) {
    return (
      <div className="relative h-full rounded-lg overflow-hidden group">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover "
        />
        <div className="absolute bottom-1/12 left-1/12">
          <Link href={link} className="">
            <p className="rounded-full bg-[#f59b00] text-xl font-semibold  py-2 px-10 group-hover:scale-105 z-10 transition-transform">
              {title}
            </p>
          </Link>
        </div>
      </div>
    );
  }