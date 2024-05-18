import React from "react";
import InputField from "@/components/InputField";
import Button from "@/components/Button";
import Image from "next/image";

export default function ProfilePage() {
  return (
    <div className="min-h-screen p-6 mt-24 bg-gray-100">
      <div className="max-w-4xl p-6 mx-auto bg-white rounded-lg border-neutral-200">
        <h1 className="mb-6 text-lg font-semibold">Profil Pengguna</h1>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2">
            <div className="p-6 mb-6">
              <div className="mt-4">
                <InputField
                  label="Nama Lengkap"
                  type="text"
                  placeholder="Zakaria Sutomo"
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Tanggal Lahir"
                  type="date"
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="No HP/WhatsApps"
                  type="text"
                  placeholder="081234567890"
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Alamat"
                  type="text"
                  placeholder="Jl. Raya Cikarus"
                />
              </div>
              <div className="mt-4">
                <InputField
                  label="Status Pekerjaan"
                  type="text"
                  placeholder="Payoprint"
                />
              </div>
              <div className="mt-6">
                <Button className="w-full">Simpan</Button>
              </div>
              
            </div>
            <div className="p-6">
              <h2 className="mb-4 text-lg font-semibold">Ubah Email</h2>
              <InputField label="Email" type="email" placeholder="email@example.com" />
              <p className="my-4 text-sm text-gray-500">
                Email akan berubah ketika Anda sudah melakukan verifikasi OTP
                yang dikirimkan ke email Anda.
              </p>
              <div className="mt-6">
                <Button className="w-full">Simpan</Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <div className="p-6 mb-6 bg-white border rounded-lg border-grey-200">
              <Image height={32} width={32} src="/avatar.png" alt="Avatar" className="w-32 h-32 mx-auto mb-4 rounded-full" />
              <div className="mt-6">
                <Button className="w-full">Ubah Foto</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
