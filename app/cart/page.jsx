import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

export default function CartPage() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-6xl p-6 mx-auto mt-24 bg-white rounded-lg shadow-md">
        <h1 className="mb-4 text-xl font-bold">Keranjang</h1>
        <div className="p-4 mb-4 border rounded-lg">
          <div className="flex items-center mb-4">
            <input type="checkbox" className="mr-2 accent-primary-700" />
            <span>Pilih Semua</span>
          </div>
          <div className="py-4 border-t border-b ">
            <div className="flex items-center mb-4">
              <input type="checkbox" className="mr-2 accent-primary-700" />
              <Image
                width={16}
                height={16}
                src="/a4.png"
                alt="Product"
                className="w-16 h-16 mr-4"
              />
              <div>
                <h2 className="text-lg font-semibold">Print makalah A4</h2>
                <p className="text-primary-700">Rp. 15.000</p>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-4 border-t border-dashed">
          <div className="flex items-center justify-between">
            <span className="text-lg font-semibold">Total harga</span>
            <span className="text-lg font-semibold text-primary-700">Rp. 30.000</span>
          </div>
          <div className="mt-8">
          <Button variant="primary">Cetak (3 barang)</Button>

          </div>
        </div>
      </div>
    </div>
  );
}
