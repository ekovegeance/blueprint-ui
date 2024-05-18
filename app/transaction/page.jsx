'use client'

import * as Tabs from '@radix-ui/react-tabs';
import Image from 'next/image';
import React, { createContext, useContext } from 'react';
import Button  from '@/components/Button';

export default function TransactionPage() {
  return (
    <div className="min-h-screen p-4 bg-gray-100">
        <div className="max-w-6xl p-6 mx-auto mt-24 bg-white rounded-lg shadow-md">
      <h1 className="mb-4 text-xl font-bold">Transaksi</h1>
      <Tabs.Root defaultValue="proses">
        <Tabs.List className="flex border-b border-gray-200">
          <Tabs.Trigger value="selesai" className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-primary-700 focus:font-semibold">
            Selesai
          </Tabs.Trigger>
          <Tabs.Trigger value="proses" className="px-4 py-2 text-gray-600 hover:text-gray-800 focus:outline-none focus:text-primary-700 focus:font-semibold">
            Proses
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="selesai" className="p-4">
          <p>Transaksi selesai akan ditampilkan di sini.</p>
        </Tabs.Content>
        <Tabs.Content value="proses" className="p-4">
          <div className="p-4 mb-4 border rounded-lg">
            <div className="grid items-center grid-cols-1 gap-4 md:grid-cols-4">
              <Image src="/a4.png" alt="Product Image" width={50} height={50} className="mr-4" />
              <div className="">
                <h2 className="text-lg font-semibold">Print Makalah Kertas A4</h2>
                <p className="text-primary-700">Rp. 15.000</p>
              </div>
              <div>
              <Button className="px-2 py-1">Bayar di kurir</Button>
              </div>
              <div>
                <p className="text-gray-500">PP17020628265032</p>
                <p className="text-gray-500">COD - Kurir</p>
              </div>
            </div>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
    </div>
  );
}

