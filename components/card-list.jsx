import Button from "./button";
import Card from "./card";



export default function CardList() {
  return (
    <div className="container px-6 mx-auto mt-10 xl:mt-20 2xl:px-36 ">
    <div className="flex items-center justify-start gap-3">
      <div className="font-semibold text-md xl:text-xl">
        Mau Print
      </div>
      <div>
        <Button variant="primarySuble">Lainnya</Button>
      </div>
    </div>
    <div className="grid grid-cols-2 gap-2 mt-8 md:gap-4 sm:grid-cols-3 md:grid-cols-4 ">
    <Card/>
    <Card/>
    <Card/>
    <Card/>
    </div>
    
  </div>
  )
}
