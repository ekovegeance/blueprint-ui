import React from 'react';
import Button from '@/components/Button';
import Select from '@/components/Select';
import InputField from '@/components/InputField';

export default function CheckoutPage() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
      <div className="max-w-6xl p-6 mx-auto mt-24 bg-white rounded-lg shadow-md">
        <div className="flex items-center mb-4">
          <h1 className="text-xl font-semibold text-neutral-700">checkout</h1>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div>
            <Select label="Pilih pengiriman" placeholder="Silakan Pilih"></Select>
            <Select label="Lokasi tujuan" placeholder="Silakan Pilih"></Select>
            <Select label="Patokan" placeholder="Silakan Pilih"></Select>
            <Select label="Pilih Station" placeholder="Silakan Pilih"></Select>
            <div className="mb-4">
            <InputField type="date" label="Tanggal antar" placeholder="Tanggal"/>

            </div>
            <Select label="Jam antar" placeholder="Silakan Pilih"></Select>
            <Select label="Pilih metode Pembayaran" placeholder="Silakan Pilih"></Select>
          
          </div>
          <div>
            <div className="p-4 mb-4 bg-gray-100 border border-gray-200 rounded-md">
              <button className="w-full text-primary-700">
                Makin hemat pakai promo
              </button>
            </div>
            <div className="p-4 mb-4 bg-gray-100 rounded-md">
              <h2 className="text-lg font-semibold">Ringkasan belanja</h2>
              <div className="flex justify-between mt-2">
                <span>Total harga (3 Barang)</span>
                <span>Rp. 45.100</span>
              </div>
              <hr className="my-4 border-dashed" />
              <div className="flex justify-between font-semibold">
                <span>Total harga</span>
                <span>Rp. 45.000</span>
              </div>
              <Button className="w-full mt-4" variant="primary">Beli (3 barang)</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

