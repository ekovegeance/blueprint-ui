import React from "react";
import Link from "next/link";
import Button from "@/components/Button";
import InputField from "@/components/InputField";

export default function RegisterPage() {
  return (
    <div className="flex flex-col min-h-screen mt-20 md:mt-28 md:flex-row-reverse">
      {/* Sisi Kanan: Formulir Pendaftaran */}
      <div className="flex items-center justify-center bg-white md:w-1/2">
        <div className="w-full max-w-md p-8 bg-white">
          <h3 className="mb-4 text-lg font-semibold text-primary-700">Daftar Akun Baru</h3>
          <h4 className="mb-10 text-base text-neutral-400">Buat akun hanya dalam beberapa langkah mudah.</h4>
          <form>
            <div className="mb-4"><InputField type="text" label="Nama" placeholder="Nama Lengkap"/></div>
            <div className="mb-4"><InputField type="text" label="No HP/ Whatsapp" placeholder="No HP/ Whatsapp"/></div>
            <div className="mb-4"><InputField type="email" label="Email" placeholder="Email"/></div>
            <div className="mb-4"><InputField type="password" label="Password" placeholder="Password"/></div>
            <div className="mb-4"><InputField type="password" label="Konfirmasi Password" placeholder="Konfirmasi Password"/></div>
            <Button variant="primary" className="w-full h-10 mt-4">Daftar</Button>
          </form>
          <div className="flex justify-end gap-2 mt-3">
            <p>Sudah punya akun?</p>
            <Link href="/login" className="text-primary-700 hover:underline">Masuk</Link>
          </div>
        </div>
      </div>
      {/* Sisi Kiri: Ilustrasi atau Informasi Tambahan */}
      <div className="items-center justify-center hidden md:w-1/2 bg-gray-50 md:block ">
        <div className="flex items-center justify-center h-full">
          <img
            src="/register.png"
            alt="Register Illustration"
            className="w-3/6 mx-auto"
          />
        </div>
      </div>
    </div>
  );
}

