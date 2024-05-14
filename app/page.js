import CardList from "@/components/card-list";
import DiscountBanner from "@/components/discount-banner";
import HeroSection from "@/components/hero-section";




export default function Home() {
  return (
    <main className="mt-32">
      <HeroSection/>
      <DiscountBanner/>
      <CardList/>
      <CardList/>
    </main>
  );
}
