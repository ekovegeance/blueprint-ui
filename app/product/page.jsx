import Image from 'next/image';
import InputField from '@/components/InputField';
import Button from '@/components/Button';
import CardList from '@/components/CardList';

export default function ProductPage() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="flex flex-col items-center max-w-6xl mx-auto bg-white rounded-lg shadow-md sm:flex-row md:items-start mt-28">
        <div className="w-full p-4 border border-gray-200 rounded-lg md:w-1/2 md:h-72 lg:h-96">
          <Image
            src="/a4.png"
            alt="Product Image"
            width={500}
            height={500}
            className="rounded-lg"
          />
        </div>
        <div className="w-full p-4 md:w-1/2">
          <h1 className="mb-2 text-xl font-bold">Print Makalah</h1>
          <p className="mb-4 text-xl font-semibold text-primary-700">Rp. 15.000</p>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Jumlah Qty</label>
            <div className="flex items-center mt-1">
              <button className="px-3 py-1 border rounded-l-lg">-</button>
              <input
                type="number"
                className="w-12 text-center border-t border-b"
                value="2"
                readOnly
              />
              <button className="px-3 py-1 border rounded-r-lg">+</button>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <InputField label="Catatan" type="text"/>
          </div>
          
          <div className="flex mt-4 space-x-2">
            <Button variant="primarySubtle"> Keranjang </Button>
            <Button variant="primary"> Cetak </Button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <CardList/>
       
      </div>
    </div>
  );
}

