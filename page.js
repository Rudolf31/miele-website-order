'use client'

import { MainSection } from '../sections/MainSection'
import { FooterSection } from '../sections/FooterSection'
import { FeaturedProductsSection } from '../sections/FeaturedProductsSection'
import { PromotionsSection } from '../sections/PromotionsSection'
import { ContactSection } from '../sections/ContactSection'
import { ProductGridSection } from '../sections/ProductGridSection'
import { Button } from '../components/ui/button'
import { PhoneIcon } from 'lucide-react'

export default function Home() {
  return (
    <div className="bg-[#0a0c11] flex flex-row justify-center w-full">
      <div className="bg-[#0a0c11] overflow-hidden w-full max-w-[1920px] relative">
        <MainSection />
        <FooterSection />
        <FeaturedProductsSection />
        <PromotionsSection />
        <ContactSection />
        <ProductGridSection />
        <Button
          className="fixed w-[60px] h-[60px] bottom-24 right-24 bg-[#f59b00] rounded-full shadow-[2px_4px_4px_#00000040,inset_4px_4px_3px_#ffffff33] p-0 hover:bg-[#f59b00]/90"
          size="icon"
          aria-label="Phone"
        >
          <PhoneIcon className="w-10 h-10" />
        </Button>
      </div>
    </div>
  )
}