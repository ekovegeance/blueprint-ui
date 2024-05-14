import Button from "./button";

export default function Card() {
  return (
    <div>
      <div className="max-w-xs overflow-hidden border-2 rounded-xl border-slate-150">
        <img className="w-full" src="/a4.png" alt="Card image" />
        <div className="px-6 py-4 border-t-2 border-slate-50">
          <div className="mb-2 text-lg font-bold">Kertas A4</div>
          <p className="text-base font-semibold text-gray-700">
           Rp. 100.000
          </p>
        </div>
        <div className="px-6 py-4">
        <Button variant="primary">Beli</Button>
        </div>
        
       
      </div>
    </div>
  );
}
